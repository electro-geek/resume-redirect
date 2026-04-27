import React from 'react';
import './Skills.css';

const skillsData = [
    {
        category: 'Core Engineering',
        skills: ['Python', 'Golang', 'JavaScript', 'C/C++', 'System Design'],
    },
    {
        category: 'Backend Architectures',
        skills: ['FastAPI', 'Django', 'Flask', 'Node.js', 'WebSockets', 'gRPC'],
    },
    {
        category: 'Infrastucture & DevOps',
        skills: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD Pipelines'],
    },
    {
        category: 'Database & Caching',
        skills: ['PostgreSQL', 'Redis', 'MongoDB', 'Elasticsearch', 'DynamoDB'],
    },
    {
        category: 'AI & Data Processing',
        skills: ['Tensorflow', 'PyTorch', 'Celery', 'RabbitMQ', 'Apache Kafka'],
    }
];

const Skills = () => {
    return (
        <section className="skills-section terminal-window">
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <div className="terminal-button close"></div>
                    <div className="terminal-button minimize"></div>
                    <div className="terminal-button maximize"></div>
                </div>
                <div className="terminal-title">capabilities.json</div>
            </div>

            <div className="terminal-content">
                <div className="section-title">Technical Expertise</div>
                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <div key={index} className="skill-card">
                            <h3>{category.category}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

