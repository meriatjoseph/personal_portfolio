import React from 'react';
import './Projects.css';

const Projects = () => {
  // Add your projects here
  const projects = [
    {
      id: 1,
      title: "English Mastery App",
      description: "AI-Powered English Learning App. A mobile app designed to improve English proficiency, supporting IELTS preparation and general language skills. It offers personalized guidance across Reading, Speaking, Listening, and Writing, along with grammar and vocabulary lessons. Users receive interactive exercises, AI-driven feedback, and can track progress efficiently.",
      technologies: ["LLMs", "RAG", "LangChain", "Whisper", "GTTS", "OpenAI embeddings", "Flutter", "FastAPI", "AWS", "Gemini", "LLaMA3", "GPT-3.5"],
      demoLink: null,
      sourceLink: "https://github.com/meriatjoseph/english_mastery_",
    },
    {
      id: 2,
      title: "Youtube summarizer",
      description: "Developed a YouTube video summarizer using Generative AI and Streamlit, enabling automated extraction of key points and concise summaries from video content.",
      technologies: ["Generative AI", "Streamlit"],
      demoLink: null,
      sourceLink: "https://github.com/meriatjoseph/youtube-video-summarizer",
    },
    {
      id: 3,
      title: "BCGX – Customer Churn Analysis",
      description: "A Data Science project aimed at predicting customer churn and driving actionable business insights for XYZ Analytics. ● Data Analysis & Preparation: Leveraged Python libraries (Pandas, NumPy) for efficient data cleaning, preprocessing, and exploration. ● Predictive Modeling: Engineered and optimized a Random Forest classifier, achieving 85% accuracy in predicting customer churn. ● Feature Engineering: Created and refined key features to enhance model performance and predictive accuracy. ● Data Visualization: Applied advanced visualization techniques to identify trends, patterns, and key churn drivers. ● Business Impact: Provided actionable insights to reduce churn rates and improve customer retention strategies.",
      technologies: ["Python", "Pandas", "NumPy", "Random Forest", "Data Visualization"],
      demoLink: null,
      sourceLink: null,
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span className="tech-item" key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demoLink && <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>}
                  {project.sourceLink && <a href={project.sourceLink} className="project-link" target="_blank" rel="noopener noreferrer">Source Code</a>}
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