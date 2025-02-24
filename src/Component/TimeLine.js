import "../css/Timeline.scss";
import { motion } from "framer-motion";

const Timeline = () => {
    return (
        <div className="timeline">
            <section id="timeline">
                <div className="demo-card-wrapper">
                    <motion.div className="demo-card demo-card--step1" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                        <div className="head">
                            <div className="number-box">
                                <span>01</span>
                            </div>
                            <h2><span className="small">01/01/01</span> Le Kick'OFF</h2>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt
                                doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                            <img src="http://placehold.it/1000x500" alt="Graphic"/>
                        </div>
                    </motion.div>

                    <motion.div className="demo-card demo-card--step2" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                        <div className="head">
                            <div className="number-box">
                                <span>02</span>
                            </div>
                            <h2><span className="small">01/01/01</span> La preparation</h2>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt
                                doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                            <img src="http://placehold.it/1000x500" alt="Graphic"/>
                        </div>
                    </motion.div>

                    <motion.div className="demo-card demo-card--step3" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                        <div className="head">
                            <div className="number-box">
                                <span>03</span>
                            </div>
                            <h2><span className="small">01/01/01</span> LE CHE</h2>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt
                                doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                            <img src="http://placehold.it/1000x500" alt="Graphic"/>
                        </div>
                    </motion.div>

                    <motion.div className="demo-card demo-card--step4" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                        <div className="head">
                            <div className="number-box">
                                <span>04</span>
                            </div>
                            <h2><span className="small">01/01/01</span> Retex</h2>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt
                                doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                            <img src="http://placehold.it/1000x500" alt="Graphic"/>
                        </div>
                    </motion.div>

                    <motion.div className="demo-card demo-card--step5" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                        <div className="head">
                            <div className="number-box">
                                <span>05</span>
                            </div>
                            <h2><span className="small">01/01/01</span> Remise des prix</h2>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt
                                doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                            <img src="http://placehold.it/1000x500" alt="Graphic"/>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Timeline;


