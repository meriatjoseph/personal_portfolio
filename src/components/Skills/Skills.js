import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const skillCategories = [
    {
      id: 1,
      title: "Languages",
      icon: "fas fa-code",
      skills: [
        { name: "Python", level: 98 },
        { name: "SQL (Postgres, MySQL, SQLite3)", level: 90 },
        { name: "NoSQL (MongoDB)", level: 85 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      id: 2,
      title: "AI/ML Specializations",
      icon: "fas fa-brain",
      skills: [
        { name: "Machine Learning", level: 95 },
        { name: "Deep Learning", level: 90 },
        { name: "Generative AI", level: 90 },
        { name: "LLMs", level: 95 },
        { name: "RAG", level: 95 },
        { name: "Transformers", level: 85 },
        { name: "Fine-tuning", level: 85 },
        { name: "Time Series Forecasting", level: 95 },
        { name: "VLMs", level: 80 },
        { name: "AI Agents", level: 85 },
        { name: "ASR", level: 70 }
      ]
    },
    {
      id: 3,
      title: "Frameworks & Libraries",
      icon: "fas fa-cogs",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 95 },
        { name: "LangChain", level: 90 },
        { name: "LangGraph", level: 85 },
        { name: "Hugging Face", level: 90 },
        { name: "Keras", level: 85 },
        { name: "Scikit-learn", level: 90 },
        { name: "NLTK", level: 80 },
        { name: "NVIDIA NIMs", level: 80 }
      ]
    },
    {
      id: 4,
      title: "Data Analysis & Visualization",
      icon: "fas fa-chart-bar",
      skills: [
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 95 },
        { name: "Matplotlib", level: 90 },
        { name: "Seaborn", level: 85 },
        { name: "Tableau", level: 85 },
        { name: "Power BI", level: 75 },
        { name: "Looker Studio", level: 75 }
      ]
    },
    {
      id: 5,
      title: "Web Development",
      icon: "fas fa-laptop-code",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "FastAPI", level: 98 },
        { name: "Django", level: 80 },
        { name: "Flask", level: 82 },
        { name: "Streamlit", level: 90 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      id: 6,
      title: "Cloud & MLOps",
      icon: "fas fa-cloud",
      skills: [
        { name: "Google Cloud Platform (GCP)", level: 80 },
        { name: "Docker", level: 85 },
        { name: "Git", level: 100 },
        { name: "MLflow", level: 85 },
        { name: "Evidently", level: 75 }
      ]
    },
    {
      id: 7,
      title: "Core Competencies",
      icon: "fas fa-graduation-cap",
      skills: [
        { name: "Mathematics", level: 90 },
        { name: "Statistics", level: 90 },
        { name: "Data Structures & Algorithms", level: 85 },
        { name: "Problem-Solving Skills", level: 95 },
        { name: "OOPs", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="skills-container">
          {skillCategories.map(category => {
            const isExpanded = expandedCategories[category.id];
            const skillsToShow = isExpanded ? category.skills : category.skills.slice(0, 4);
            
            return (
              <div className="skill-category" key={category.id}>
                <h3><i className={category.icon}></i> {category.title}</h3>
                <div className="skill-category-content">
                  {skillsToShow.map((skill, index) => (
                    <div className="skill-bar" key={index}>
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                      <div className="skill-progress-track">
                        <div 
                          className="skill-progress" 
                          data-percent={`${skill.level}%`} 
                          style={{width: `${skill.level}%`}}
                        ></div>
                      </div>
                    </div>
                  ))}
                  {category.skills.length > 4 && (
                    <button 
                      className="btn toggle-btn"
                      onClick={() => toggleCategory(category.id)}
                    >
                      {isExpanded ? 'Show Less' : 'Show More'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
