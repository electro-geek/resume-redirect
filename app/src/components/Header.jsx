import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header terminal-window">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="terminal-button close"></div>
          <div className="terminal-button minimize"></div>
          <div className="terminal-button maximize"></div>
        </div>
        <div className="terminal-title">system.profile</div>
      </div>

      <div className="terminal-content">
        <div className="header-hero">
          <div className="section-title">Developer Identity</div>
          <h1>Mritunjay Sharma</h1>
          <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
            Building scalable backend architectures and high-performance systems.
          </p>
        </div>

        <div className="header-info">
          <div className="info-item">
            <span className="info-label">Role</span>
            <span className="info-value">Backend Engineer</span>
          </div>
          <div className="info-item">
            <span className="info-label">Experience</span>
            <span className="info-value">3+ Years Exp.</span>
          </div>
          <div className="info-item">
            <span className="info-label">Location</span>
            <span className="info-value">Bengaluru, India</span>
          </div>
          <div className="info-item">
            <span className="info-label">Status</span>
            <span className="info-value" style={{ color: 'var(--accent-primary)' }}>● Available</span>
          </div>
        </div>

        <div className="section-title" style={{ marginTop: '2.5rem' }}>Contact Channels</div>
        <div className="contact-grid">
          <a href="mailto:mritunjaypandey0789@gmail.com" className="contact-link">
             <span style={{ color: 'var(--accent-primary)' }}>&gt;</span>
             <span>mritunjaypandey0789@gmail.com</span>
          </a>
          <a href="tel:+916378768400" className="contact-link">
             <span style={{ color: 'var(--accent-primary)' }}>&gt;</span>
             <span>+91 6378768400</span>
          </a>
          <a href="https://github.com/electro-geek" target="_blank" rel="noreferrer" className="contact-link">
             <span style={{ color: 'var(--accent-primary)' }}>&gt;</span>
             <span>github/electro-geek</span>
          </a>
          <a href="https://linkedin.com/in/electro-geek" target="_blank" rel="noreferrer" className="contact-link">
             <span style={{ color: 'var(--accent-primary)' }}>&gt;</span>
             <span>linkedin/electro-geek</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

