import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

import projects from "../data/Projects.jsx";

import "./Projects.css";

function Projects() {
    const [activeFilter, setActiveFilter] = useState("Tous");

    const filters = ["Tous", "Frontend", "Full Stack", "Data"];

    const filteredProjects =
        activeFilter === "Tous"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                {/* Titre */}
                <motion.div
                    className="section-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span>Découvrez mes réalisations</span>

                    <h2>Mes projets</h2>

                    <p>
                        Une sélection de projets réalisés pour développer mes
                        compétences et créer des solutions numériques utiles et
                        modernes.
                    </p>
                </motion.div>

                {/* Filtres */}
                <div className="project-filters">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={
                                activeFilter === filter
                                    ? "filter-button active"
                                    : "filter-button"
                            }
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Projets */}
                <motion.div className="projects-grid" layout>
                    {filteredProjects.map((project) => (
                        <motion.article
                            className="project-card"
                            key={project.id}
                            layout
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            viewport={{
                                once: true,
                            }}
                        >
                            {/* Image */}
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />

                                <div className="project-overlay">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Voir le code source"
                                    >
                                        <FiGithub />
                                    </a>

                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Voir la démonstration"
                                    >
                                        <FiExternalLink />
                                    </a>
                                </div>
                            </div>

                            {/* Contenu */}
                            <div className="project-content">
                                <span className="project-category">
                                    {project.category}
                                </span>

                                <h3>{project.title}</h3>

                                <p>{project.description}</p>

                                {/* Technologies */}
                                <div className="project-technologies">
                                    {project.technologies.map((technology) => (
                                        <span key={technology}>
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;
