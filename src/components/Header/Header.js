import React, { useState, useEffect } from 'react';
import './Header.css';

const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'experience', title: 'Experience' },
  { id: 'skills', title: 'Skills' },
  { id: 'education', title: 'Education' },
  { id: 'certifications', title: 'Certifications' },
  { id: 'achievements', title: 'Achievements' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

const Header = ({ onNavigate, activeSection }) => {
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
        <a 
          href="#home" 
          className={`nav-logo ${activeSection === 'home' ? 'active' : ''}`}
          onClick={(e) => handleNavigationClick('home', e)}
        >
          Meriat Joseph
        </a>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <li className="nav-item" key={link.id}>
              <a 
                href={`#${link.id}`} 
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => handleNavigationClick(link.id, e)}
              >
                {link.title}
              </a>
            </li>
          ))}
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
