import React from 'react';
import './Experience.css';

const experienceData = [
    {
        position: 'Backend & AI Engineer',
        company: 'Neurabit Solution LLP',
        startDate: 'May 2025',
        endDate: 'Present',
        summary: 'Developed and deployed backend microservices using Python frameworks including FastAPI for high-performance APIs and Django for data-driven applications, containerized with Docker and scaled on Kubernetes.',
        highlights: [
            'Built real-time communication layers with WebSockets, enabling low-latency data streaming to dashboards and client apps',
            'Integrated AI/LLM-powered modules into production workflows, such as automated incident alerts and intelligent reporting',
            'Optimized microservices architecture for performance and scalability',
            'Executed automated deployment pipelines using Docker and Kubernetes'
        ]
    },
    {
        position: 'Backend Engineer',
        company: 'LivNSense Technologies Pvt Ltd',
        startDate: 'April 2024',
        endDate: 'April 2025',
        summary: 'Designed and developed backend systems using Django and optimized PostgreSQL databases for enterprise-scale applications.',
        highlights: [
            'Designed robust backend systems using Django, ensuring scalable architecture for enterprise operations',
            'Implemented and optimized database schemas and queries using PostgreSQL, improving data integrity',
            'Built and maintained RESTful APIs to support seamless integration between frontend and backend services',
            'Enhanced database operations by creating complex stored procedures, triggers, and indexing strategies'
        ]
    }
];


const Experience = () => {
    return (
        <section className="experience-section terminal-window">
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <div className="terminal-button close"></div>
                    <div className="terminal-button minimize"></div>
                    <div className="terminal-button maximize"></div>
                </div>
                <div className="terminal-title">career_milestones.log</div>
            </div>

            <div className="terminal-content">
                <div className="section-title">Professional Journey</div>
                <div className="experience-timeline">
                    {experienceData.map((exp, index) => (
                        <div key={index} className="experience-entry">
                            <div className="exp-header">
                                <div className="exp-title">
                                    <h3>{exp.position}</h3>
                                    <span className="company">{exp.company}</span>
                                </div>
                                <div className="exp-date">
                                    {exp.startDate} — {exp.endDate}
                                </div>
                            </div>

                            <div className="exp-summary">
                                {exp.summary}
                            </div>

                            <ul className="exp-highlights">
                                {exp.highlights.map((highlight, idx) => (
                                    <li key={idx} className="highlight-item">
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

