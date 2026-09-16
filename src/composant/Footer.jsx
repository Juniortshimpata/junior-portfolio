import {
    FiGithub,
    FiLinkedin,
    FiMessageCircle,
    FiArrowUp,
} from "react-icons/fi";

import "./Footer.css";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <a href="#home" className="footer-logo">
                        <span>JT</span>
                        <strong>Junior Tshimpata</strong>
                    </a>

                    <p>
                        Développeur Full Stack & Data Enthusiast. Je transforme
                        des idées en solutions numériques modernes.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Navigation</h3>

                    <a href="#home">Accueil</a>
                    <a href="#about">À propos</a>
                    <a href="#skills">Compétences</a>
                    <a href="#projects">Projets</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="footer-social">
                    <h3>Me retrouver</h3>

                    <div className="footer-social-links">
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
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Junior Tshimpata. Tous droits
                    réservés.
                </p>

                <button
                    className="back-to-top"
                    onClick={scrollToTop}
                    aria-label="Retour en haut"
                >
                    <FiArrowUp />
                </button>
            </div>
        </footer>
    );
}

export default Footer;
