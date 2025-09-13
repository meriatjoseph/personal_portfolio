import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>Hello! I'm Alex, an <span className="highlight">AI Engineer & Data Scientist</span> with expertise in machine learning, deep learning, and artificial intelligence technologies.</p>
            <p>I specialize in developing intelligent systems using <span className="highlight">Python, TensorFlow, and PyTorch</span>, with a strong foundation in statistical analysis, neural networks, and data visualization. My approach combines rigorous scientific methodology with engineering excellence to create AI solutions that solve real-world problems.</p>
            <p>With experience in both research and production environments, I bridge the gap between theoretical AI concepts and practical applications. I'm passionate about leveraging data to drive insights and build systems that augment human capabilities.</p>
            <button className="btn btn-secondary">Download Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
