import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigationClick = (sectionId, event) => {
    event.preventDefault();
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => handleNavigationClick('home', e)}>Portfolio</a>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={(e) => handleNavigationClick('about', e)}>About</a>
          </li>
          <li className="nav-item">
            <a href="#experience" className="nav-link" onClick={(e) => handleNavigationClick('experience', e)}>Experience</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link" onClick={(e) => handleNavigationClick('skills', e)}>Skills</a>
          </li>
          <li className="nav-item">
            <a href="#education" className="nav-link" onClick={(e) => handleNavigationClick('education', e)}>Education</a>
          </li>
          <li className="nav-item">
            <a href="#certifications" className="nav-link" onClick={(e) => handleNavigationClick('certifications', e)}>Certifications</a>
          </li>
          <li className="nav-item">
            <a href="#achievements" className="nav-link" onClick={(e) => handleNavigationClick('achievements', e)}>Achievements</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={(e) => handleNavigationClick('projects', e)}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials" className="nav-link" onClick={(e) => handleNavigationClick('testimonials', e)}>Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={(e) => handleNavigationClick('contact', e)}>Contact</a>
          </li>
        </ul>
        
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
