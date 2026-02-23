import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import '../styles/hero.css';
import profileImg from '../assets/WhatsApp Image 2026-02-17 at 12.34.42 PM.jpeg';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="hero-subtitle">MERN Stack Developer & Testing Specialist</span>
                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Vyshnavi C S</span>
                    </h1>
                    <p className="hero-description">
                        Building high-performance web applications and ensuring quality through systematic testing.
                        Dedicated to writing clean, testable code.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View My Work <ArrowRight size={18} style={{ display: 'inline', marginLeft: '8px' }} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </div>

                    <div className="hero-socials">
                        <a href="https://github.com/vysh-09-8" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub"><Github size={24} /></a>
                        <a href="https://www.linkedin.com/in/vyshnavi-c-s-767202269/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn"><Linkedin size={24} /></a>
                        <a href="mailto:vyshnavics652@gmail.com" className="social-link" title="Email"><Mail size={24} /></a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="hero-circle">
                        <img src={profileImg} alt="Vyshnavi C S" className="profile-img" />
                    </div>
                    <div className="hero-glow"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
