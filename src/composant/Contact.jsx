import { motion } from "framer-motion";
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiGithub,
    FiLinkedin,
    FiSend,
} from "react-icons/fi";

import "./Contact.css";

function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const name = formData.get("name");
        const email = formData.get("email");
        const subject = formData.get("subject");
        const message = formData.get("message");

        const whatsappMessage = `
Bonjour Junior,

Je vous contacte depuis votre portfolio.

👤 Nom : ${name}
📧 Email : ${email}
📌 Sujet : ${subject}

💬 Message :
${message}
        `;

        const whatsappNumber = "243962077268";

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            whatsappMessage,
        )}`;

        window.open(whatsappUrl, "_blank");

        event.target.reset();
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <motion.div
                    className="section-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span>Travaillons ensemble</span>

                    <h2>Contactez-moi</h2>

                    <p>
                        Vous avez un projet, une idée ou une opportunité ?
                        N'hésitez pas à me contacter.
                    </p>
                </motion.div>

                <div className="contact-content">
                    {/* Informations */}

                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3>Parlons de votre projet</h3>

                        <p>
                            Je suis disponible pour discuter de projets,
                            d'opportunités professionnelles et de
                            collaborations.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <FiMail />

                                <div>
                                    <span>Email</span>
                                    <p>juniortshimpata91@gmail.com</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <FiPhone />

                                <div>
                                    <span>Téléphone</span>
                                    <p>+243 962077268</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <FiMapPin />

                                <div>
                                    <span>Localisation</span>
                                    <p>Kinshasa, RDC</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-socials">
                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiGithub />
                            </a>

                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiLinkedin />
                            </a>
                        </div>
                    </motion.div>

                    {/* Formulaire WhatsApp */}

                    <motion.form
                        className="contact-form"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Nom complet</label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Votre nom"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Adresse email</label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Votre email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Sujet</label>

                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="Sujet du message"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>

                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Décrivez votre projet..."
                                required
                            />
                        </div>

                        <button type="submit" className="contact-button">
                            Envoyer sur WhatsApp
                            <FiSend />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
