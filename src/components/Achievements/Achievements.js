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

  // Group achievements into sets of 3
  const groupedAchievements = [];
  for (let i = 0; i < achievementsData.length; i += 3) {
    groupedAchievements.push(achievementsData.slice(i, i + 3));
  }

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? groupedAchievements.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false); // Pause auto-play on manual navigation
  }, [groupedAchievements.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === groupedAchievements.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false); // Pause auto-play on manual navigation
  }, [groupedAchievements.length]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  }, [goToNext, goToPrev]);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying && groupedAchievements.length > 1) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === groupedAchievements.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, groupedAchievements.length]);

  // Keyboard event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const openModal = (image) => {
    setModalImage(image);
    setIsAutoPlaying(false); // Pause carousel when modal is open
  };

  const closeModal = () => {
    setModalImage(null);
    setIsAutoPlaying(true); // Resume carousel when modal is closed
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Pause auto-play on manual navigation
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  // Resume auto-play on mouse leave
  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <div className="section-title">
          <h2>Achievements</h2>
        </div>
        <div 
          className="carousel-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="carousel-btn prev-btn" onClick={goToPrev} aria-label="Previous achievement">
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="carousel-wrapper">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {groupedAchievements.map((group, groupIndex) => (
                <div 
                  className="carousel-slide" 
                  key={groupIndex}
                >
                  <div className="achievements-grid">
                    {group.map((achievement) => (
                      <div className="achievement-card" key={achievement.id}>
                        <div className="achievement-header">
                          <div className={`platform-icon ${achievement.type}`}>
                            {achievement.type === 'leetcode' ? (
                              <i className="fab fa-slack-hash"></i>
                            ) : (
                              <i className="fab fa-github"></i>
                            )}
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
                </div>
              ))}
            </div>
          </div>
          
          <button className="carousel-btn next-btn" onClick={goToNext} aria-label="Next achievement">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="carousel-controls">
          <div className="carousel-indicators">
            {groupedAchievements.map((_, index) => (
              <span 
                key={index} 
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></span>
            ))}
          </div>
          
          <button 
            className="autoplay-toggle" 
            onClick={toggleAutoPlay}
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? (
              <i className="fas fa-pause"></i>
            ) : (
              <i className="fas fa-play"></i>
            )}
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
