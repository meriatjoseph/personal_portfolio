import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Languages",
      icon: "fas fa-code",
      skills: ["Python", "SQL (Postgres, MySQL, SQLite3)", "NoSQL (MongoDB)", "JavaScript"]
    },
    {
      id: 2,
      title: "AI/ML Specializations",
      icon: "fas fa-brain",
      skills: ["Machine Learning", "Deep Learning", "Generative AI", "LLMs", "RAG", "Transformers", "Fine-tuning", "Time Series Forecasting", "VLMs", "AI Agents", "ASR", "Stable Diffusion", "Knowledge Graph (Neo4j)"]
    },
    {
      id: 3,
      title: "Frameworks & Libraries",
      icon: "fas fa-cogs",
      skills: ["TensorFlow", "PyTorch", "LangChain", "LangGraph", "Hugging Face", "Keras", "Scikit-learn", "NLTK", "NVIDIA NIMs"]
    },
    {
      id: 4,
      title: "Data Analysis & Visualization",
      icon: "fas fa-chart-bar",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau", "Power BI"]
    },
    {
      id: 5,
      title: "Web Development",
      icon: "fas fa-laptop-code",
      skills: ["HTML/CSS", "FastAPI", "Django", "Flask", "Streamlit"]
    },
    {
      id: 6,
      title: "Cloud & MLOps",
      icon: "fas fa-cloud",
      skills: ["Google Cloud Platform (GCP)", "Docker", "Git", "MLflow"]
    },
    {
      id: 7,
      title: "Core Competencies",
      icon: "fas fa-graduation-cap",
      skills: ["Mathematics", "Statistics", "Data Structures & Algorithms", "Problem-Solving Skills", "OOPs"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="skills-container">
          {skillCategories.map(category => (
            <div className="skill-category" key={category.id}>
              <h3><i className={category.icon}></i> {category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <span className="skill-tag" key={index}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
