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
                <div className="terminal-title">stats.py</div>
            </div>

            <div className="terminal-content">
                <div className="command-line">
                    <span className="prompt">mritunjay@portfolio</span>
                    <span className="text-white">$</span>
                    <span className="command"> python3 fetch_stats.py --user {githubUsername}</span>
                </div>

                <div className="stats-grid">
                    {/* GitHub Contribution Graph */}
                    <div className="stats-card github-contribution full-width">
                        <div className="card-header">
                            <span className="text-cyan"># GitHub Contribution Graph</span>
                        </div>
                        <img
                            src={`https://ghchart.rshah.org/00ff41/${githubUsername}`}
                            alt="GitHub Contribution Graph"
                            className="stats-image contribution-graph"
                        />
                    </div>

                    <div className="stats-card github-stats">
                        <div className="card-header">
                            <span className="text-cyan"># GitHub Profile Stats</span>
                        </div>
                        <img
                            src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=radical&hide_border=true`}
                            alt="GitHub Stats"
                            className="stats-image"
                            onError={(e) => {
                                e.target.src = `https://github-stats-alpha.vercel.app/api?username=${githubUsername}&theme=radical`;
                            }}
                        />
                    </div>

                    <div className="stats-card leetcode-stats">
                        <div className="card-header">
                            <span className="text-cyan"># LeetCode Stats</span>
                        </div>
                        <img
                            src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&font=Inter`}
                            alt="LeetCode Stats"
                            className="stats-image"
                        />
                    </div>

                    <div className="stats-card leetcode-activity">
                        <div className="card-header">
                            <span className="text-cyan"># LeetCode Activity Graph</span>
                        </div>
                        <img
                            src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&font=Inter&ext=activity`}
                            alt="LeetCode Activity"
                            className="stats-image"
                        />
                    </div>
                </div>

                <div className="command-line" style={{ marginTop: '1.5rem' }}>
                    <span className="prompt">mritunjay@portfolio</span>
                    <span className="text-white">$</span>
                    <span className="command"> echo "Stats synchronization complete."</span>
                </div>
                <div className="output-line">
                    <span className="text-green">Stats synchronization complete.</span>
                    <span className="text-green"> [OK]</span>
                </div>
            </div>
        </section>
    );
};

export default Stats;
