
import React from 'react';
import Typewriter from "../Component/TypeWriter";
import ButtonBack from "../Component/ButtonBack";

import '../css/gael.scss';
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import OutputCrawlerImg from "../image/output_crawler.png"
import CamembertImg from "../image/camembert.jpg"

export default function GaelPage(){
    return (
        <div className="GaelPage">
            <ButtonBack/>
            <Typewriter text="CYBERHUMANUM'EST 2025 - NOTRE PREPARATION" speed={50}/>
            <div className="body">
                <div className="left">
                    <h2>NOTRE PARCOURS LIO</h2>
                    <p className="bahnschrift">
                        En tant qu'étudiant à Polytech Nancy en double diplome sécurité
                        informatique, la préparation pour le CyberHumanum'est a commencé
                        dès septembre 2024. Avec notre équipe LIO (Lutte Offensive), nous nous
                        sommes entraînés principalement via plusieurs sessions root-me.
                        Nous sommes également passé par des plateformes telles que TryHackMe pour
                        des notions inconnues afin de les assimiler plus facilement.
                    </p>

                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="error"/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent className="bahnschrift">
                                <strong>Septembre 2024</strong>
                                <br/>
                                CTF Root-Me, début de l'entrainement personnel
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="error"/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent className="bahnschrift">
                                <strong>Octobre 2024</strong>
                                <br/>
                                Mise en place de réunions
                                <br/>
                                Mise en place des équipes
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="error"/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent className="bahnschrift">
                                <strong>Novembre 2024</strong>
                                <br/>
                                Entrainement Root-Me axé en fonction de son rôle (LIO ou LID)
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="error"/>
                            </TimelineSeparator>
                            <TimelineContent className="bahnschrift">
                                <strong>Décembre 2024</strong>
                                <br/>
                                Finalisation de nos outils personnels pour l'évenement
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
                <div className="right-img bahnschrift">
                    <img src={OutputCrawlerImg} alt="Crawler"/>
                    Output de notre crawler afin de découvrir l'arborescence des sites Web.
                </div>
            </div>

            <div className="body">
                <div className="left-img bahnschrift">
                    <img src={CamembertImg} alt="Graphique"/>
                    Répartition des sous équipes chez Cryptanga
                </div>
                <div className="right">
                    <h2>PLAN D'ACTION</h2>
                    <p className="bahnschrift">
                        Notre équipe CRYPTANGA a tout misé sur la collaboration
                        entre les pôles :
                    </p>

                    <ul className="team-list bahnschrift">
                        <li className="lio">
                            <strong>LIO (Notre équipe offensive)</strong>
                            <br/>
                            - Scan intensif de l'infrastructure des autres équipes
                            <br/>
                            - Exploitation de failles connu avec METASPLOIT
                            <br/>
                            - Développement de script pour faciliter le scan de site web
                            <br/>
                        </li>

                        <li className="lid">
                            <strong>LID (Défense)</strong>
                            <br/>
                            Collaboration sur :<br/>
                            - Prépartion en avance d'un honeypot
                            <br/>
                            - Entrainement de lecture de logs et maitrise des outils de
                            lecture de logs
                            <br/>- Entrainment de mise en place de parefeu
                        </li>

                        <li className="l2i">
                            <strong>L2I (Influence)</strong>
                            <br/>
                            Préparation de fausses informations :<br/>
                            - Fausses fuites de données pour leur campagne
                            <br/>
                            - Création de même avec de fausses informations
                            <br/>
                            - Entrainement sur le réseau social (utilisation)
                        </li>
                    </ul>
                </div>
            </div>


            <div className="bottom">
                <h2>Notre Defi Technique</h2>
                <p className="bahnschrift">
                    Lors de la phase d'entrainement, nous n'avions pas beaucoup
                    d'information sur le réseau sur lequel nous allions atterir. Nous
                    devions donc élargir nos connaissances au maximum pour faire face à
                    toute situation.
                </p>
            </div>
        </div>
    );
}