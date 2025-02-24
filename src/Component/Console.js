import React, { useState, useEffect, useRef } from "react";
import raw_text from "../data/console.txt";
import file_info from "../data/files.json";
import hello_app_text from "../data/hello_app.txt";
import "../css/Console.scss";


let hello_app = [""];

const Console = ({ name = "user", machine = "server", fast = false }) => {
  const NORMAL_SPEED = 70;
  const FAST_SPEED = 1;
  let [matrixMode, setMatrixMode] = useState(false);
  let [currentDir, setCurrentDir] = useState("");
  let [secretCounter, setSecretCounter] = useState(0);

  const SECRET_MESSAGES = [
    "01010100 01101000 01100101 00100000 01000011 01010100 01000110 00100000 01101001 01110011 00100000 01100001 00100000 01101100 01101001 01100101",
    "There's no place like 127.0.0.1",
    "SUPER_SECRET: Pizza time!",
    "System breach detected... just kidding!",
  ];


    useEffect(() => {
      fetch(hello_app_text)
        .then((res) => res.text())
        .then((text) => {
          console.log(text);
          hello_app[0] = text;
          console.log(hello_app);
        });
    }, []);

  let directoryStructure = file_info["files"];

  const commands_available = {
    ls: [
      (args) => {
        const pathParts = currentDir.split("/").filter((p) => p);
        console.log(currentDir);
        let current = directoryStructure;
        for (const part of pathParts) {
          current = current[part];
          if (!current) break;
        }

        if (!current) return ["Directory not found"];

        const items = [];
        if (current.files) items.push(...Object.keys(current.files));
        items.push(...Object.keys(current).filter((k) => k !== "files"));
        return items.map((item) => (item.endsWith(".txt") ? item : `${item}/`));
      },
      "List directory contents",
    ],

    cd: [
      (args) => {
        if (args.length < 2) return ["cd: missing argument"];
        const target = args[1];

        if (target === "..") {
          currentDir = currentDir.split("/").slice(0, -1).join("/");
          setCurrentDir(currentDir);
          return [];
        }

        const newPath = currentDir ? `${currentDir}/${target}` : target;
        const pathParts = newPath.split("/").filter((p) => p);
        let current = directoryStructure;

        for (const part of pathParts) {
          current = current[part];
          if (!current) return [`cd: ${target}: No such directory`];
        }
        console.log("path", newPath);
        currentDir = newPath;
        setCurrentDir(newPath);
        return [];
      },
      "Change directory",
    ],

    cat: [
      (args) => {
        if (args.length < 2) return ["cat: missing file operand"];

        const pathParts = currentDir.split("/").filter((p) => p);
        let current = directoryStructure;
        for (const part of pathParts) {
          current = current[part];
          if (!current) return ["File not found"];
        }

        const fileName = args[1];
        if (!current.files?.[fileName])
          return [`cat: ${fileName}: No such file`];

        const content = current.files[fileName];
        return content.split("\n");
      },
      "Display file contents",
    ],

    sudo: [
      () => [
        "sudo: You are not in the sudoers file. This incident will be reported.",
      ],
      "Pretend to have superpowers",
    ],

    make: [
      (args) => {
        if (args[1] === "love")
          return ["make: *** No rule to make target 'love'.  Stop."];
        return ["g++ -o app main.cpp -Wall -Wextra -pedantic"];
      },
      "Compile source code",
    ],

    matrix: [
      () => {
        matrixMode = !matrixMode;
        setMatrixMode(matrixMode);
        return [!matrixMode ? "Exiting Matrix..." : "Entering Matrix..."];
      },
      "Simulate the Matrix (Easter egg)",
    ],

    greet: [
      () => ["Hello there! General Kenobi!"],
      "Friendly greeting (Easter egg)",
    ],

    telnet: [
      () => [
        "Connecting to towel.blinkenlights.nl...",
        "Launching Star Wars Episode IV...",
        "( (  _\\\n" +
          " ) )))  \\\\      )\\ _)\n" +
          "(--      \\\\    / /(_\\\n" +
          " (  _ _   \\\\  / / _(_\n" +
          "  )\\   )\\   \\/ / (_)\n" +
          " /  \\ /  \\     / /",
        "Use the Force, Luke!",
      ],
      "Watch Star Wars in ASCII",
    ],
    "./cyberhumanum_app": [
      (args) => {
        console.log(hello_app);
        let text = "" + hello_app[0];
        return text.split("\n");
      },
      "cyberhumanum_app",
    ],
    clear: [
      (args) => {
        listeLine = [""];
        setListeLine(listeLine);
        displayLines = ["clear"];
        setDisplayLines(displayLines);
        resultList = [false];
        setResultList(resultList);
        return [""];
      },
      "Clean the screen",
    ],
    reload: [
      (args) => {
        setTimeout(() => {
          start = false;
          setStart(false);

          listeLine = [];
          setListeLine(listeLine);

          resultList = [false];
          setResultList(resultList);

          displayLines = [""];
          setDisplayLines(displayLines);

          currentIndex = 0;
          setCurrentIndex(currentIndex);

          currentLine = "";
          setCurrentLine(currentLine);

          liveCommand = "";
          setLiveCommand(liveCommand);

          focusTerminal = true;
          setFocusTerminal(focusTerminal);

          windowEventReady = false;
          setWindowEventReady(windowEventReady);

          window.removeEventListener("keydown", handleKeydown);

          fetch(raw_text)
            .then((r) => r.text())
            .then((text) => {
              listeLine = text.split("\n");
              setListeLine(listeLine);
            });
        }, 0);
        return [];
      },
      "Allow you to reload the animation of this screen",
    ],
  };

  useEffect(() => {
    const handleSecret = () => {
      if (secretCounter >= 3) {
        secretCounter = 0;
        setSecretCounter(secretCounter);
        return SECRET_MESSAGES[
          Math.floor(Math.random() * SECRET_MESSAGES.length)
        ];
      }
      secretCounter += 1;
      setSecretCounter(secretCounter);
      return [];
    };

    commands_available["42"] = [handleSecret, "The answer to everything"];
    commands_available["konami"] = [
      () => ["↑↑↓↓←→←→BA: Secret mode activated!", "But nothing happened..."],
      "Classic code",
    ];
  }, [secretCounter]);

  let [listeLine, setListeLine] = useState([]);
  let [resultList, setResultList] = useState([false]);
  let [displayLines, setDisplayLines] = useState([""]);
  let [currentIndex, setCurrentIndex] = useState(0);
  let [currentLine, setCurrentLine] = useState("");
  let [start, setStart] = useState(true);
  let [speed, setSpeed] = useState(fast ? FAST_SPEED : NORMAL_SPEED);
  let [windowEventReady, setWindowEventReady] = useState(false);
  let [focusTerminal, setFocusTerminal] = useState(true);

  let [liveCommand, setLiveCommand] = useState("");
  const myRef = useRef(null);
  const hasVerticalScrollbar = () =>
    myRef.current
      ? myRef.current.scrollHeight > myRef.current.clientHeight
      : false;

  //on gère le scroll
  const lastRef = useRef(null);
  const updateScroll = () =>
    myRef.current
      ? myRef.current.scrollTo(0, lastRef.current.offsetTop)
      : false;

  const handleKeydown = async (event) => {
    event.preventDefault();
    let keyString = String(event.key);

    console.log(keyString);
    if (keyString.length == 1) {
      liveCommand = liveCommand + keyString;
    } else if (keyString == "Backspace") {
      liveCommand = liveCommand.substring(0, liveCommand.length - 1);
    } else if (keyString == "Enter") {
      enterFunction();
    }
    setLiveCommand(liveCommand);

    //banger
    setWindowEventReady((state) => !state);

    //a chaque fois on focus ce qu'on écrit
    setTimeout(() => {
      //on descend le focus
      setDisplayLines(displayLines);
      updateScroll();
    }, 100);
  };

  const enterFunction = async () => {
    //on initialise la ligne qu'on était en train d'écrire
    displayLines[displayLines.length - 1] = liveCommand;
    //on separe arguments et command
    const args = liveCommand.split(" ");
    const command = args[0];

    //résultat de la commande
    if (command == "help") {
      let liste_rep = Object.keys(commands_available).map(
        (key) => key + ": " + commands_available[key][1]
      );
      liste_rep.unshift("----------");
      liste_rep.unshift("Help");
      liste_rep.map((elt) => {
        resultList.push(true);
        displayLines.push(elt);
      });
    } else if (Object.keys(commands_available).indexOf(command) != -1) {
      const liste_rep = commands_available[command][0](args);
      liste_rep.map((elt) => {
        resultList.push(true);
        displayLines.push(elt);
      });
    } else {
      resultList.push(true);
      displayLines.push(command + ": command not found");
    }

    //nouvelle ligne pour écrire
    displayLines.push("");
    resultList.push(false);

    //on met tout à jour
    setResultList(resultList);
    setDisplayLines(displayLines);

    //on vide la ligne actuelle
    liveCommand = "";
  };

  let clockFunction = () => {
    if (currentLine == "" && currentIndex < listeLine.length) {
      if (currentIndex != 0) {
        displayLines.push("");
        resultList.push(false);
        speed = NORMAL_SPEED;
        setSpeed(speed);
      }
      currentLine = listeLine[currentIndex];
      setCurrentLine(currentLine);
      setDisplayLines(displayLines);
      setResultList(resultList);
    }

    if (currentLine != "") {
      let tmp = displayLines;
      if (currentLine[0] + currentLine[1] + currentLine[2] != "$$$") {
        tmp[currentIndex] += currentLine[0];
      } else {
        resultList[currentIndex] = true;
        setResultList(resultList);
        currentLine = currentLine.slice(2);
        speed = FAST_SPEED;
        setSpeed(speed);
      }
      currentLine = currentLine.slice(1);
      setCurrentLine(currentLine);
      setDisplayLines(tmp);
    }
    if (currentLine == "" && currentIndex < listeLine.length) {
      currentIndex++;
      setCurrentIndex(currentIndex);
      if (currentIndex == listeLine.length) {
        speed = 10;
        setSpeed(speed);
      }
    }
    if (
      lastRef.current &&
      currentIndex < displayLines.length &&
      hasVerticalScrollbar() &&
      focusTerminal
    ) {
      updateScroll();
    }

    //quand on a fini de mettre le texte
    if (currentIndex == listeLine.length - 1) {
      //on arrete le focus
      focusTerminal = false;
      setFocusTerminal(focusTerminal);

      //on remet un dernier coup de focus
      setTimeout(() => {
        //on descend le focus
        updateScroll();
      }, 100);

      window.addEventListener("keydown", handleKeydown);

      //on lance la commande help à la fin
      displayLines.push("");
      resultList.push(false);
      liveCommand = "help";
      enterFunction();
      displayLines.pop();
      resultList.pop();
      setDisplayLines(displayLines);
      setResultList(resultList);
      setLiveCommand(liveCommand);
    }

    setTimeout(clockFunction, speed);
  };

  //on lance qu'une fois
  if (start && listeLine.length == 0) {
    start = false;
    setStart(false);
    fetch(raw_text)
      .then((r) => r.text())
      .then((text) => {
        listeLine = text.split("\n");
        setListeLine(listeLine);
        setTimeout(clockFunction, 500);
        start = false;
        setStart(false);
      });
  }

  if (start && listeLine.length != 0) {
    setTimeout(clockFunction, 500);
    start = false;
    setStart(false);
  }

  if (currentIndex == listeLine.length && listeLine.length != 0) {
    liveCommand = listeLine[currentIndex - 1];
    currentIndex++;
    console.log("init:", liveCommand, currentIndex);
    setLiveCommand(liveCommand);
    setCurrentIndex(currentIndex);
    windowEventReady = true;
    setWindowEventReady(windowEventReady);
  }

  return (
    <div ref={myRef} className={`Console ${matrixMode ? "matrix-mode" : ""}`}>
      {/* Keep existing rendering logic */}
      {displayLines.map((elt, i, array) => (
        <code ref={i === array.length - 1 ? lastRef : null} key={i}>
          {!resultList[i] && (
            <div className="preCommand">
              <p className="nameCommand">
                {name}@{machine}
              </p>
              :<mark>~$</mark>
            </div>
          )}
          {i >= listeLine.length - 1 &&
          i == displayLines.length - 1 &&
          !resultList[i] ? (
            <pre>{liveCommand}</pre>
          ) : (
            <pre>{elt}</pre>
          )}
          {i == array.length - 1 && <div id="cursor"></div>}
        </code>
      ))}
    </div>
  );
};

export default Console;