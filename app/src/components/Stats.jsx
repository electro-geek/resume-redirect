import React from 'react';
import './Stats.css';

const Stats = () => {
    const githubUsername = 'electro-geek';
    const leetcodeUsername = 'electrogeek';

    return (
        <section className="stats-section terminal-window">
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <div className="terminal-button close"></div>
                    <div className="terminal-button minimize"></div>
                    <div className="terminal-button maximize"></div>
                </div>
                <div className="terminal-title">activity_metrics.py</div>
            </div>

            <div className="terminal-content">
                <div className="section-title">Global Contributions</div>
                <div className="stats-grid">
                    <div className="stats-card github-contribution full-width">
                        <div className="section-title" style={{ fontSize: '0.65rem' }}>GitHub Contribution Grid</div>
                        <img
                            src={`https://ghchart.rshah.org/10b981/${githubUsername}`}
                            alt="GitHub Contribution Graph"
                        />
                    </div>

                    <div className="stats-card">
                        <div className="section-title" style={{ fontSize: '0.65rem' }}>Profile Performance</div>
                        <img
                            src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=10b981&icon_color=06b6d4&text_color=f8fafc`}
                            alt="GitHub Stats"
                            onError={(e) => {
                                e.target.src = `https://github-stats-alpha.vercel.app/api?username=${githubUsername}&theme=radical`;
                            }}
                        />
                    </div>

                    <div className="stats-card">
                        <div className="section-title" style={{ fontSize: '0.65rem' }}>Competitive Activity</div>
                        <img
                            src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&font=Inter&no-border=true&no-background=true`}
                            alt="LeetCode Stats"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;

