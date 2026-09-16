import { motion } from "framer-motion";
import {
    FiGithub,
    FiLinkedin,
    FiMessageCircle,
    FiArrowRight,
    FiDownload,
} from "react-icons/fi";

import "./Hero.css";

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-container">
                {/* Texte */}
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="hero-greeting">Bonjour, je suis</span>

                    <h1>
                        Junior <span>Tshimpata</span>
                    </h1>

                    <h2>
                        Développeur Full Stack
                        <br />
                        <span>& Data Enthusiast</span>
                    </h2>

                    <p>
                        Je transforme des idées en solutions numériques
                        modernes, performantes et adaptées aux besoins réels des
                        entreprises et des utilisateurs.
                    </p>

                    {/* Boutons */}
                    <div className="hero-buttons">
                        <a href="#projects" className="btn primary-btn">
                            Voir mes projets
                            <FiArrowRight />
                        </a>

                        <a
                            href="/cv/junior-tshimpata-cv.pdf"
                            className="btn secondary-btn"
                            download
                        >
                            Télécharger mon CV
                            <FiDownload />
                        </a>
                    </div>

                    {/* Réseaux sociaux */}
                    <div className="hero-socials">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FiGithub />
                        </a>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin />
                        </a>

                        <a
                            href="https://wa.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >
                            <FiMessageCircle />
                        </a>
                    </div>
                </motion.div>

                {/* Photo */}
                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="hero-image-wrapper">
                        <img
                            src="/images/junior-profile.jpg"
                            alt="Junior Tshimpata"
                            className="hero-image"
                        />
                    </div>

                    {/* Technologies */}
                    <motion.div
                        className="tech-card react-card"
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                        }}
                    >
                        React.js
                    </motion.div>

                    <motion.div
                        className="tech-card node-card"
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: 1,
                        }}
                    >
                        Node.js
                    </motion.div>

                    <motion.div
                        className="tech-card mongo-card"
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: 0.5,
                        }}
                    >
                        MongoDB
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
