import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Natural Language Processing Toolkit",
      description: "A comprehensive NLP toolkit for text analysis, sentiment classification, and named entity recognition using transformer models.",
      technologies: ["Python", "PyTorch", "Hugging Face"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      id: 2,
      title: "Computer Vision for Medical Imaging",
      description: "A deep learning system for detecting anomalies in medical scans with 95% accuracy, deployed on cloud infrastructure.",
      technologies: ["TensorFlow", "OpenCV", "AWS"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      id: 3,
      title: "Real-time Data Analytics Dashboard",
      description: "An interactive dashboard for real-time data visualization and business intelligence, processing thousands of data points per second.",
      technologies: ["React", "D3.js", "Node.js"],
      demoLink: "#",
      sourceLink: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-img">
                AI Project Image
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span className="tech-item" key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoLink} className="project-link"><i className="fas fa-external-link-alt"></i> Live Demo</a>
                  <a href={project.sourceLink} className="project-link"><i className="fab fa-github"></i> Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
