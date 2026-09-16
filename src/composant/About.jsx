import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiBarChart2, FiDownload } from "react-icons/fi";

import "./About.css";

function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                {/* Titre */}
                <motion.div
                    className="section-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span>Découvrez mon parcours</span>
                    <h2>À propos de moi</h2>
                </motion.div>

                <div className="about-content">
                    {/* Partie gauche */}
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h3>
                            Je suis <span>Junior Tshimpata</span>, développeur
                            passionné par la technologie.
                        </h3>

                        <p>
                            Je suis étudiant en informatique industrielle et
                            réseaux à l'Institut Supérieur Pédagogique et
                            Technique (ISPT). Je m'intéresse particulièrement au
                            développement logiciel, aux applications web et aux
                            technologies numériques.
                        </p>

                        <p>
                            Mon objectif est de concevoir des solutions
                            modernes, performantes et adaptées aux besoins réels
                            des utilisateurs et des entreprises.
                        </p>

                        <p>
                            Je développe progressivement mes compétences dans le
                            développement frontend, backend, les bases de
                            données ainsi que l'analyse et la visualisation des
                            données.
                        </p>

                        <a
                            href="/cv/junior-tshimpata-cv.pdf"
                            className="about-cv-button"
                            download
                        >
                            Télécharger mon CV
                            <FiDownload />
                        </a>
                    </motion.div>

                    {/* Partie droite */}
                    <motion.div
                        className="about-cards"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <div className="about-card">
                            <div className="about-icon">
                                <FiCode />
                            </div>

                            <div>
                                <h4>Développement Web</h4>
                                <p>
                                    Création d'interfaces modernes et
                                    d'applications web adaptées aux besoins des
                                    utilisateurs.
                                </p>
                            </div>
                        </div>

                        <div className="about-card">
                            <div className="about-icon">
                                <FiDatabase />
                            </div>

                            <div>
                                <h4>Backend & Bases de données</h4>
                                <p>
                                    Conception d'API, développement backend et
                                    gestion de bases de données.
                                </p>
                            </div>
                        </div>

                        <div className="about-card">
                            <div className="about-icon">
                                <FiBarChart2 />
                            </div>

                            <div>
                                <h4>Data & Analyse</h4>
                                <p>
                                    Exploration, analyse et visualisation des
                                    données pour faciliter la prise de décision.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Statistiques */}
                <motion.div
                    className="about-stats"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <div className="stat-item">
                        <h3>ISPT</h3>
                        <p>Formation en informatique</p>
                    </div>

                    <div className="stat-item">
                        <h3>Full Stack</h3>
                        <p>Orientation professionnelle</p>
                    </div>

                    <div className="stat-item">
                        <h3>Data</h3>
                        <p>Centre d'intérêt</p>
                    </div>

                    <div className="stat-item">
                        <h3>∞</h3>
                        <p>Envie d'apprendre</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
