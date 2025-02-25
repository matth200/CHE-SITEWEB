import React from 'react';
import Typewriter from "../Component/TypeWriter";
import ButtonBack from "../Component/ButtonBack";

import '../css/gael.scss';
import '../css/Bapt.scss';
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import KickOffImg from "../image/FST_CHE.jpg"; 
import QuiImg from "../image/quiCHE.jpg";
import GymnaseCHE from "../image/gymnaseCHE.jpg";

export default function KickOffPage() {
    return (
        <div className="KickOffPage">
            <ButtonBack />
            <Typewriter text="CYBERHUMANUM'EST 2025 - KICK-OFF : DECOUVERTE DE L'EVENT" speed={50} />
            
            <p>Le Kick-Off du CyberHumanum'Est 2025 a lancé officiellement le début de cette 5ème édition de l'exercice ! Le rôle de cette journée a été de présenter l'événement dans sa globalité ainsi qu'à découvrir l'ensemble des participants. </p>
            
            <div className="body">
                <div className="bahnschrift">
                    <h2>QU'EST-CE QUE LE CYBERHUMANUM'EST (CHE) ?</h2>
                    <p>
                        CyberHumanum'Est est un exercice grandeur nature de cyber-guerre, prenant la forme d’un war game (attaque-défense) où plusieurs équipes s’affrontent dans un contexte fictif et dynamique. 
                        Cet événement, conçu pour former et challenger les participants, se concentre sur la cybersécurité à travers trois volets principaux :
                    </p>
                    <ul className="che-objectives">
                        <li><strong>Lutte Informatique Offensive (LIO)</strong> : Attaques pour tester les vulnérabilités et exploiter les failles.</li>
                        <li><strong>Lutte Informatique Défensive (LID)</strong> : Défense des infrastructures contre les cyberattaques, avec une gestion proactive des menaces.</li>
                        <li><strong>Lutte Informatique d'Influence (LII)</strong> : Stratégies d’influence numérique pour manipuler ou protéger l’opinion publique dans le cadre du scénario.</li>
                    </ul>
                    <p>
                        Chaque année, un scénario unique évolue avec les contributions des participants, impliquant des infrastructures virtuelles et physiques (plusieurs centaines d'assets) à attaquer ou défendre. 
                        Les thématiques abordées incluent l’électronique, SCADA, IoT, réseaux, reverse engineering, stéganographie, cryptographie, forensic et pentest.
                    </p>
                    <p>
                        Le CHE met l’accent sur des compétences techniques (collecte d’information, scans de vulnérabilités, exploitation, persistance, analyse de traces) ainsi que sur des aspects stratégiques comme la gouvernance, la communication et la gestion de crise. 
                        Cet exercice structuré militairement en équipes avec des postes de commandement, des capitaines et des lieutenants pour chaque unité (LIO, LID, LII), vise à simuler des opérations réelles, préparant les participants à des situations complexes de cybersécurité. 
                    </p>

                    <div className='boxcenter'>
                        <h2>POUR QUI ET AVEC QUI ?</h2>
                        <img src={QuiImg} alt="QUI CHE 2025"/>
                    </div>
                </div>
            </div>


            <div className="colonnedeux bahnschrift">
                
                <div className="left bahnschrift">
                    <h2> LIEU DU DEROULEMENT DE L'EVENT</h2>
                    <p>
                        Cette 5ème édition du CyberHumanum'Est s'est déroulé cette année dans les locaux de Polytech Nancy et principalement dans le gymnase de l'école :
                    </p>
                    <div className="image-container">
                        <img src={GymnaseCHE} alt="OU CHE 2025" className="image-normal" />
                    </div>
                </div>

                <div className="right bahnschrift">
                    <h2>PLANNING DE LA SESSION 2025</h2>
                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="error" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className="bahnschrift">
                                <strong>Kick-Off et début de la préparation à l'exercice </strong><br /> Le 10 octobre 2025 à la Faculté des Sciences et Technologies de Nancy
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="error" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className="bahnschrift">
                                <strong>Exercice CHE</strong><br />Du 27 au 29 janvier 2025 à Polytech Nancy
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="error" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className="bahnschrift">
                                <strong>Retex</strong><br /> Le 30 janvier 2025 aux Mines Nancy
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="error" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className="bahnschrift">
                                <strong>Remise des Prix et Forums métiers</strong><br /> Le 31 janvier 2025 à l'IUT Nancy
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                    
                </div>
            </div>

           
            <div className="body">
                <div className="left bahnschrift">
                    <h2>SCENARIO DE L’EXERCICE CHE 2025</h2>
                    <p>
                        L’exercice CHE 2025 se déroule dans un contexte géopolitique fictif impliquant trois entités principales : l’Anuméric, le Cryptanga et l’APT54. 
                    </p>
                    <ul className="team-list">
                        <li>
                            <strong>Contexte géopolitique :</strong>
                            <ul>
                                <li>Les Riverchelles, un pays voisin de l’Anuméric et du Cryptanga, subissent des délestages électriques menaçant leur économie. 
                                    Cependant, la hausse mondiale du marché des voitures électriques valorise leurs ressources en lithium, remplissant les caisses de l’État des Riverchelles et permet d'envisager des investissements dans divers secteurs. </li>
                                <li>Murielle Mugier, présidente des Riverchelles, sollicite donc l’aide technologique de l’Anuméric et du Cryptanga dans la santé, l’énergie, les transports et l’armement.</li>
                                <li>Cependant, un conflit régional oppose la Rootie (soutenue par le Cryptanga) et l’Uacranie (soutenue par l’Anuméric) en Cybérie Australe, près des Maladives.</li>
                                <li>Les Riverchelles ne sont pas insensibles au destin de la Cybérie Australe et à la détresse des popultions civiles mais ne doivent pas oublier leurs problèmes économiques.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Missions des équipes :</strong>
                            <ul>
                                <li><strong>Anuméric & Cryptanga :</strong> Obtenir les contrats des Riverchelles et leur soutien dans le conflit de Cybérie Australe.</li>
                                <li><strong>APT54 :</strong> Empêcher l’Anuméric et le Cryptanga d’atteindre leurs objectifs.</li>
                            </ul>
                        </li>
                    </ul>
                    <p>
                        Comme c'est un jeu, le scénario évolue avec les actions des équipes, impliquant des infrastructures virtuelles et physiques à attaquer ou défendre, couvrant de nombreuses thématiques.
                    </p>
                </div>
            </div>

            <h2>Apres la presentation du CHE 2025, place au debut de la preparation avec un 1er CTF Root-me PRO!</h2>

            <div className="image-container">
                    <img src={KickOffImg} alt="Kick-Off CHE 2025" className="image-small" />
                </div>
        </div>
    );
}