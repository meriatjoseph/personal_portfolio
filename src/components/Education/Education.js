import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: "University Name",
      degree: "Master of Science in Computer Science",
      field: "Artificial Intelligence",
      period: "2023 - 2025",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List for Academic Excellence (2023-2024)",
        "Research Assistant in Machine Learning Lab",
        "Thesis: 'Advancements in Natural Language Processing'"
      ]
    },
    {
      id: 2,
      institution: "College Name",
      degree: "Bachelor of Technology",
      field: "Computer Engineering",
      period: "2019 - 2023",
      gpa: "3.7/4.0",
      achievements: [
        "Graduated with Honors",
        "President of Computer Science Club",
        "Capstone Project: 'Smart Home Automation System'"
      ]
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
        </div>
        <div className="education-container">
          {educationData.map((edu) => (
            <div className="education-card" key={edu.id}>
              <div className="education-header">
                <h3 className="education-degree">{edu.degree}</h3>
                <span className="education-period">{edu.period}</span>
              </div>
              <div className="education-institution">{edu.institution}</div>
              <div className="education-field">{edu.field}</div>
              <div className="education-gpa">GPA: {edu.gpa}</div>
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="education-achievements">
                  <h4>Achievements & Activities:</h4>
                  <ul>
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
