import logo from '../image/CHE.png';
import "../css/App.scss";

import React, { useState } from "react";
import Typewriter from '../Component/TypeWriter';

import GeoideImg from '../image/geoide-nous.jpg';

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
        <h3>Présentation de l'événément</h3>
        <p>blablabla</p>
      </div>
    </div>
    <div
      className="AppPage2 Page"
      style={{ opacity: open ? 1 : 0, display: open ? "flex" : "none" }}
    >
      <div className="block-left">
        {/* <img src={GeoideImg} alt="geoide-nous"/> */}
      </div>
      <div className="block-right">
        <h1>Présentation de la meilleure équipe</h1>
        <Typewriter text="Les CRYPTANGA" speed={100} size={60} />
      </div>
    </div>
  </>
);
}

export default AppPage;
