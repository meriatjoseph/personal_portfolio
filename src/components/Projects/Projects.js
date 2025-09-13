import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Meal Demand Forecasting System",
      description: "Helps the meal industry optimize operations across multiple restaurants in different cities by accurately predicting future orders. Addresses the challenge of unpredictable demand, enabling better inventory and staffing management to maximize profits.<br/><br/>• Utilized LSTM as the primary model, achieving 94% accuracy, and experimented with other algorithms like Regression, ARIMAX, and Prophet<br/>• Addressed a time series forecasting problem, where LSTM captured patterns from previous orders along with factors such as center details, food information, cities, promotions, and pricing<br/>• Implemented both supervised and unsupervised techniques; calculates calories and other nutritional values based on BMR and suggests 10 similar nutritious meals using KNN<br/>• Developed an interactive dashboard in Tableau, allowing restaurant owners to explore different food items, view details, and analyze time-series graphs<br/>• Built with Streamlit (frontend) and Python (backend), deployed on Streamlit Cloud for accessibility",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "KNN", "LSTM", "Streamlit", "Tableau"],
      demoLink: "https://muhammednihas-mealdemandforecasting.streamlit.app/",
      sourceLink: "https://github.com/mhdnihas/Meal-Demand-Forecasting",
      image: "/meal-demand-forecasting.jpg"
    },
    {
      id: 2,
      title: "Natural Language Processing Toolkit",
      description: "A comprehensive NLP toolkit for text analysis, sentiment classification, and named entity recognition using transformer models.",
      technologies: ["Python", "PyTorch", "Hugging Face"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      id: 3,
      title: "Computer Vision for Medical Imaging",
      description: "A deep learning system for detecting anomalies in medical scans with 95% accuracy, deployed on cloud infrastructure.",
      technologies: ["TensorFlow", "OpenCV", "AWS"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      id: 4,
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
                {project.image ? (
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  'AI Project Image'
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
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
