import { Link } from "react-router-dom";
import "../css/Timeline.scss";
import { motion } from "framer-motion";

import EventImg from "../image/event.png";
import RetexImg from "../image/retex.png";
import KickoffImg from "../image/kickoff.png";
import RemiseImg from "../image/remise_prix.png"
import RootmeImg from "../image/rootmepro.png"

const Timeline = () => {
  return (
    <div className="timeline">
      <section id="timeline">
        <div className="demo-card-wrapper">
          {/* Étape 1 : Le Kick'OFF */}
          <motion.div
            className="demo-card demo-card--step1"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{
              scale: 1.02,
              x: -7,
              transition: { duration: 0.1 },
            }}
          >
            <div className="head">
              <div className="number-box">
                <span>01</span>
              </div>
              <h2>
                <span className="small">27/01/2025</span> Le Kick'OFF
              </h2>
            </div>
            <div className="body">
              <p>
                Le Cyber Humanum Est 2025 debute sur le campus de l’Universite de Lorraine. Cette ceremonie d’ouverture lance officiellement
                l’exercice immersif et le scenario est explique aux equipes.
              </p>
              <Link to="/bapt">
                <img src={KickoffImg} alt="Ouverture de l'événement" />
              </Link>
            </div>
          </motion.div>

          {/* Étape 2 : La Préparation */}
          <motion.div
            className="demo-card demo-card--step2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{
              scale: 1.02,
              x: 4,
              transition: { duration: 0.1 },
            }}
          >
            <div className="head">
              <div className="number-box">
                <span>02</span>
              </div>
              <h2>
                <span className="small">27/01/2025</span> La Preparation
              </h2>
            </div>
            <div className="body">
              <p>
                Les equipes, issues de plusieurs formations de l’Université de
                Lorraine, se séparent et doivent preparer aux mieux l'evenement via des reunions et des entrainements.
              </p>
              <Link to="/gael">
                <img src={RootmeImg} alt="Briefing des équipes" />
              </Link>
            </div>
          </motion.div>

          {/* Étape 3 : Le Challenge */}
          <motion.div
            className="demo-card demo-card--step3"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{
              scale: 1.02,
              x: -7,
              transition: { duration: 0.1 },
            }}
          >
            <div className="head">
              <div className="number-box">
                <span>03</span>
              </div>
              <h2>
                <span className="small">28/01/2025</span> Les Challenges
              </h2>
            </div>
            <div className="body">
              <p>
                Les equipes se lancent dans des operations de cyberattaque et de
                defense. Dans un contexte realiste, Cryptanga, Anumeric et APT54
                s’affrontent sur des missions d’influence et de gestion de
                crise.
              </p>
              <Link to="/matth">
                <img src={EventImg} alt="Simulation de cyberattaque" />
              </Link>
            </div>
          </motion.div>

          {/* Étape 4 : RETEX */}
          <motion.div
            className="demo-card demo-card--step4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{
              scale: 1.02,
              x: 4,
              transition: { duration: 0.1 },
            }}
          >
            <div className="head">
              <div className="number-box">
                <span>04</span>
              </div>
              <h2>
                <span className="small">30/01/2025</span> RETEX
              </h2>
            </div>
            <div className="body">
              <p>
                Après plusieurs jours d’affrontements, les equipes font un recapitulatif et reviennent sur les moments cles qui ont marque leur exercice.
                Les organisateurs prennent egalement la parole pour faire un debrief.
              </p>
              <Link to="/mano">
                <img src={RetexImg} alt="Retours d'expérience" />
              </Link>
            </div>
          </motion.div>

          {/* Étape 5 : Remise des Prix */}
          <motion.div
            className="demo-card demo-card--step5"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{
              scale: 1.02,
              x: -7,
              transition: { duration: 0.1 },

            }}
          >
            <div className="head">
              <div className="number-box">
                <span>05</span>
              </div>
              <h2>
                <span className="small">31/01/2025</span> Remise des Prix
              </h2>
            </div>
            <div className="body">
              <p>
                La ceremonie de cloture, récompense les meilleures equipes dans chaque domaine. L’equipe Cryptanga est
                sacree vainqueur, saluee notamment pour sa defense, sa gestion de
                crise et ses attaques originales.
              </p>
              <Link to="/tristan">
                <img src={RemiseImg} alt="Cérémonie de remise des prix" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
