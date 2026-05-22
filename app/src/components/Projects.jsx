import React from 'react';
import './Projects.css';

const projectsData = [
    {
        name: 'Kompete - AI-Powered Competitive Intelligence Agent',
        startDate: 'May 2026',
        endDate: 'Present',
        link: 'https://kompete.mritunjay.live',
        summary: 'Built an autonomous AI agent that researches any company and generates boardroom-ready competitive intelligence reports with SWOT analysis in under 60 seconds.',
        highlights: [
            'Engineered a multi-agent research pipeline using Google Gemini 2.0 Flash with built-in Google Search, running four parallel async agents across news, financials, reviews, and social signals simultaneously.',
            'Implemented Server-Sent Events (SSE) for real-time agent progress streaming, giving users live visibility into each research step as it completes.',
            'Designed a structured JSON synthesis layer where a final Gemini call aggregates all research outputs into a validated SWOT analysis, financial snapshot, sentiment score, and strategic recommendations.',
            'Built a decoupled architecture with a FastAPI async backend and a Next.js 14 frontend, communicating exclusively via REST API with full TypeScript type safety on the report schema.',
            'Integrated server-side PDF generation via WeasyPrint, enabling one-click download of print-ready reports suitable for boardroom distribution.'
        ],
        tech: ['FastAPI', 'Next.js', 'Google Gemini API', 'Python', 'WeasyPrint']
    },
    {
        name: 'PrepStudio - AI-Powered Learning & Interview Platform',
        startDate: 'May 2026',
        endDate: 'Present',
        link: 'https://prepstudio.mritunjay.live',
        summary: 'Developed a full-stack AI learning platform that transforms any topic into a structured study plan, generates rich educational content, conducts voice-based AI interviews, and helps users publish polished articles — all within a single personalized workspace.',
        highlights: [
            'Engineered a conversational plan generation pipeline using Google Gemini that takes a topic and deadline as input and outputs a structured day-by-day study curriculum with balanced workloads.',
            'Built a lazy content generation system where full topic explanations are generated on first access via Gemini and permanently cached in PostgreSQL, eliminating redundant API calls on repeat visits.',
            'Designed a voice interview engine using the browser-native Web Speech API for real-time speech-to-text transcription and TTS question delivery, with Gemini evaluating each answer for accuracy, depth, and clarity to produce a scored performance report.',
            'Implemented an AI article refiner that converts a user\'s raw plain-text notes into publication-ready Markdown articles with proper structure, code blocks, and formatting — with a secondary Twitter thread export mode.',
            'Integrated Firebase Authentication with JWT verification middleware on the FastAPI backend, ensuring all generated plans, topic content, articles, and interview results persist securely per user account.'
        ],
        tech: ['Next.js', 'FastAPI', 'Google Gemini API', 'PostgreSQL', 'Firebase']
    },
    {
        name: 'SolShield AI — AI-Powered Solana Smart Contract Security Copilot',
        startDate: 'May 2026',
        endDate: 'Present',
        link: 'https://solshield.mritunjay.live',
        summary: 'Developed an AI-powered smart contract security auditing platform for the Solana ecosystem that detects vulnerabilities in Anchor/Rust programs and generates intelligent remediation guidance using LLM-powered security analysis.',
        highlights: [
            'Engineered a static analysis pipeline using Tree-sitter AST parsing to detect Solana-specific vulnerabilities including missing signer validation, PDA misuse, unsafe CPI patterns, and unchecked account ownership.',
            'Built an AI-driven vulnerability explanation engine using Gemini AI to generate exploit scenarios, severity analysis, and secure remediation suggestions for insecure smart contract logic.',
            'Designed a production-grade cybersecurity dashboard with Monaco-based code intelligence, real-time vulnerability highlighting, security scoring, and interactive audit workflows.',
            'Implemented GitHub repository scanning and automated project ingestion pipelines for analyzing Anchor/Rust smart contract repositories directly from source control.',
            'Developed a modular scanning engine with rule-based vulnerability detection architecture supporting scalable addition of custom Solana security rules and audit patterns.',
            'Integrated PostgreSQL-backed persistence for scan history, vulnerability reports, AI-generated audit insights, and security analytics dashboards.',
            'Optimized developer experience through responsive UI workflows, animated scan pipelines, streaming AI responses, and low-latency audit report generation.'
        ],
        tech: ['Next.js', 'FastAPI', 'Solana', 'Tree-sitter', 'Gemini AI', 'PostgreSQL', 'Monaco Editor']
    },
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
