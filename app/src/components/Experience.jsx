import React from 'react';
import './Experience.css';

const experienceData = [
    {
        position: 'Backend Engineer',
        company: 'Neurabit Solution LLP',
        startDate: 'May 2025',
        endDate: 'Present',
        summary: 'Developed and deployed backend microservices using Python frameworks including FastAPI for high-performance APIs and Django for data-driven applications, containerized with Docker and scaled on Kubernetes.',
        highlights: [
            'Built real-time communication layers with WebSockets, enabling low-latency data streaming to dashboards and client apps',
            'Integrated AI/LLM-powered modules into production workflows, such as automated incident alerts and intelligent reporting',
            'Developed and deployed backend microservices using FastAPI and Django',
            'Containerized applications with Docker and scaled on Kubernetes'
        ],
        ascii: `
   ___________        __  ___    ____  ____
  / ____/__  /______ / /_/   |  / __ \\/  _/
 / /_    / // __ \`/ __/ /| | / /_/ // /  
/ __/   / // /_/ (_) / ___ |/ ____// /   
/_/    /_/ \\__,_/___/_/  |_/_/   /___/   `
    },
    {
        position: 'Backend Engineer',
        company: 'LivNSense Technologies Pvt Ltd',
        startDate: 'Apr 2024',
        endDate: 'Apr 2025',
        summary: 'Designed and developed backend systems using Django, optimized PostgreSQL databases, and built scalable APIs for enterprise applications.',
        highlights: [
            'Designed robust backend systems using Django',
            'Optimized database queries and schemas in PostgreSQL',
            'Built RESTful APIs for seamless frontend-backend integration',
            'Developed real-time data processing services',
            'Integrated third-party APIs as per business requirements'
        ],
        ascii: `
    ____  _                       
   / __ \\(_)___ _____  ____ _____ 
  / / / / / __ \`/ __ \\/ __ \`/ __ \\
 / /_/ / / /_/ / / / / /_/ / /_/ /
/_____// /\\__,_/_/ /_/\\__, /\\____/ 
     /___/           /____/        `
    }
];

const Experience = () => {
    return (
        <section className="experience-section terminal-window slide-in-up">
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <div className="terminal-button close"></div>
                    <div className="terminal-button minimize"></div>
                    <div className="terminal-button maximize"></div>
                </div>
                <div className="terminal-title">work-history.log</div>
            </div>

            <div className="terminal-content">
                <div className="command-line">
                    <span className="prompt">mritunjay@portfolio</span>
                    <span className="text-white">$</span>
                    <span className="command"> tail -f ~/career/work-history.log</span>
                </div>

                {/* Backend Tech ASCII Art */}
                <div className="tech-stack-banner">
                    <div className="ascii-art-small text-cyan">
                        {`
  ██████   █████   ██████ ██   ██ ███████ ███    ██ ██████  
  ██   ██ ██   ██ ██      ██  ██  ██      ████   ██ ██   ██ 
  ██████  ███████ ██      █████   █████   ██ ██  ██ ██   ██ 
  ██   ██ ██   ██ ██      ██  ██  ██      ██  ██ ██ ██   ██ 
  ██████  ██   ██  ██████ ██   ██ ███████ ██   ████ ██████  
`}
                    </div>
                </div>

                {experienceData.map((exp, index) => (
                    <div
                        key={index}
                        className="experience-entry"
                        style={{ animationDelay: `${0.3 + index * 0.2}s` }}
                    >
                        {/* Company ASCII Art */}
                        <div className="company-ascii">
                            <div className="ascii-art-small text-purple">
                                {exp.ascii}
                            </div>
                        </div>

                        <div className="exp-header">
                            <span className="text-yellow">[{exp.startDate} - {exp.endDate}]</span>
                            <span className="text-green"> {exp.position}</span>
                            <span className="text-white"> @ </span>
                            <span className="text-cyan">{exp.company}</span>
                            {exp.endDate === 'Present' && <span className="pulse-dot" style={{ marginLeft: '10px' }}></span>}
                        </div>

                        <div className="exp-summary">
                            <span className="text-gray">// </span>
                            <span className="text-white">{exp.summary}</span>
                        </div>

                        <div className="exp-highlights">
                            {exp.highlights.map((highlight, idx) => (
                                <div
                                    key={idx}
                                    className="highlight-line"
                                    style={{ animationDelay: `${0.4 + index * 0.2 + idx * 0.1}s` }}
                                >
                                    <span className="text-green">  └─</span>
                                    <span className="text-white"> {highlight}</span>
                                </div>
                            ))}
                        </div>

                        {index < experienceData.length - 1 && (
                            <div className="exp-separator">
                                <span className="text-gray">{'─'.repeat(80)}</span>
                            </div>
                        )}
                    </div>
                ))}

                <div className="log-footer">
                    <span className="text-gray">[END OF LOG]</span>
                    <span className="cursor"></span>
                </div>
            </div>
        </section>
    );
};

export default Experience;
