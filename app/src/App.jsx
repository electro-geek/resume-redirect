import React, { useState } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import FloatingBackground from './components/FloatingBackground';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  if (isLoading) {
    return <Loader onLoadComplete={handleLoadComplete} />;
  }

  return (
    <div className={`app ${showContent ? 'content-visible' : ''}`}>
      <FloatingBackground />
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

        <footer className="footer section-wrapper" style={{ animationDelay: '1.5s' }}>
          <div className="terminal-content">
            <div className="footer-message">
              Building the Future of Backend Systems
            </div>

            <div className="link-list">
              <a href="https://github.com/electro-geek" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/electro-geek" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="mailto:mritunjaypandey0789@gmail.com">
                Contact
              </a>
            </div>

            <div className="footer-info">
              Mritunjay Sharma &copy; 2025 | Developed with React + Three.js
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

