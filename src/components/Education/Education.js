import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 3,
      university: "", // Not provided
      universityLink: "#",
      institution: "Brototype",
      institutionLink: "#", // Not provided
      degree: "Data Science",
      period: "2023 - 2025",
      gpa: null, // Not provided
      certificatePath: null
    },
    {
      id: 1,
      university: "Mahatma Gandhi University",
      universityLink: "#",
      institution: "Devamatha College",
      institutionLink: "#",
      degree: "MA Econometrics",
      period: "2020 - 2022",
      gpa: "3.96",
      certificatePath: "/pg-provisional.pdf"
    },
    {
      id: 2,
      university: "Mahatma Gandhi University",
      universityLink: "#",
      institution: "Assumption College",
      institutionLink: "#",
      degree: "Bsc Mathematics",
      period: "2017 - 2020",
      gpa: "7.78/10",
      certificatePath: "/degree-provisional.pdf"
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
              <div className="education-institution">
                <a href={edu.institutionLink} target="_blank" rel="noopener noreferrer">
                  {edu.institution}
                </a>
              </div>
              {edu.university && (
                <div className="education-university">
                  <a href={edu.universityLink} target="_blank" rel="noopener noreferrer">
                    {edu.university}
                  </a>
                </div>
              )}
              {edu.gpa && <div className="education-gpa">GPA: {edu.gpa}</div>}
              
              {edu.certificatePath && (
                <div className="education-certificate">
                  <a 
                    href={edu.certificatePath} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="certificate-button"
                  >
                    View Certificate
                  </a>
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