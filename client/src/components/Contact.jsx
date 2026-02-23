import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import '../styles/contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <motion.div
                    className="contact-info-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3>Let's Connect</h3>
                    <p>
                        I'm always open to discussing web development projects, testing strategies,
                        or partnership opportunities.
                    </p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="icon-box"><Phone size={20} /></div>
                            <span>+91-7306468012</span>
                        </div>
                        <a href="mailto:vyshnavics652@gmail.com" className="contact-item">
                            <div className="icon-box"><Mail size={20} /></div>
                            <span>vyshnavics652@gmail.com</span>
                        </a>
                        <div className="contact-item">
                            <div className="icon-box"><MapPin size={20} /></div>
                            <span>Thrissur, Kerala</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
