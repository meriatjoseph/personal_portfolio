import React, { useState, useEffect, useCallback } from 'react';
import './Achievements.css';

const Achievements = () => {
  const [modalImage, setModalImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const achievementsData = [
    {
      id: 1,
      title: "50 Days Badge",
      platform: "LeetCode",
      year: "2025",
      verificationLink: "https://leetcode.com/medal/?showImg=0&id=7343279&isLevel=false",
      type: "leetcode",
      image: "/leetcode-50-days-2025-badge.png"
    },
    {
      id: 2,
      title: "100 Days Badge",
      platform: "LeetCode",
      year: "2024",
      verificationLink: "https://leetcode.com/medal/?showImg=0&id=3792928&isLevel=false",
      type: "leetcode",
      image: "/leetcode-100-days-2024-badge.png"
    },
    {
      id: 3,
      title: "SQL 50 Badge",
      platform: "LeetCode",
      year: "2024",
      verificationLink: "https://leetcode.com/medal/?showImg=0&id=3904114&isLevel=false",
      type: "leetcode",
      image: "/leetcode-sql-50-badge.png"
    },
    {
      id: 4,
      title: "Pandas Badge",
      platform: "LeetCode",
      year: "2024",
      verificationLink: "https://leetcode.com/medal/?showImg=0&id=3297587&isLevel=false",
      type: "leetcode",
      image: "/leetcode-pandas-badge.png"
    },
    {
      id: 5,
      title: "Pull Shark",
      platform: "GitHub",
      year: "2025",
      verificationLink: "https://github.com/users/mhdnihas/achievements/pull-shark",
      type: "github",
      image: "/github-pull-shark-badge.png"
    },
    {
      id: 6,
      title: "YOLO",
      platform: "GitHub",
      year: "2025",
      verificationLink: "https://github.com/users/mhdnihas/achievements/yolo",
      type: "github",
      image: "/github-yolo-badge.png"
    }
  ];

  const dataLength = achievementsData.length;

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dataLength) % dataLength);
    setIsAutoPlaying(false);
  }, [dataLength]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataLength);
    setIsAutoPlaying(false);
  }, [dataLength]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') goToPrev();
    if (e.key === 'ArrowRight') goToNext();
  }, [goToPrev, goToNext]);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(goToNext, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const getCardClassName = (index) => {
    const offset = index - currentIndex;
    const absOffset = Math.abs(offset);
    const distance = Math.min(absOffset, dataLength - absOffset);

    if (distance === 0) return 'active';
    if (distance === 1) {
      const direction = (offset > 0 && distance === absOffset) || (offset < 0 && distance !== absOffset) ? 'next' : 'prev';
      return direction;
    }
    return 'inactive';
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsAutoPlaying(false);
  };

  const closeModal = () => {
    setModalImage(null);
    setIsAutoPlaying(true);
  };

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <div className="section-title">
          <h2>Achievements</h2>
        </div>
        <div className="carousel-container">
          <div 
            className="carousel-wrapper"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {achievementsData.map((achievement, index) => (
              <div className={`achievement-card ${getCardClassName(index)}`} key={achievement.id}>
                <div className="achievement-header">
                  <div className={`platform-icon ${achievement.type}`}>
                    {achievement.type === 'leetcode' ? <i className="fab fa-slack-hash"></i> : <i className="fab fa-github"></i>}
                  </div>
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <span className="achievement-year">{achievement.year}</span>
                </div>
                <div className="achievement-platform">{achievement.platform}</div>
                <div className="badge-preview" onClick={() => openModal(achievement.image)}>
                  <img src={achievement.image} alt={`${achievement.platform} ${achievement.title}`} />
                </div>
                <a href={achievement.verificationLink} className="verify-link" target="_blank" rel="noopener noreferrer">
                  View Achievement <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            ))}
          </div>
          <button className="carousel-btn prev-btn" onClick={goToPrev} aria-label="Previous achievement">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carousel-btn next-btn" onClick={goToNext} aria-label="Next achievement">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={modalImage} alt="Achievement Badge" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;

