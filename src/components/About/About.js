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
            <p>I didn’t follow the traditional path into AI. After completing my Master’s in Econometrics and a data science bootcamp, I started as a self-taught developer, experimenting with data, building projects, and constantly learning by doing. That curiosity led me to NxtGen Cloud Technologies, where I now work as an AI Engineer.</p>
            <p>At NxtGen, I’ve built and deployed end-to-end LLM-powered applications — from intelligent assistants and document search tools to personalized bots — and designed RAG pipelines using LangChain, OpenAI embeddings, and vector databases. I’ve worked with graph databases like Neo4j to manage complex judicial data systems, and developed generative AI and computer vision solutions using Stable Diffusion, ControlNet, SAM-ViT-H, Vision-Language Models, OpenCV, and YOLOv5.</p>
            <p>I also explore multi-agent RAG systems to simulate collaborative reasoning across tasks. What drives me is solving problems that matter — making sense of messy data, automating workflows, and creating AI tools that are practical, useful, and impactful. I see myself not just as a coder, but as someone who learns fast, adapts quickly, and brings AI ideas to life.</p>
            <a href="/resume.pdf" download className="btn btn-secondary">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
