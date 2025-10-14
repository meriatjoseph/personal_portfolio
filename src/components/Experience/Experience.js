import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "AI Engineer",
      company: "Nxtgen Cloud Technologies",
      companyLink: "https://nxtgen.com",
      period: "April 2025-Present",
      responsibilities: [
        "At NxtGen, I’ve built and deployed end-to-end LLM-powered applications — from intelligent assistants and document search tools to personalized bots — and designed RAG pipelines using LangChain, OpenAI embeddings, and vector databases.",
        "I’ve worked with graph databases like Neo4j to manage complex judicial data systems, and developed generative AI and computer vision solutions using Stable Diffusion, ControlNet, SAM-ViT-H, Vision-Language Models, OpenCV, and YOLOv5."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-title">
          <h2>Experience</h2>
        </div>
        <div className="experience-container">
          {experiences.map((exp) => (
            <div className="experience-card" key={exp.id}>
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <span className="experience-date">{exp.period}</span>
              </div>
                            <div className="experience-company">
                <a href={exp.companyLink} target="_blank" rel="noopener noreferrer">
                  {exp.company}
                </a>
              </div>
              <ul className="experience-details">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="experience-item">{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
