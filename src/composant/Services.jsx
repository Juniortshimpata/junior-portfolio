import { motion } from "framer-motion";
import { FiMonitor, FiLayers, FiDatabase, FiBarChart2 } from "react-icons/fi";

import "./Services.css";

const services = [
    {
        icon: <FiMonitor />,
        title: "Développement Web",
        description:
            "Création de sites web modernes, responsives et adaptés aux besoins des utilisateurs et des entreprises.",
    },
    {
        icon: <FiLayers />,
        title: "Applications Web",
        description:
            "Développement d'applications web permettant d'automatiser et de simplifier les processus professionnels.",
    },
    {
        icon: <FiDatabase />,
        title: "Bases de données",
        description:
            "Conception, organisation et gestion de bases de données adaptées aux applications et aux besoins métier.",
    },
    {
        icon: <FiBarChart2 />,
        title: "Data & Analyse",
        description:
            "Exploration, analyse et visualisation des données afin de transformer les informations en indicateurs utiles.",
    },
];

function Services() {
    return (
        <section id="services" className="services">
            <div className="services-container">
                <motion.div
                    className="section-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span>Ce que je peux réaliser</span>

                    <h2>Mes services</h2>

                    <p>
                        Je propose des solutions numériques adaptées aux besoins
                        des particuliers, startups et entreprises.
                    </p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            className="service-card"
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                        >
                            <div className="service-icon">{service.icon}</div>

                            <h3>{service.title}</h3>

                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
