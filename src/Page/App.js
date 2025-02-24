import "../css/App.scss";

import React, {useState} from "react";
import Typewriter from '../Component/TypeWriter';

import Console from '../Component/Console';
import Timeline from '../Component/TimeLine'

function AppPage() {
    const [open, setOpen] = useState(false);
    const [next, setNext] = useState(false);
    return (
      <>
        <div className="AppPage1 Page">
          <Typewriter
            text="CyberHumanum'Est"
            speed={100}
            size={100}
            onEnd={() => setNext(true)}
          />
          {next && (
            <Typewriter
              text="2025"
              speed={100}
              size={100}
              onEnd={() => setOpen(true)}
            />
          )}
          <div className="delay-home" style={{ opacity: open ? 1 : 0 }}>
            <h1>Presentation de l'evenement par l'equipe du Cryptanga</h1>
            <h2>
              Le CyberHumanum'Est est un evenement repliquant une cyberguerre
              entre deux pays,{" "}
            </h2>
            <h2>
              se battant pour obtenir un contrat avec l'ile tant convoitee des
              Riverschelles.
            </h2>
          </div>
        </div>
        <div className="fleche" style={{ opacity: open ? 1 : 0 }}>
          <a href="#frise">
            <div className="scroll-down-dude"></div>
          </a>
        </div>
        <div
          id="frise"
          className="frise"
          style={{ opacity: open ? 1 : 0, display: open ? "flex" : "none" }}
        >
          <h2 className="title">
            LES ETAPES DU <span>CYBERHUMANUM'EST</span>
          </h2>
          <Timeline />
        </div>
        <div
          className="AppPage3 Page"
          style={{ opacity: open ? 1 : 0, display: open ? "flex" : "none" }}
        >
          <Console name="cryptanga" machine="CHE" />
        </div>
      </>
    );
}

export default AppPage;
