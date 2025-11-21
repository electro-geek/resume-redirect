import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ onLoadComplete }) => {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [phase, setPhase] = useState('typing'); // typing, waiting, loading, fade
    const fullName = 'Mritunjay Sharma';

    useEffect(() => {
        let index = 0;
        let typingInterval;

        // Typing animation
        if (phase === 'typing') {
            typingInterval = setInterval(() => {
                if (index <= fullName.length) {
                    setDisplayText(fullName.substring(0, index));
                    index++;
                } else {
                    clearInterval(typingInterval);
                    // Move to waiting phase after typing completes
                    setPhase('waiting');
                }
            }, 100); // Typing speed
        }

        return () => clearInterval(typingInterval);
    }, [phase]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);

        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        if (phase === 'waiting') {
            // Listen for Enter key
            const handleKeyPress = (e) => {
                if (e.key === 'Enter') {
                    proceedToLoading();
                }
            };

            // Listen for click
            const handleClick = () => {
                proceedToLoading();
            };

            window.addEventListener('keydown', handleKeyPress);
            window.addEventListener('click', handleClick);

            return () => {
                window.removeEventListener('keydown', handleKeyPress);
                window.removeEventListener('click', handleClick);
            };
        }
    }, [phase]);

    const proceedToLoading = () => {
        setPhase('loading');
        // Wait for loading animation, then fade out
        setTimeout(() => {
            setPhase('fade');
            setTimeout(() => {
                onLoadComplete();
            }, 500);
        }, 1500); // Duration of loading phase
    };

    return (
        <div className={`loader-container ${phase}`}>
            <div className="loader-content">
                <div className="terminal-window loader-terminal">
                    <div className="terminal-header">
                        <div className="terminal-buttons">
                            <div className="terminal-button close"></div>
                            <div className="terminal-button minimize"></div>
                            <div className="terminal-button maximize"></div>
                        </div>
                        <div className="terminal-title">initializing...</div>
                    </div>

                    <div className="terminal-content">
                        <div className="loader-text">
                            <span className="text-cyan">$ </span>
                            <span className="text-white">whoami</span>
                        </div>

                        <div className="name-display">
                            <span className="text-green typed-name">{displayText}</span>
                            {showCursor && <span className="cursor"></span>}
                        </div>

                        {phase === 'waiting' && (
                            <div className="continue-prompt">
                                <div className="prompt-text">
                                    <span className="text-yellow">Press </span>
                                    <span className="text-cyan key-highlight">ENTER</span>
                                    <span className="text-yellow"> or </span>
                                    <span className="text-cyan key-highlight">CLICK</span>
                                    <span className="text-yellow"> to continue</span>
                                    <span className="prompt-blink">_</span>
                                </div>
                            </div>
                        )}

                        {(phase === 'loading' || phase === 'fade') && (
                            <div className="loading-status">
                                <div className="status-line">
                                    <span className="text-cyan">[✓]</span>
                                    <span className="text-white"> Initializing portfolio</span>
                                    <span className="loading-dots">...</span>
                                </div>
                                <div className="progress-bar-container">
                                    <div className="progress-bar"></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
