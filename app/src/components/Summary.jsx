import React from 'react';
import './Summary.css';

const Summary = () => {
    return (
        <section className="summary-section terminal-window">
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <div className="terminal-button close"></div>
                    <div className="terminal-button minimize"></div>
                    <div className="terminal-button maximize"></div>
                </div>
                <div className="terminal-title">executive_summary.md</div>
            </div>

            <div className="terminal-content">
                <div className="section-title">Core Expertise</div>
                <div className="summary-grid">
                    <div className="summary-text">
                        <p>
                            Backend Engineer with over <span className="highlight-emerald">2 years</span> of experience specialized in building
                            <span className="highlight-cyan"> scalable distributed systems</span> and high-performance real-time applications.
                            My focus lies at the intersection of robust architectural design and efficient data processing.
                        </p>
                        <p>
                            Expertise in Python ecosystems (<span className="highlight-emerald">FastAPI</span>, <span className="highlight-emerald">Django</span>),
                            performance optimization via <span className="highlight-cyan">Redis/Celery</span>, and containerized deployments with
                            <span className="highlight-cyan">Docker</span> and <span className="highlight-emerald">Kubernetes</span>.
                        </p>
                    </div>

                    <div className="summary-stats-lite">
                        <div className="stat-lite-item">
                            <span className="stat-lite-label">Primary Stack</span>
                            <span className="stat-lite-value text-emerald">Python / Go / JS</span>
                        </div>
                        <div className="stat-lite-item">
                            <span className="stat-lite-label">Infrastructure</span>
                            <span className="stat-lite-value text-cyan">AWS / Docker / K8s</span>
                        </div>
                        <div className="stat-lite-item">
                            <span className="stat-lite-label">Data</span>
                            <span className="stat-lite-value">Postgres / Redis / Mongo</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;

