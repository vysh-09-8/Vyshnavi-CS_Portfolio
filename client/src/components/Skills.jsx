import { motion } from 'framer-motion';
import { Code, Server, Database, Wrench, CheckCircle2 } from 'lucide-react';
import '../styles/skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: <Code size={24} />,
            skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Design'],
            color: 'from-blue-400 to-indigo-500'
        },
        {
            title: 'Backend Development',
            icon: <Server size={24} />,
            skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication'],
            color: 'from-green-400 to-emerald-500'
        },
        {
            title: 'Database',
            icon: <Database size={24} />,
            skills: ['MongoDB', 'Schema Design', 'Aggregation', 'SQL'],
            color: 'from-orange-400 to-red-500'
        },
        {
            title: 'Testing & Tools',
            icon: <Wrench size={24} />,
            skills: ['Manual Testing', 'Automation (Selenium)', 'API Testing (Postman)', 'Git & GitHub', 'Debugging'],
            color: 'from-purple-400 to-pink-500'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
    };

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Professional Skills</h2>

                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            className="skill-card glass-panel"
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                        >
                            <div className={`card-border-gradient bg-gradient-to-r ${category.color}`}></div>

                            <div className="skill-header">
                                <div className="skill-icon-wrapper">
                                    {category.icon}
                                </div>
                                <h3>{category.title}</h3>
                            </div>

                            <div className="skill-tags">
                                {category.skills.map(skill => (
                                    <motion.div
                                        key={skill}
                                        className="skill-tag"
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <CheckCircle2 size={14} className="check-icon" />
                                        <span>{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
