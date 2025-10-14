import React from 'react';
import './Achievements.css';

const Achievements = () => {
  // Add your achievements here
  const achievements = [
    {
      id: 1,
      title: "100 Days Badge 2024",
      platform: "LeetCode",
      year: "2024",
      verificationLink: null,
      image: "/leetcode-100-days-2024.gif"
    },
    {
      id: 2,
      title: "1 year on Kaggle",
      platform: "Kaggle",
      year: "", // Not provided
      verificationLink: null,
      image: "/kaggle-1-year.svg"
    },
    {
      id: 3,
      title: "GenAI Intensive",
      platform: "Kaggle",
      year: "", // Not provided
      verificationLink: null,
      image: "/kaggle-genai-intensive.svg"
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <div className="section-title">
          <h2>Achievements</h2>
        </div>
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div className="achievement-card" key={achievement.id}>
              <div className="achievement-img">
                {achievement.image ? (
                  <img src={achievement.image} alt={achievement.title} />
                ) : (
                  <div className="placeholder-image"></div>
                )}
              </div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <p className="achievement-platform">
                  {achievement.platform}{achievement.year && ` - ${achievement.year}`}
                </p>
                {achievement.verificationLink && (
                  <a href={achievement.verificationLink} className="achievement-link" target="_blank" rel="noopener noreferrer">
                    Verify
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;