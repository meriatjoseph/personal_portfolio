import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Machine Learning",
      icon: "fas fa-brain",
      skills: [
        { name: "Deep Learning", level: 95 },
        { name: "Neural Networks", level: 90 },
        { name: "NLP", level: 85 },
        { name: "Computer Vision", level: 80 }
      ]
    },
    {
      id: 2,
      title: "Data Science",
      icon: "fas fa-database",
      skills: [
        { name: "Statistical Analysis", level: 90 },
        { name: "Data Visualization", level: 85 },
        { name: "Predictive Modeling", level: 80 },
        { name: "Feature Engineering", level: 75 }
      ]
    },
    {
      id: 3,
      title: "Tools & Technologies",
      icon: "fas fa-tools",
      skills: [
        { name: "Python", level: 95 },
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 80 }
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
          {skillCategories.map(category => (
            <div className="skill-category" key={category.id}>
              <h3><i className={category.icon}></i> {category.title}</h3>
              {category.skills.map((skill, index) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
