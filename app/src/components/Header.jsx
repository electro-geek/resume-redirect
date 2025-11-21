import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <header className="header terminal-window fade-in">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="terminal-button close"></div>
          <div className="terminal-button minimize"></div>
          <div className="terminal-button maximize"></div>
        </div>
        <div className="terminal-title">mritunjay@portfolio:~$</div>
      </div>

      <div className="terminal-content">
        {/* ASCII Art */}
        <div className="ascii-art">
          {`
███╗   ███╗██████╗ ██╗████████╗██╗   ██╗███╗   ██╗     ██╗ █████╗ ██╗   ██╗
████╗ ████║██╔══██╗██║╚══██╔══╝██║   ██║████╗  ██║     ██║██╔══██╗╚██╗ ██╔╝
██╔████╔██║██████╔╝██║   ██║   ██║   ██║██╔██╗ ██║     ██║███████║ ╚████╔╝ 
██║╚██╔╝██║██╔══██╗██║   ██║   ██║   ██║██║╚██╗██║██   ██║██╔══██║  ╚██╔╝  
██║ ╚═╝ ██║██║  ██║██║   ██║   ╚██████╔╝██║ ╚████║╚█████╔╝██║  ██║   ██║   
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═══╝ ╚════╝ ╚═╝  ╚═╝   ╚═╝   
`}
        </div>

        <div className="command-line">
          <span className="prompt">mritunjay@portfolio</span>
          <span className="text-white">$</span>
          <span className="command"> whoami</span>
        </div>

        <div className="header-info">
          <div className="info-line">
            <span className="text-cyan">Name:</span>
            <span className="text-white"> Mritunjay Sharma</span>
          </div>
          <div className="info-line">
            <span className="text-cyan">Role:</span>
            <span className="text-yellow"> Backend Engineer</span>
          </div>
          <div className="info-line">
            <span className="text-cyan">Location:</span>
            <span className="text-white"> Rajasthan, India</span>
          </div>
          <div className="info-line">
            <span className="text-cyan">Status:</span>
            <span className="text-green"> Available for opportunities{showCursor && <span className="cursor"></span>}</span>
          </div>
        </div>

        <div className="command-line" style={{ marginTop: '1.5rem' }}>
          <span className="prompt">mritunjay@portfolio</span>
          <span className="text-white">$</span>
          <span className="command"> cat contact.json</span>
        </div>

        <div className="contact-info">
          <div className="json-line">{'{'}</div>
          <div className="json-line">
            <span className="text-purple">  "email"</span>
            <span className="text-white">: </span>
            <span className="text-yellow">"</span>
            <a href="mailto:mritunjaypandey0789@gmail.com">mritunjaypandey0789@gmail.com</a>
            <span className="text-yellow">"</span>
            <span className="text-white">,</span>
          </div>
          <div className="json-line">
            <span className="text-purple">  "phone"</span>
            <span className="text-white">: </span>
            <span className="text-yellow">"</span>
            <a href="tel:+916378768400">+91 6378768400</a>
            <span className="text-yellow">"</span>
            <span className="text-white">,</span>
          </div>
          <div className="json-line">
            <span className="text-purple">  "portfolio"</span>
            <span className="text-white">: </span>
            <span className="text-yellow">"</span>
            <a href="https://electro-geek.github.io/MP/" target="_blank" rel="noreferrer">electro-geek.github.io/MP</a>
            <span className="text-yellow">"</span>
            <span className="text-white">,</span>
          </div>
          <div className="json-line">
            <span className="text-purple">  "github"</span>
            <span className="text-white">: </span>
            <span className="text-yellow">"</span>
            <a href="https://github.com/electro-geek" target="_blank" rel="noreferrer">github.com/electro-geek</a>
            <span className="text-yellow">"</span>
            <span className="text-white">,</span>
          </div>
          <div className="json-line">
            <span className="text-purple">  "linkedin"</span>
            <span className="text-white">: </span>
            <span className="text-yellow">"</span>
            <a href="https://linkedin.com/in/electro-geek" target="_blank" rel="noreferrer">linkedin.com/in/electro-geek</a>
            <span className="text-yellow">"</span>
          </div>
          <div className="json-line">{'}'}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
