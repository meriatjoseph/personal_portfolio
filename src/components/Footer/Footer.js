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
          <a href="#home" className="footer-logo" onClick={(e) => handleFooterNavigation('home', e)}>Muhammed Nihas</a>
          <div className="footer-social">
            <a href="https://github.com/mhdnihas" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/muhammed-nihas-2a8a18260/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://x.com/MuhammedNi2218" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.kaggle.com/muhammednihas" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-kaggle"></i>
            </a>
            <a href="https://leetcode.com/u/muhammednihas2218/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode size={24} style={{ color: "white" }} />
            </a>
            <a href="muhammednihas2218@gmail.com">
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
          <p>&copy; 2025 Muhammed Nihas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
