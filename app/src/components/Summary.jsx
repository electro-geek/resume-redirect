import React from 'react';
import './Summary.css';

const Summary = () => {
    return (
        <section className="summary-section terminal-window slide-in-up">
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <div className="terminal-button close"></div>
                    <div className="terminal-button minimize"></div>
                    <div className="terminal-button maximize"></div>
                </div>
                <div className="terminal-title">about.sh</div>
            </div>

            <div className="terminal-content">
                <div className="command-line">
                    <span className="prompt">mritunjay@portfolio</span>
                    <span className="text-white">$</span>
                    <span className="command"> ./about.sh --verbose</span>
                </div>

                {/* Loading Animation */}
                <div className="loading-section">
                    <div className="loading-line">
                        <span className="text-cyan">[*]</span>
                        <span className="text-white"> Loading profile data...</span>
                    </div>
                    <div className="progress-bar-container">
                        <div className="progress-bar"></div>
                    </div>
                    <div className="loading-line">
                        <span className="text-green">[✓]</span>
                        <span className="text-white"> Profile loaded successfully</span>
                    </div>
                </div>

                <div className="summary-content">
                    <div className="summary-line">
                        <span className="text-green">[INFO]</span>
                        <span className="text-white"> Backend Engineer with </span>
                        <span className="text-yellow">2+ years</span>
                        <span className="text-white"> of experience building</span>
                    </div>
                    <div className="summary-line">
                        <span className="text-white">scalable, real-time systems using Python frameworks (</span>
                        <span className="text-cyan">FastAPI</span>
                        <span className="text-white"> and </span>
                        <span className="text-cyan">Django</span>
                        <span className="text-white">).</span>
                    </div>
                    <div className="summary-line">
                        <span className="text-white">Skilled in designing REST APIs, optimizing performance with</span>
                    </div>
                    <div className="summary-line">
                        <span className="text-cyan">Redis</span>
                        <span className="text-white"> and </span>
                        <span className="text-cyan">Celery</span>
                        <span className="text-white">, and deploying production-ready services using</span>
                    </div>
                    <div className="summary-line">
                        <span className="text-cyan">Docker</span>
                        <span className="text-white"> and </span>
                        <span className="text-cyan">Kubernetes</span>
                        <span className="text-white">.</span>
                    </div>
                    <div className="summary-line" style={{ marginTop: '0.5rem' }}>
                        <span className="text-green">[✓]</span>
                        <span className="text-white"> Experienced in </span>
                        <span className="text-purple">WebSockets</span>
                        <span className="text-white"> for real-time communication</span>
                    </div>
                    <div className="summary-line">
                        <span className="text-green">[✓]</span>
                        <span className="text-white"> Integrating </span>
                        <span className="text-purple">LLM-powered modules</span>
                        <span className="text-white"> into backend workflows</span>
                    </div>
                    <div className="summary-line">
                        <span className="text-green">[✓]</span>
                        <span className="text-white"> Strong ownership mindset with end-to-end project delivery</span>
                    </div>
                </div>

                {/* Tech Stack ASCII */}
                <div className="tech-stack-ascii">
                    <div className="ascii-art-small text-green">
                        {`
  ╔═══════════════════════════════════════════════════════════╗
  ║  FastAPI │ Django │ Docker │ K8s │ Redis │ PostgreSQL   ║
  ╚═══════════════════════════════════════════════════════════╝
`}
                    </div>
                </div>

                <div className="summary-footer">
                    <span className="text-gray">// Profile loaded at: {new Date().toLocaleString()}</span>
                    <span className="pulse-dot" style={{ marginLeft: '10px' }}></span>
                </div>
            </div>
        </section>
    );
};

export default Summary;
