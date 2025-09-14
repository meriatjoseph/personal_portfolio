import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certificationsData = [
    {
      id: 1,
      title: "Google Professional Machine Learning Engineer",
      issuer: "Google Cloud",
      date: "March 2025",
      credentialId: "ML-123456",
      verificationLink: "#",
      skills: ["Machine Learning", "Google Cloud", "TensorFlow", "Feature Engineering"]
    },
    {
      id: 2,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "November 2024",
      credentialId: "AWS-789012",
      verificationLink: "#",
      skills: ["Cloud Architecture", "AWS Services", "Security", "High Availability"]
    },
    {
      id: 3,
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "August 2024",
      credentialId: "DL-345678",
      verificationLink: "#",
      skills: ["Neural Networks", "CNN", "RNN", "Transformers"]
    },
    {
      id: 4,
      title: "Natural Language Processing",
      issuer: "Stanford University",
      date: "May 2024",
      credentialId: "NLP-901234",
      verificationLink: "#",
      skills: ["NLP", "Text Processing", "Sentiment Analysis", "Language Models"]
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
              <div className="certification-id">Credential ID: {cert.credentialId}</div>
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
