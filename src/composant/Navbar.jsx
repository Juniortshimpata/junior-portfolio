import { useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("light-mode");
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <a href="#home" className="logo" onClick={closeMenu}>
                    <span>JT</span>
                    <strong>Junior Tshimpata</strong>
                </a>

                {/* Navigation */}
                <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
                    <a href="#home" onClick={closeMenu}>
                        Accueil
                    </a>

                    <a href="#about" onClick={closeMenu}>
                        À propos
                    </a>

                    <a href="#skills" onClick={closeMenu}>
                        Compétences
                    </a>

                    <a href="#projects" onClick={closeMenu}>
                        Projets
                    </a>

                    <a href="#services" onClick={closeMenu}>
                        Services
                    </a>

                    <a href="#contact" onClick={closeMenu}>
                        Contact
                    </a>
                </nav>

                {/* Actions */}
                <div className="navbar-actions">
                    {/* Theme */}
                    <button
                        className="theme-button"
                        onClick={toggleTheme}
                        aria-label="Changer le thème"
                    >
                        {darkMode ? <FiSun /> : <FiMoon />}
                    </button>

                    {/* Mobile menu */}
                    <button
                        className="menu-button"
                        onClick={toggleMenu}
                        aria-label="Ouvrir le menu"
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
