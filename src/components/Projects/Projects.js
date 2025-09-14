import React, { useState, useEffect, useCallback } from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Meal Demand Forecasting System",
      description: "Helps the meal industry <strong>optimize operations</strong> by <strong>accurately predicting future orders</strong>, enabling better inventory and staffing management to <strong>maximize profits</strong>.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "LSTM", "Streamlit", "Tableau"],
      demoLink: "https://muhammednihas-mealdemandforecasting.streamlit.app/",
      sourceLink: "https://github.com/mhdnihas/Meal-Demand-Forecasting",
      image: "/meal-demand-forecasting.jpg"
    },
    {
      id: 2,
      title: "Amazon Review Sentiment Prediction",
      description: "An <strong>AI-driven solution</strong> that predicts customer review sentiment. Incorporates <strong>MLOps tools like MLflow and Evidently</strong> for model monitoring and data drift detection to ensure sustained accuracy.",
      technologies: ["Python", "FastAPI", "Docker", "GCP", "LSTM", "MLflow", "Evidently"],
      demoLink: "https://amazon-app1-dot-amazon-sentiment-analysis1.el.r.appspot.com/",
      sourceLink: "https://github.com/mhdnihas/Amazon-Customer-Review-Sentiment-and-Monitoring-MLOps",
      image: "/amazon-sentiment-analysis.jpg"
    },
    {
      id: 3,
      title: "Indian Constitution Chatbot",
      description: "An <strong>AI assistant</strong> using <strong>RAG, Gemini Pro, and LangChain</strong> to make constitutional knowledge accessible, bridging the gap between citizens and legal information.",
      technologies: ["RAG", "Gemini Pro", "LangChain", "FAISS", "FastAPI", "Docker"],
      demoLink: "https://nihas2218-indian-constitution-bot.hf.space/",
      sourceLink: "https://github.com/mhdnihas/Indian-Constitution-Bot?tab=readme-ov-file",
      image: "/indian-constitution-chatbot.png"
    },
    {
      id: 4,
      title: "NASA Jet Engine RUL Prediction",
      description: "Developed a <strong>Remaining Useful Life (RUL)</strong> model for aircraft engines using NASA's dataset, implementing <strong>time-series forecasting</strong> to predict engine failure and optimize maintenance.",
      technologies: ["Python", "Machine Learning", "Random Forest", "Time Series Forecasting"],
      demoLink: "#",
      sourceLink: "https://github.com/mhdnihas/NASA-Predictive-Engine-Maintenance",
      image: "/nasa-jet-engine-rul.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const dataLength = projects.length;

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dataLength) % dataLength);
    setIsAutoPlaying(false);
  }, [dataLength]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataLength);
    setIsAutoPlaying(false);
  }, [dataLength]);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(goToNext, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  const getCardClassName = (index) => {
    const offset = index - currentIndex;
    const absOffset = Math.abs(offset);
    const distance = Math.min(absOffset, dataLength - absOffset);
    if (distance > 2) return 'inactive';

    const direction = (offset > 0 && distance === absOffset) || (offset < 0 && distance !== absOffset) ? 'next' : 'prev';

    if (distance === 0) return 'active';
    if (distance === 1) return direction;
    if (distance === 2) return `${direction}-2`;

    return 'inactive';
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <div className="carousel-container-projects">
          <div 
            className="carousel-wrapper-projects"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {projects.map((project, index) => (
              <div className={`project-card ${getCardClassName(index)}`} key={project.id}>
                <div className="project-img">
                  {project.image ? (
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    'AI Project Image'
                  )}
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                  <div className="tech-stack">
                    {project.technologies.map((tech, i) => (
                      <span className="tech-item" key={i}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i> Live Demo</a>
                    <a href={project.sourceLink} className="project-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Source Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-btn prev-btn" onClick={goToPrev} aria-label="Previous project">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carousel-btn next-btn" onClick={goToNext} aria-label="Next project">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="carousel-pagination">
          <span className="current-page">{currentIndex + 1}</span> / {dataLength}
        </div>
      </div>
    </section>
  );
};

export default Projects;
