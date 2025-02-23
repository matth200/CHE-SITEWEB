import "../css/App.scss";

import React, {useState} from "react";
import Typewriter from '../Component/TypeWriter';

import Console from '../Component/Console';

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
                <div className="delay-home" style={{opacity: open ? 1 : 0}}>
                    <h1>Présentation de l'évenement par l'équipe du Cryptanga</h1>
                    <h2>Le CyberHumanum'Est est un évenement répliquant une cyberguerre entre deux pays, </h2>
                    <h2>se battant pour obtenir un contrat avec l'ile tant convoitée des Riverschelles.</h2>
                </div>
            </div>
            <div
                className="AppPage2 Page"
                style={{opacity: open ? 1 : 0, display: open ? "flex" : "none"}}
            >
                <div className="block-left">
                    {/* <img src={GeoideImg} alt="geoide-nous"/> */}
                </div>
                <div className="block-right">
                    <h1>Présentation de la meilleure équipe</h1>
                    <Typewriter text="Les CRYPTANGA" speed={100} size={60}/>
                </div>
            </div>
            <div
                className="AppPage3 Page"
                style={{opacity: open ? 1 : 0, display: open ? "flex" : "none"}}
            >
                <Console name="cryptanga" machine="CHE"/>
            </div>
        </>
    );
}

export default AppPage;
