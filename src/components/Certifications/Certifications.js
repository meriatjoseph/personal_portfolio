import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certificationsData = [
    {
      id: 1,
      title: "Data Science & AI",
      issuer: "Brototype",
      date: "2023-2025",
      verificationLink: "https://brocamp.brototype.com/portfolio?id=365dc898-7541-43df-a41c-2fafb54b9529",
      skills: ["Machine Learning", "Deep Learning", "Python", "Generative AI", "Data Analysis", "Projects", "DBMS"]
    },
    {
      id: 2,
      title: "Pandas",
      issuer: "Kaggle",
      date: "Completed 2024",
      verificationLink: "https://www.kaggle.com/learn/certification/muhammednihas/pandas",
      skills: ["Indexing", "Summary Functions and Mapping", "Grouping and Sorting", "Data Manipulation"]
    },
    {
      id: 3,
      title: "MLops",
      issuer: "Udemy",
      date: "Completed 2025",
      verificationLink: "#",
      skills: ["mlflow", "flask", "CI/CD", "Github Action"]
    },
    {
      id: 4,
      title: "Building RAG Agents with LLMs",
      issuer: "NVIDIA",
      date: "2025",
      verificationLink: "#",
      skills: ["Langchain", "vector storage", "embeddings"]
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
