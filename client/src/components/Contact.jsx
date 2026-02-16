import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import '../styles/contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulating API call
        try {
            // In a real app: await fetch('http://localhost:5000/api/contact', { ... })
            await new Promise(resolve => setTimeout(resolve, 1500));
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-container">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
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

                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                                {!status && <Send size={18} />}
                            </button>

                            {status === 'success' && (
                                <p className="success-msg">Message sent successfully!</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
