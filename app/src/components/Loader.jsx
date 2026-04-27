import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ onLoadComplete }) => {
    const [displayText, setDisplayText] = useState('');
    const [phase, setPhase] = useState('typing'); // typing, waiting, loading, fade
    const fullName = 'Mritunjay Sharma';

    useEffect(() => {
        let index = 0;
        let typingInterval;

        if (phase === 'typing') {
            typingInterval = setInterval(() => {
                if (index <= fullName.length) {
                    setDisplayText(fullName.substring(0, index));
                    index++;
                } else {
                    clearInterval(typingInterval);
                    setPhase('waiting');
                }
            }, 60);
        }

        return () => clearInterval(typingInterval);
    }, [phase]);

    useEffect(() => {
        if (phase === 'waiting') {
            const handleKeyPress = (e) => { if (e.key === 'Enter') proceedToLoading(); };
            const handleClick = () => proceedToLoading();
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
        setTimeout(() => {
            setPhase('fade');
            setTimeout(() => {
                onLoadComplete();
            }, 800);
        }, 1500);
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
                        <div className="terminal-title">identity_handshake.sh</div>
                    </div>

                    <div className="terminal-content">
                        <div className="name-display">
                            <span className="typed-name">{displayText}</span>
                        </div>

                        {phase === 'waiting' && (
                            <div className="continue-prompt">
                                <div className="prompt-text" onClick={proceedToLoading}>
                                    <span>Press </span>
                                    <span className="key-highlight">ENTER</span>
                                    <span> to establish connection</span>
                                </div>
                            </div>
                        )}

                        {(phase === 'loading' || phase === 'fade') && (
                            <div className="loading-status">
                                <div className="status-line">
                                    Initializing Secure Portfolio Protocol...
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

