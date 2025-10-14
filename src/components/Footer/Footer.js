import React from 'react';
import { SiLeetcode } from "react-icons/si";
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
          <a href="#home" className="footer-logo" onClick={(e) => handleFooterNavigation('home', e)}>Meriat Joseph</a>
          <div className="footer-social">
            <a href="https://github.com/meriatjoseph" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/meriat-joseph-1265b4281" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.kaggle.com/meriat" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-kaggle"></i>
            </a>
            <a href="https://leetcode.com/u/Meriat/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode size={24} style={{ color: "white" }} />
            </a>
            <a href="mailto:meriatjoseph@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <div className="footer-links">
            <a href="#about" className="footer-link" onClick={(e) => handleFooterNavigation('about', e)}>About</a>
            <a href="#experience" className="footer-link" onClick={(e) => handleFooterNavigation('experience', e)}>Experience</a>
            <a href="#skills" className="footer-link" onClick={(e) => handleFooterNavigation('skills', e)}>Skills</a>
            <a href="#education" className="footer-link" onClick={(e) => handleFooterNavigation('education', e)}>Education</a>
            <a href="#certifications" className="footer-link" onClick={(e) => handleFooterNavigation('certifications', e)}>Certifications</a>
            <a href="#projects" className="footer-link" onClick={(e) => handleFooterNavigation('projects', e)}>Projects</a>
            <a href="#contact" className="footer-link" onClick={(e) => handleFooterNavigation('contact', e)}>Contact</a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Meriat Joseph. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
