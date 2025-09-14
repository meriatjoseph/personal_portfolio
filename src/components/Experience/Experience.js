import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "AI Engineer",
      company: "NxtGen Cloud Technologies",
      period: "Apr 2025 – Present",
      responsibilities: [
        "Built and optimized a Retrieval-Augmented Generation (RAG) chatbot using LLaMA 3 on the Mattermost platform to support company-wide communication. Improved response speed significantly by identifying and resolving inference bottlenecks.",
        "Designed a time series–based sales forecasting system (ARIMA, Prophet) to improve demand prediction. Developed a computer vision–based defect detection pipeline with synthetic data generation (Stable Diffusion), which enhanced classification accuracy for product quality checks.",
        "Contributed to the backend of a platform that automates resume screening and candidate interviews using VLMs and LLMs. Built multiple FastAPI endpoints, implemented robust edge-case handling, and resolved critical bugs, improving product stability and reliability.",
        "Developed an AI-powered extension for VS Code that provides intelligent code suggestions, debugging support, and automated documentation. This tool helped reduce debugging time and improved development efficiency for engineering teams."
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
              <div className="experience-company">{exp.company}</div>
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
