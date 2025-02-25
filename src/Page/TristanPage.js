import React from 'react';
import '../css/Tristan.scss';
import Typewriter from "../Component/TypeWriter";
import ButtonBack from "../Component/ButtonBack";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";

import remisePrix from '../image/remise_prix2.png';


export default function CyberHumanumAwardsPage(){
    return (
        <div className="Page CyberHumanumAwardsPage">
            <ButtonBack/>
            <Typewriter text="CYBERHUMANUM'EST 2025 - CEREMONIE DE REMISE DES PRIX" speed={50}/>
            <div className="body">
                <div className="left">
                    <h2>LA CEREMONIE</h2>
                    <p className="bahnschrift">
                        La cérémonie de remise des prix du CyberHumanum'Est 2025 a marqué la fin d'une intense semaine de compétition.
                        Les équipes les plus performantes ont été récompensées pour leurs prouesses en attaque, défense, gestion de crise
                        et lutte d’influence.
                    </p>

                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="success"/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent className="bahnschrift">
                                <strong>31 Janvier 2025</strong>
                                <br/>
                                Début de la cérémonie à l'IUT Nancy Brabois
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="success"/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent className="bahnschrift">
                                <strong>Annonce des Lauréats</strong>
                                <br/>
                                Remise des prix pour les différentes catégories
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="success"/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent className="bahnschrift">
                                <strong>Discours du Colonel William Dupuy</strong>
                                <br/>
                                Félicitations aux participants et mise en avant des performances
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="success"/>
                            </TimelineSeparator>
                            <TimelineContent className="bahnschrift">
                                <strong>Clôture et Forum de Recrutement</strong>
                                <br/>
                                Échange entre participants et entreprises partenaires
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>

                <div className="right">
                    <h2>LES VAINQUEURS</h2>
                    <div className="bahnschrift">
                        <p>
                            Voici les équipes qui ont marqué cette édition 2025 :
                        </p>

                        <ul className="team-list">
                            <li className="offensive">
                                <strong>Meilleure attaque : APT54</strong>
                            </li>
                            <li className="defensive">
                                <strong>Meilleure défense : CRYPTANGA</strong>
                            </li>
                            <li className="influence">
                                <strong>Meilleure lutte d’influence : ANUMÉRIC</strong>
                            </li>
                            <li className="crisis">
                                <strong>Meilleure gestion de crise : ANUMÉRIC</strong>
                            </li>
                            <li className="scad-hack">
                                <strong>Prix Scad'Hack : APT54</strong>
                            </li>
                            <li className="overall">
                                <strong>Meilleure équipe de l'exercice : CRYPTANGA</strong>
                            </li>
                        </ul>
                    </div>
                    <img src={remisePrix} alt="Remise des prix"/>
                    <p className="bahnschrift">Récompenses des lieutenants et capitaines</p>


                </div>
            </div>

            <div className="bottom">
                <h3>UNE EXPERIENCE UNIQUE</h3>
                <p className="bahnschrift">
                    Le CyberHumanum'Est 2025 a permis aux participants de se confronter à des scénarios cyber réalistes,
                    mettant à l’épreuve leurs compétences techniques et stratégiques. Cette édition a renforcé les liens
                    entre étudiants, professionnels et institutions engagées dans la cybersécurité.
                </p>
            </div>
        </div>
    );
}
