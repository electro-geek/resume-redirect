import React from 'react';
import './Projects.css';

const projectsData = [
    {
        name: 'Stock Price Prediction Model',
        startDate: 'Jan 2022',
        endDate: 'Current',
        summary: 'Forecasted stock movements using NLP on news headlines and LSTM for time series forecasting.',
        highlights: [
            'Scraped news using BeautifulSoup and Scrapy',
            'Performed sentiment analysis using NLTK',
            'Implemented LSTM forecasting with scikit-learn',
            'Managed data with MySQL'
        ],
        tech: ['Python', 'NLTK', 'scikit-learn', 'MySQL'],
        ascii: `
   _____ __             __  
  / ___// /_____  _____/ /__
  \\__ \\/ __/ __ \\/ ___/ //_/
 ___/ / /_/ /_/ / /__/ ,<   
/____/\\__/\\____/\\___/_/|_|  `
    },
    {
        name: 'Ticket Raising Application',
        startDate: 'May 2021',
        endDate: 'Current',
        summary: 'Developed Django-based ticketing backend with PostgreSQL, role-based authentication, and ticket tracking APIs.',
        highlights: [
            'Used Django REST Framework for API creation',
            'Implemented filtering/search by ticket status and priority',
            'Built secure authentication system'
        ],
        tech: ['Django', 'PostgreSQL', 'REST API'],
        ascii: `
  _____ _      __        __ 
 /_  __(_)____/ /_____  / /_
  / / / / ___/ //_/ _ \\/ __/
 / / / / /__/ ,< /  __/ /_  
/_/ /_/\\___/_/|_|\\___/\\__/  `
    },
    {
        name: 'AI-Powered Medical Appointment Scheduler',
        startDate: 'Dec 2024',
        endDate: 'Feb 2025',
        summary: 'Built a full-stack appointment scheduling system using Google Gemini AI, FastAPI, and React with intelligent conversation handling.',
        highlights: [
            'Implemented a Retrieval-Augmented Generation (RAG) pipeline with ChromaDB to answer patient FAQs on clinic info, insurance, and policies',
            'Developed a conversational AI agent capable of handling complex booking workflows including NLP-based appointment type classification',
            'Designed and deployed RESTful APIs for calendar integration, conflict prevention, and working-hours management',
            'Created a React chat interface with real-time interaction and context-aware conversation state management',
            'Leveraged modern Python tools (FastAPI, Pydantic, Uvicorn) and embedding-based semantic search to enhance user experience',
            'Delivered a production-ready, AI-driven solution that streamlines medical appointment scheduling through natural language conversation'
        ],
        tech: ['FastAPI', 'React', 'Gemini AI', 'ChromaDB', 'RAG'],
        ascii: `
   ___   ____   _____ __         ____           __
  /   | /  _/  / ___// /_  ___  / __ \\___  ____/ /
 / /| | / /    \\__ \\/ __ \\/ _ \\/ / / / _ \\/ __  / 
/ ___ |_/ /    ___/ / / / /  __/ /_/ /  __/ /_/ /  
/_/  |_/___/  /____/_/ /_/\\___/_____/\\___/\\__,_/   `
    }
];

const Projects = () => {
    return (
        <section className="projects-section terminal-window slide-in-up">
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <div className="terminal-button close"></div>
                    <div className="terminal-button minimize"></div>
                    <div className="terminal-button maximize"></div>
                </div>
                <div className="terminal-title">projects.md</div>
            </div>

            <div className="terminal-content">
                <div className="command-line">
                    <span className="prompt">mritunjay@portfolio</span>
                    <span className="text-white">$</span>
                    <span className="command"> cat ~/projects/README.md</span>
                </div>

                <div className="projects-output">
                    <div className="markdown-header">
                        <span className="text-cyan">#</span>
                        <span className="text-white"> Featured Projects</span>
                    </div>

                    {/* Projects ASCII Art Banner */}
                    <div className="projects-banner">
                        <div className="ascii-art-small text-orange">
                            {`
  ██████  ██████   ██████       ██ ███████  ██████ ████████ ███████ 
  ██   ██ ██   ██ ██    ██      ██ ██      ██         ██    ██      
  ██████  ██████  ██    ██      ██ █████   ██         ██    ███████ 
  ██      ██   ██ ██    ██ ██   ██ ██      ██         ██         ██ 
  ██      ██   ██  ██████   █████  ███████  ██████    ██    ███████ 
`}
                        </div>
                    </div>

                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="project-block"
                            style={{ animationDelay: `${0.5 + index * 0.2}s` }}
                        >
                            {/* Project ASCII Art */}
                            <div className="project-ascii">
                                <div className="ascii-art-small text-yellow">
                                    {project.ascii}
                                </div>
                            </div>

                            <div className="project-header">
                                <span className="text-cyan">##</span>
                                <span className="text-yellow"> {project.name}</span>
                            </div>

                            <div className="project-meta">
                                <span className="text-gray">**Timeline:** </span>
                                <span className="text-white">{project.startDate} → {project.endDate}</span>
                                {project.endDate === 'Current' && <span className="pulse-dot" style={{ marginLeft: '10px' }}></span>}
                            </div>

                            <div className="project-summary">
                                <span className="text-white">{project.summary}</span>
                            </div>

                            <div className="project-tech">
                                <span className="text-gray">**Tech Stack:** </span>
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="terminal-tag"
                                        style={{ animationDelay: `${0.6 + index * 0.2 + idx * 0.05}s` }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="project-highlights">
                                <div className="text-gray">**Key Achievements:**</div>
                                {project.highlights.map((highlight, idx) => (
                                    <div
                                        key={idx}
                                        className="project-highlight-line"
                                        style={{ animationDelay: `${0.7 + index * 0.2 + idx * 0.05}s` }}
                                    >
                                        <span className="text-green">•</span>
                                        <span className="text-white"> {highlight}</span>
                                    </div>
                                ))}
                            </div>

                            {index < projectsData.length - 1 && (
                                <div className="project-divider">
                                    <span className="text-gray">{'─'.repeat(80)}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="projects-footer">
                    <span className="text-gray">// End of projects.md</span>
                </div>
            </div>
        </section>
    );
};

export default Projects;
