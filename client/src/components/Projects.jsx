import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, Zap, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/projects.css';

// Import images
import bridal1 from '../assets/bridal/WhatsApp Image 2026-02-17 at 12.00.51 PM.jpeg';
import bridal2 from '../assets/bridal/WhatsApp Image 2026-02-17 at 12.00.51 PM (1).jpeg';
import bridal3 from '../assets/bridal/WhatsApp Image 2026-02-17 at 12.00.51 PM (2).jpeg';
import bridal4 from '../assets/bridal/WhatsApp Image 2026-02-17 at 12.01.59 PM.jpeg';

import arch1 from '../assets/MyArchSpace/unnamed.jpg';
import arch2 from '../assets/MyArchSpace/image.png';
import arch3 from '../assets/MyArchSpace/image copy.png';
import arch4 from '../assets/MyArchSpace/image copy 2.png';

const ProjectCard = ({ project, index }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (project.images) {
            setCurrentImage((prev) => (prev + 1) % project.images.length);
        }
    };

    const prevImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (project.images) {
            setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
        }
    };

    return (
        <motion.div
            className="project-card-wrapper"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
        >
            <div className="project-card glass-panel">
                <div className={`card-gradient-bg bg-gradient-to-br ${project.color}`}></div>

                {/* Image Carousel or Icon */}
                <div className="project-media">
                    {project.images ? (
                        <div className="carousel-container">
                            <AnimatePresence mode='wait'>
                                <motion.img
                                    key={currentImage}
                                    src={project.images[currentImage]}
                                    alt={`${project.title} screenshot ${currentImage + 1}`}
                                    className="project-image"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </AnimatePresence>

                            <div className="carousel-controls">
                                <button onClick={prevImage} className="carousel-btn prev-btn">
                                    <ChevronLeft size={20} />
                                </button>
                                <button onClick={nextImage} className="carousel-btn next-btn">
                                    <ChevronRight size={20} />
                                </button>
                            </div>

                            <div className="carousel-dots">
                                {project.images.map((_, i) => (
                                    <span
                                        key={i}
                                        className={`dot ${i === currentImage ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setCurrentImage(i);
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="icon-wrapper-large">
                            {project.icon}
                        </div>
                    )}
                </div>

                <div className="project-content">
                    <div className="project-header">
                        <h3 className="project-title">{project.title}</h3>
                        <div className="project-links">
                            <a href="https://github.com/vysh-09-8" target="_blank" rel="noopener noreferrer" className="project-link" title="Source Code">
                                <Github size={20} />
                            </a>
                            <a href="#" className="project-link" title="Live Demo">
                                <ExternalLink size={20} />
                            </a>
                        </div>
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="project-tags">
                        {project.tags.map(tag => (
                            <span key={tag} className="tag">
                                <Zap size={10} className="tag-icon" /> {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Bridal Collection',
            description: 'A feature-rich marketplace platform designed for bridal fashion, incorporating real-time bidding systems and secure payment gateways.',
            tags: ['Marketplace', 'Bidding System', 'API Testing', 'Secure Payments'],
            icon: <ShoppingBag size={40} />,
            color: 'from-pink-500 to-rose-500',
            images: [bridal1, bridal2, bridal3, bridal4]
        },
        {
            id: 2,
            title: 'MyArchSpace',
            description: 'A comprehensive full-stack collaboration platform for architects and clients, featuring secure document management and real-time updates.',
            tags: ['Full Stack', 'JWT Auth', 'File Management', 'Collaboration'],
            icon: <Layers size={40} />,
            color: 'from-blue-500 to-cyan-500',
            images: [arch1, arch2, arch3, arch4]
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
