import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import '../styles/experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'MERN STACK INTERN',
            company: 'CAMERIN FOLKS | KOCHI',
            period: 'JANUARY 2025 - JULY 2025',
            description: [
                'Developed and maintained full-stack web applications utilizing the MERN stack.',
                'Built and integrated RESTful APIs with Axios for seamless front-to-back communication.',
                'Optimized MongoDB schemas to enhance data functionality and performance.',
                'Implemented secure JWT-based authentication for user access and session management.',
                'Utilized Postman to test, document, and debug API endpoints for reliability.',
                'Resolved full-stack issues through systematic debugging and critical problem-solving.'
            ]
        },
        {
            id: 2,
            role: 'SOFTWARE TESTING SPECIALIST',
            company: 'SOFTEN TECHNOLOGIES | KOCHI',
            period: 'SEPTEMBER 2022 – FEBRUARY 2023',
            description: [
                'Performed manual and automation testing for web/mobile applications using Selenium.',
                'Designed detailed test cases and verified bug fixes to ensure functional integrity.',
                'Collaborated with developers to reproduce issues and validate resolutions effectively.',
                'Followed SDLC, STLC, and Agile practices for structured and efficient test execution.',
                'Identified root causes and suggested process improvements through analytical thinking.',
                'Ensured all modules met UI/UX standards and functional requirements before release.'
            ]
        }
    ];

    const education = [
        {
            id: 1,
            degree: 'Master of Computer Applications',
            institution: 'KTU University | Sree Narayana Guru Institute of Science and Technology, Manjaly',
            period: 'August 2023 - May 2025'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
    };

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Experience & Education</h2>

                <div className="timeline-container">
                    <motion.div
                        className="timeline-column"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="column-header">
                            <Briefcase size={28} className="column-icon" />
                            <h3>Work Experience</h3>
                        </div>

                        <div className="timeline">
                            {experiences.map((exp) => (
                                <motion.div key={exp.id} className="timeline-item" variants={itemVariants}>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content glass-card">
                                        <div className="timeline-header">
                                            <h3>{exp.role}</h3>
                                            <span className="company">{exp.company}</span>
                                        </div>
                                        <div className="timeline-date">
                                            <Calendar size={14} /> {exp.period}
                                        </div>
                                        <ul className="timeline-list">
                                            {exp.description.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="timeline-column"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="column-header">
                            <GraduationCap size={28} className="column-icon" />
                            <h3>Education</h3>
                        </div>

                        <div className="timeline">
                            {education.map((edu) => (
                                <motion.div key={edu.id} className="timeline-item" variants={itemVariants}>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content glass-card education-card">
                                        <div className="timeline-header">
                                            <h3>{edu.degree}</h3>
                                            <span className="company">{edu.institution}</span>
                                        </div>
                                        <div className="timeline-date">
                                            <Calendar size={14} /> {edu.period}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
