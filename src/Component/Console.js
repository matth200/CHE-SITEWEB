import React, { useState, useEffect, useRef } from "react";
import raw_text from "../data/console.txt";
import file_info from "../data/files.json";
import hello_app_text from "../data/hello_app.txt";

import '../css/Console.scss';

let hello_app = [""];

let Console = (props) => {
  const NORMAL_SPEED = 70;
  const FAST_SPEED = 1;


  let files = [];
  Object.keys(file_info["files"]).forEach((key) => {
    files.push(key);
  });

  useEffect(() => {
    fetch(hello_app_text)
      .then((res) => res.text())
      .then((text) => {
        console.log(text);
        hello_app[0] = text;
        console.log(hello_app);
      });
  }, []);

  //commands available
  const commands_available = {
    ls: [
      (args) => {
        return files;
      },
      "command to list file",
    ],
    echo: [
      (args) => {
        return [args.filter((e, i) => i > 0).join(" ")];
      },
      "command to display a text",
    ],
    cat: [
      (args) => {
        if (
          args.length > 1 &&
          Object.keys(file_info["files"]).indexOf(args[1]) != -1
        ) {
          let text = file_info["files"][args[1]];
          //text = text.replace("{score}", score[0]);
          return text.split("\n");
        }
        return ["Error file not found"];
      },
      "command to read file",
    ],
    "./app": [
      (args) => {
        console.log(hello_app);
        let text = "" + hello_app[0];
        return text.split("\n");
      },
      "app cv",
    ],
    make: [
      (args) => {
        let text = "g++ -o app main.cpp -lInsaneLibrairy";
        return text.split("\n");
      },
      "compilation",
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
  };

  //directory
  //use of file_info

  let [listeLine, setListeLine] = useState([]);
  let [resultList, setResultList] = useState([false]);
  let [displayLines, setDisplayLines] = useState([""]);
  let [currentIndex, setCurrentIndex] = useState(0);
  let [currentLine, setCurrentLine] = useState("");
  let [start, setStart] = useState(true);
  let [speed, setSpeed] = useState(NORMAL_SPEED);
  let [windowEventReady, setWindowEventReady] = useState(false);
  let [focusTerminal, setFocusTerminal] = useState(true);

  let [liveCommand, setLiveCommand] = useState("");
  const myRef = useRef(null);
  const hasVerticalScrollbar = () =>
    (myRef.current)?(myRef.current.scrollHeight > myRef.current.clientHeight):false;

  //on gère le scroll
  const lastRef = useRef(null);
  const updateScroll = () =>
   (myRef.current)?( myRef.current.scrollTo(0, lastRef.current.offsetTop)):false;

  // useEffect(()=>{
  //     window.addEventListener('keydown', (event) => {
  //         if(windowEventReady){
  //             event.preventDefault();
  //             let keyString = String(event.key);
  //             if(keyString.length==1){
  //                 liveCommand = liveCommand+keyString;
  //             }else if(keyString=="Backspace"){
  //                 liveCommand = liveCommand.substring(0,liveCommand.length-1);
  //             }else if(keyString=="Enter"){
  //                 displayLines[displayLines.length-1] = liveCommand;
  //                 displayLines.push("");
  //                 resultList.push(false);
  //                 setResultList(resultList);
  //                 setDisplayLines(displayLines);
  //                 liveCommand = "";
  //             }
  //             setLiveCommand(liveCommand);
  //         }
  //     });
  // },[]);

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

      window.addEventListener("keydown", async (event) => {
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
      });

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
    <div ref={myRef} className="Console">
      {displayLines.map((elt, i, array) => {
        return (
          <code ref={i == array.length - 1 ? lastRef : null} key={i}>
            {!resultList[i] && (
              <div className="preCommand">
                <p className="nameCommand">mattheo@serveur</p>:<mark>~$</mark>
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
        );
      })}
    </div>
  );
};

export default Console;
