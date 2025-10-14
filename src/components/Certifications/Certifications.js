import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certificationsData = [
    {
      id: 1,
      title: "Cognizant - Artificial Intelligence Job Simulation",
      issuer: "Forage",
      date: "July 2024",
      verificationLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/5N2ygyhzMWjKQmgCK_Cognizant_kFgcdmsDKQZikXgiP_1719895946606_completion_certificate.pdf",
      skills: [] // Not provided
    },
    {
      id: 2,
      title: "Neo4j Fundamentals",
      issuer: "Neo4j",
      date: "September 2025",
      verificationLink: "https://graphacademy.neo4j.com/c/dd313d25-7b38-41e5-86fe-abb9dfc06edf/",
      skills: ["graph database (neo4j)"]
    },
    {
      id: 3,
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "University of Michigan",
      date: "January 2024",
      verificationLink: "https://coursera.org/verify/VNYABU778RVZ",
      skills: ["python"]
    },
    {
      id: 4,
      title: "What is Data Science?",
      issuer: "IBM",
      date: "January 2024",
      verificationLink: "https://coursera.org/verify/D2SDMF22FK9T",
      skills: [] // Not provided
    },
    {
      id: 5,
      title: "BCG - Data Science Job Simulation",
      issuer: "Forage",
      date: "May 2024",
      verificationLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/BCG%20/Tcz8gTtprzAS4xSoK_BCG_kFgcdmsDKQZikXgiP_1715750944925_completion_certificate.pdf",
      skills: [] // Not provided
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className="section-title">
          <h2>Certifications & Courses</h2>
        </div>
        <div className="certifications-container">
          {certificationsData.map((cert) => (
            <div className="certification-card" key={cert.id}>
              <div className="certification-header">
                <h3 className="certification-title">{cert.title}</h3>
                <span className="certification-date">{cert.date}</span>
              </div>
              <div className="certification-issuer">{cert.issuer}</div>
              <div className="certification-skills">
                {cert.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
              <a href={cert.verificationLink} className="verify-link" target="_blank" rel="noopener noreferrer">
                Verify Credential <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;