import React from "react";
import Typewriter from "../Component/TypeWriter";
import ButtonBack from "../Component/ButtonBack";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import "../css/matth.scss";

export default function MatthPage() {
  return (
    <div className="Page MatthPage">
      <ButtonBack />
      <Typewriter text="CYBERHUMANUM'EST 2025 - NOTRE PREPARATION" speed={50} />
      <div className="body">
        <div className="left">
          <h2>NOTRE PARCOURS LIO</h2>
          <p>
            En tant qu'étudiant à Polytech Nancy en double diplome sécurité
            informatique, la préparation pour le CyberHumanum'est (la plus
            grande compétition de cybersécurité étudiante d'Europe) a commencé
            dès septembre 2024. Avec mon équipe LIO (Lutte Offensive), nous nous
            sommes entraînés avec des sessions sur la plateforme root-me.
          </p>

          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="success" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <strong>Septembre 2024</strong>
                <br />
                Entrainement root-me
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="success" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <strong>Octobre 2024</strong>
                <br />
                Mise en place de réunion
                <br />
                Mise en place des équipes
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="success" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <strong>Novembre 2024</strong>
                <br />
                Entrainement root-me + spécialisé en fonction de son rôle (LIO, LID, L2I)
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="success" />
              </TimelineSeparator>
              <TimelineContent>
                <strong>Décembre 2024</strong>
                <br />
                Finalisation de nos outils développées pour l'occasion
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>

        <div className="right">
          <h2>PLAN D'ACTION</h2>
          <p>
            Notre équipe CRYPTANGA a tout misé sur la collaboration
            entre les pôles :
          </p>

          <ul className="team-list">
            <li className="lio">
              <strong>LIO (Notre équipe offensive)</strong>
              <br />
              - Scan intensif de l'infrastructure des autres équipes
              <br />
              - Exploitation de failles connu avec METASPLOIT
              <br />
              - Développement de script pour faciliter le scan de site web
              <br />
            </li>

            <li className="lid">
              <strong>LID (Défense)</strong>
              <br />
              Collaboration sur :<br />
              - Prépartion en avance d'un honeypot
              <br />
              - Entrainement de lecture de logs et maitrise des outils de
              lecture de logs
              <br />- Entrainment de mise en place de parefeu
            </li>

            <li className="l2i">
              <strong>L2I (Influence)</strong>
              <br />
              Préparation de fausses informations :<br />
              - Fausses fuites de données pour leur campagne
              <br />
              - Création de même avec de fausses informations
              <br />
              - Entrainement sur le réseau social (utilisation)
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom">
        <h3>Notre Defi Technique</h3>
        <p>
          Lors de la phase d'entrainement, nous n'avions pas beaucoup
          d'information sur le réseau sur lequel nous allions atterir. Nous
          devions donc élargir nos connaissances au maximum pour faire face à
          toute situation.
        </p>
      </div>
    </div>
  );
}
