import { Link } from "react-router-dom";
import "../css/Timeline.scss";
import { motion } from "framer-motion";

import GeoideImg from "../image/geoide-nous.jpg";

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
                Le Cyber Humanum Est 2025 débute sur le campus de l’Université de Lorraine.Sous l’impulsion du COMCYBER et de l’Université
                de Lorraine, une cérémonie d’ouverture lance officiellement
                l’exercice immersif.
              </p>
              <Link to="/gael">
                <img src={GeoideImg} alt="Ouverture de l'événement" />
              </Link>
            </div>
          </motion.div>

          {/* Étape 2 : La Préparation */}
          <motion.div
            className="demo-card demo-card--step2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
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
                Les équipes, issues de plusieurs formations de l’Université de
                Lorraine, sont briefées sur un scénario élaboré pendant plus
                d’un an. Ce défi allie enjeux géopolitiques et cyberattaques,
                pour une immersion totale dans la cybersécurité.
              </p>
              <Link to="/matth">
                <img src={GeoideImg} alt="Briefing des équipes" />
              </Link>
            </div>
          </motion.div>

          {/* Étape 3 : Le Challenge */}
          <motion.div
            className="demo-card demo-card--step3"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
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
                Les équipes se lancent dans des opérations de cyberattaque et de
                défense. Dans un contexte réaliste, Cryptanga, Anuméric et APT54
                s’affrontent sur des missions d’influence et de gestion de
                crise.
              </p>
              <Link to="/bapt">
                <img src={GeoideImg} alt="Simulation de cyberattaque" />
              </Link>
            </div>
          </motion.div>

          {/* Étape 4 : RETEX */}
          <motion.div
            className="demo-card demo-card--step4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
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
                Après plusieurs jours d’affrontements, les participants
                analysent leurs performances. Les retours d’expérience mettent
                en lumière les stratégies gagnantes, notamment en gestion de
                crise et en cyber-influence.
              </p>
              <Link to="/tristan">
                <img src={GeoideImg} alt="Retours d'expérience" />
              </Link>
            </div>
          </motion.div>

          {/* Étape 5 : Remise des Prix */}
          <motion.div
            className="demo-card demo-card--step5"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
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
                La cérémonie de clôture, récompense les meilleurs talents. L’équipe Cryptanga est
                sacrée meilleure équipe, saluée pour sa défense, sa gestion de
                crise et son excellence en lutte d’influence.
              </p>
              <Link to="/mano">
                <img src={GeoideImg} alt="Cérémonie de remise des prix" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
