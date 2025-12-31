import React, { useState } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadComplete = () => {
    setIsLoading(false);
    // Small delay before showing content for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  if (isLoading) {
    return <Loader onLoadComplete={handleLoadComplete} />;
  }

  return (
    <div className={`app ${showContent ? 'content-visible' : ''}`}>
      <div className="container">
        <div className="section-wrapper" style={{ animationDelay: '0.1s' }}>
          <Header />
        </div>

        <div className="section-wrapper" style={{ animationDelay: '0.3s' }}>
          <Summary />
        </div>

        <div className="section-wrapper" style={{ animationDelay: '0.5s' }}>
          <Skills />
        </div>

        <div className="section-wrapper" style={{ animationDelay: '0.7s' }}>
          <Stats />
        </div>

        <div className="section-wrapper" style={{ animationDelay: '0.9s' }}>
          <Experience />
        </div>

        <div className="section-wrapper" style={{ animationDelay: '1.1s' }}>
          <Projects />
        </div>

        <div className="section-wrapper" style={{ animationDelay: '1.3s' }}>
          <Education />
        </div>

        <footer className="footer terminal-window section-wrapper" style={{ animationDelay: '1.5s' }}>
          <div className="terminal-header">
            <div className="terminal-buttons">
              <div className="terminal-button close"></div>
              <div className="terminal-button minimize"></div>
              <div className="terminal-button maximize"></div>
            </div>
            <div className="terminal-title">session.log</div>
          </div>

          <div className="terminal-content">
            <div className="command-line">
              <span className="prompt">mritunjay@portfolio</span>
              <span className="text-white">$</span>
              <span className="command"> echo "Thanks for visiting!"</span>
            </div>
            <div className="footer-message">
              <span className="text-green">Thanks for visiting!</span>
            </div>

            <div className="footer-links">
              <span className="text-gray">// Connect with me:</span>
              <div className="link-list">
                <a href="https://github.com/electro-geek" target="_blank" rel="noreferrer">
                  <span className="text-cyan">$ </span>
                  <span className="text-white">open github.com/electro-geek</span>
                </a>
                <a href="https://linkedin.com/in/electro-geek" target="_blank" rel="noreferrer">
                  <span className="text-cyan">$ </span>
                  <span className="text-white">open linkedin.com/in/electro-geek</span>
                </a>
              </div>
            </div>

            <div className="footer-info">
              <span className="text-gray">Built with React + Vite | Terminal Theme © 2025</span>
            </div>

            <div className="command-line" style={{ marginTop: '1rem' }}>
              <span className="prompt">mritunjay@portfolio</span>
              <span className="text-white">$</span>
              <span className="cursor"></span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
