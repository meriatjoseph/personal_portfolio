import React, { useState, useEffect, useMemo } from 'react';
import { SiLeetcode } from "react-icons/si";
import './Hero.css';
import profileImage from '../../profile.jpg';

const Hero = ({ onScrollToProjects }) => {
  const titles = useMemo(() => ['AI/ML Engineer'], []);
  const [currentTitle, setCurrentTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullTitle = titles[titleIndex];

      if (isDeleting) {
        // Handle deleting
        setCurrentTitle(fullTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        // Handle typing
        setCurrentTitle(fullTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      // State transitions
      if (!isDeleting && charIndex === fullTitle.length) {
        // Pause at end of typing before deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next title
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const typingSpeed = isDeleting ? 100 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex, titles]);

  return (
    <header className="hero-section" id="home">
      <div className="profile-container">
        <img src={profileImage} className="profile-image" alt="Profile" />
        <div className="profile-border"></div>
      </div>
      <h1>Meriat Joseph</h1>
      <p className="job-title">{currentTitle}<span className="typing-cursor"></span></p>
      
      <div className="social-icons">
        <a href="https://github.com/meriatjoseph" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/meriat-joseph-1265b4281" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.kaggle.com/meriat" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-kaggle"></i>
        </a>
        <a href="https://leetcode.com/u/Meriat/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <SiLeetcode size={24} style={{ color: "white" }} />
        </a>
        <a href="mailto:meriatjoseph@gmail.com" className="social-icon">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      
      <button className="btn" onClick={onScrollToProjects}>
        View My AI Projects
      </button>
    </header>
  );
};

export default Hero;
