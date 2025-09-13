import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior AI Engineer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      responsibilities: [
        "Lead development of machine learning models for natural language processing applications",
        "Designed and deployed deep learning architectures using TensorFlow and PyTorch",
        "Implemented MLOps pipelines for continuous integration and deployment of AI models",
        "Mentored junior AI engineers and conducted research on cutting-edge ML techniques"
      ]
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "Digital Solutions LLC",
      period: "2020 - 2022",
      responsibilities: [
        "Developed predictive models for customer behavior analysis and recommendation systems",
        "Built interactive dashboards with Python and D3.js for data visualization",
        "Integrated machine learning models with cloud platforms like AWS SageMaker and GCP AI",
        "Collaborated with cross-functional teams to translate business requirements into AI solutions"
      ]
    },
    {
      id: 3,
      title: "AI Research Intern",
      company: "AI Research Lab",
      period: "2019 - 2020",
      responsibilities: [
        "Conducted research on computer vision algorithms for medical image analysis",
        "Worked with large datasets to train and evaluate neural networks",
        "Published findings in peer-reviewed conferences and journals",
        "Assisted in developing open-source tools for the AI research community"
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-title">
          <h2>Experience</h2>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={exp.id}>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <span className="date">{exp.company} | {exp.period}</span>
                <ul>
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
