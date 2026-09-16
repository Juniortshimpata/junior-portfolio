import { motion } from "framer-motion";
import {
    FiCode,
    FiServer,
    FiDatabase,
    FiBarChart2,
    FiTool,
} from "react-icons/fi";

import "./Skills.css";

const skillsData = [
    {
        title: "Frontend",
        icon: <FiCode />,
        description: "Création d'interfaces web modernes et responsives.",
        skills: [
            { name: "HTML5", level: "Maîtrise" },
            { name: "CSS3", level: "Maîtrise" },
            { name: "JavaScript", level: "Intermédiaire" },
            { name: "React.js", level: "Intermédiaire" },
            { name: "Tailwind CSS", level: "Intermédiaire" },
        ],
    },

    {
        title: "Backend",
        icon: <FiServer />,
        description: "Développement de serveurs et d'API REST.",
        skills: [
            { name: "Node.js", level: "Intermédiaire" },
            { name: "Express.js", level: "Intermédiaire" },
            { name: "API REST", level: "Intermédiaire" },
            { name: "Authentication", level: "En apprentissage" },
        ],
    },

    {
        title: "Bases de données",
        icon: <FiDatabase />,
        description: "Stockage, gestion et organisation des données.",
        skills: [
            { name: "MongoDB", level: "Intermédiaire" },
            { name: "MySQL", level: "En apprentissage" },
            { name: "PostgreSQL", level: "En apprentissage" },
            { name: "Mongoose", level: "Intermédiaire" },
        ],
    },

    {
        title: "Data & Analyse",
        icon: <FiBarChart2 />,
        description: "Analyse et visualisation des données.",
        skills: [
            { name: "Python", level: "Intermédiaire" },
            { name: "Pandas", level: "Intermédiaire" },
            { name: "SQL", level: "Intermédiaire" },
            { name: "Matplotlib", level: "En apprentissage" },
            { name: "Power BI", level: "En apprentissage" },
        ],
    },

    {
        title: "Outils",
        icon: <FiTool />,
        description: "Outils utilisés pour développer et gérer mes projets.",
        skills: [
            { name: "Git", level: "Intermédiaire" },
            { name: "GitHub", level: "Intermédiaire" },
            { name: "VS Code", level: "Maîtrise" },
            { name: "Figma", level: "En apprentissage" },
        ],
    },
];

function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                {/* Titre */}
                <motion.div
                    className="section-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span>Mes compétences techniques</span>
                    <h2>Technologies & Outils</h2>
                </motion.div>

                {/* Cartes */}
                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <motion.div
                            className="skill-card"
                            key={category.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                        >
                            {/* Icône */}
                            <div className="skill-icon">{category.icon}</div>

                            <h3>{category.title}</h3>

                            <p className="skill-description">
                                {category.description}
                            </p>

                            {/* Liste */}
                            <div className="skill-list">
                                {category.skills.map((skill) => (
                                    <div
                                        className="skill-item"
                                        key={skill.name}
                                    >
                                        <div className="skill-info">
                                            <span>{skill.name}</span>
                                            <small>{skill.level}</small>
                                        </div>

                                        <div className="skill-line">
                                            <span></span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
