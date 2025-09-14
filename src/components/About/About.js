import React from 'react';
import './About.css';
import profileImage from '../../profile.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-image">
            <img src={profileImage} alt="About Me" />
          </div>
          <div className="about-text">
            <p>I didn't come into <span className="highlight">AI</span> through the traditional route — I started out as a self-taught developer, experimenting with data, building small projects, and constantly challenging myself to learn new things. That curiosity eventually shaped my career, and today I'm working as an <span className="highlight">AI Engineer</span> at NxtGen Cloud Technologies.</p>
            <p>At NxtGen, I've had the chance to work on <span className="highlight">diverse projects</span> — from time series forecasting models to computer vision systems, and even building an AI agent extension for Visual Studio Code. Each project has taught me how to take an idea from scratch, experiment, fail fast, and then turn it into something that works in the real world.</p>
            <p>What drives me is simple: I like solving <span className="highlight">problems that matter</span>. Whether it's making sense of messy time series data, exploring how LLMs and Generative AI can change the way we build tools, or finding new ways to automate workflows, I enjoy being in the middle of it.</p>
            <p>I see myself not just as someone who writes code, but as someone who learns quickly, adapts easily, and keeps pushing to make <span className="highlight">AI practical, useful, and impactful</span>.</p>
            <a href="/resume.pdf" download className="btn btn-secondary">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
