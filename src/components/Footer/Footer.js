import React from 'react';
import './Footer.css';

const Footer = ({ onNavigate }) => {
  const handleFooterNavigation = (sectionId, event) => {
    event.preventDefault();
    onNavigate(sectionId);
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <a href="#home" className="footer-logo" onClick={(e) => handleFooterNavigation('home', e)}>Alex Morgan</a>
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="mailto:alex@example.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <div className="footer-links">
            <a href="#about" className="footer-link" onClick={(e) => handleFooterNavigation('about', e)}>About</a>
            <a href="#experience" className="footer-link" onClick={(e) => handleFooterNavigation('experience', e)}>Experience</a>
            <a href="#skills" className="footer-link" onClick={(e) => handleFooterNavigation('skills', e)}>Skills</a>
            <a href="#projects" className="footer-link" onClick={(e) => handleFooterNavigation('projects', e)}>Projects</a>
            <a href="#contact" className="footer-link" onClick={(e) => handleFooterNavigation('contact', e)}>Contact</a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Alex Morgan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
