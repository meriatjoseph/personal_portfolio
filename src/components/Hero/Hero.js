import React from 'react';
import './Hero.css';
import profileImage from '../../profile.jpg';

const Hero = ({ onScrollToProjects }) => {
  return (
    <header className="hero-section" id="home">
      <div className="profile-container">
        <img src={profileImage} className="profile-image" alt="Profile" />
        <div className="profile-border"></div>
      </div>
      <h1>Muhammed Nihas</h1>
      <p>AI Engineer & Data Scientist</p>
      
      <div className="social-icons">
        <a href="https://github.com/mhdnihas" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/muhammed-nihas-2a8a18260/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="muhammednihas2218@gmail.com" className="social-icon">
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
