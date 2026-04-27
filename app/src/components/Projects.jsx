import React from 'react';
import './Projects.css';

const projectsData = [
    {
        name: 'UIWiz - AI Native UI Development Platform',
        startDate: 'January 2026',
        endDate: 'Present',
        link: 'https://www.uiwiz.live/',
        summary: 'Architected an AI-native engine using Google Gemini API that converts natural language and image prompts into production-ready React + Tailwind code, reducing UI prototyping time by 80%.',
        highlights: [
            'Implemented Server-Sent Events (SSE) to stream code updates in real-time, providing an interactive "magic-typing" experience.',
            'Engineered a backend failover mechanism switching across Gemini 2.0 Flash/Pro models upon rate limits, ensuring 100% availability.',
            'Built a dynamic, in-browser execution environment using Sandpack for live multi-file project parsing and npm dependency resolution.',
            'Designed a secure "bring-your-own-key" architecture with AES-256 encryption at the database level to protect user privacy.',
            'Enabled image-to-code capabilities, reconciling design screenshots into responsive, accessible React components with high visual fidelity.',
            'Developed a conversational state engine for progressive UI refinement through iterative prompting, maintaining full code context.'
        ],
        tech: ['TypeScript', 'Django', 'PostgreSQL', 'Gemini API', 'Firebase', 'Sandpack']
    },
    {
        name: 'PortfolioMaker – AI-Powered Portfolio Generator',
        startDate: 'December 2025',
        endDate: 'January 2026',
        link: 'https://portfolio-maker-git-main-electrogeeks-projects.vercel.app/',
        summary: 'Developed an AI-driven web application that converts PDF resumes into deployment-ready portfolio websites with 95%+ structured data extraction accuracy.',
        highlights: [
            'Engineered an intelligent resume parsing pipeline using Google Gemini for contextual data extraction and field mapping.',
            'Integrated AI-generated content for missing sections such as bios and project descriptions to enhance profile completeness.',
            'Designed three responsive portfolio templates (Terminal, Renaissance, Newspaper) with distinct visual aesthetics.',
            'Built a full-stack workflow including PDF text extraction (pypdf), Django ORM persistence, and secure ZIP export.',
            'Integrated Firebase Authentication with secure user profiles and production-ready deployment with automated PostgreSQL migrations.'
        ],
        tech: ['Django', 'Google Gemini API', 'PostgreSQL', 'Firebase', 'pypdf']
    }
];


const Projects = () => {
    return (
        <section className="projects-section terminal-window">
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <div className="terminal-button close"></div>
                    <div className="terminal-button minimize"></div>
                    <div className="terminal-button maximize"></div>
                </div>
                <div className="terminal-title">flagship_projects.json</div>
            </div>

            <div className="terminal-content">
                <div className="section-title">Featured Projects</div>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="project-card clickable"
                        >
                            <div className="project-header-top">
                                <div className="project-name">
                                    <h3>{project.name}</h3>
                                    <div className="project-tags">
                                        {project.tech.map((t, idx) => (
                                            <span key={idx} className="project-tag">{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="project-date">
                                    {project.startDate} — {project.endDate}
                                </div>
                            </div>

                            <div className="project-summary">
                                {project.summary}
                            </div>

                            <div className="project-highlights">
                                <h4>Technical Architecture & Impact</h4>
                                {project.highlights.map((highlight, idx) => (
                                    <div key={idx} className="highlight-point">
                                        {highlight}
                                    </div>
                                ))}
                            </div>

                            <div className="click-indicator" style={{
                                marginTop: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: 'var(--accent-primary)',
                                fontSize: '0.8rem',
                                fontWeight: '600'
                            }}>
                                <span>LAUNCH PLATFORM</span>
                                <span style={{ transition: 'transform 0.3s ease' }}>→</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
