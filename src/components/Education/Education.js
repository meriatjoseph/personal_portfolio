import React, { useState } from 'react';
import './Education.css';

const Education = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  
  const educationData = [
    {
      id: 1,
      university: "Kannur University",
      universityLink: "https://kannur.kreap.co.in",
      institution: "NAM College Kallikandy",
      institutionLink: "http://namcollege.ac.in",
      degree: "BSc Computer Science",
      period: "2020 - 2023",
      gpa: "7.82 CGPA",
      project: "FitMe",
      subjects: [
        "Mathematics",
        "Statistics",
        "Programming",
        "Data Structures & Algorithms",
        "Software Engineering",
        "Networking",
        "Database Management Systems (DBMS)"
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
              <div className="education-institution">
                <a href={edu.institutionLink} target="_blank" rel="noopener noreferrer">
                  {edu.institution}
                </a>
              </div>
              <div className="education-university">
                <a href={edu.universityLink} target="_blank" rel="noopener noreferrer">
                  {edu.university}
                </a>
              </div>
              <div className="education-gpa">CGPA: {edu.gpa}</div>
              <div className="education-project">Major Project: {edu.project}</div>
              
              <div className="education-certificate">
                <button 
                  className="certificate-button"
                  onClick={() => setShowCertificate(true)}
                >
                  View Degree Certificate
                </button>
              </div>
              
              <div className="education-subjects">
                <h4>Key Subjects:</h4>
                <div className="subjects-grid">
                  {edu.subjects.map((subject, index) => (
                    <span key={index} className="subject-tag">{subject}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {showCertificate && (
          <div className="certificate-modal" onClick={() => setShowCertificate(false)}>
            <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-button" onClick={() => setShowCertificate(false)}>&times;</span>
              <img 
                src="/muhammed-nihas-degree-certificate.jpg" 
                alt="Degree Certificate" 
                className="certificate-image"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
