import React, { useState, useEffect, useRef } from 'react';
import './styles/shared.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Certifications from './components/Certifications/Certifications';
import Achievements from './components/Achievements/Achievements';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Component to handle fade-in animation
const AnimatedSection = ({ children }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15, // Trigger when 15% of the section is visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      let currentSectionId = 'home';
      sections.forEach(section => {
        const wrapperDiv = section.parentElement;
        if (wrapperDiv) {
          const sectionTop = wrapperDiv.offsetTop - 150; // Adjust offset for navbar height
          if (scrollY >= sectionTop) {
            currentSectionId = section.id;
          }
        }
      });

      // A special check for the contact section at the very bottom
      const contactSection = document.getElementById('contact');
      if (contactSection && (window.innerHeight + scrollY) >= document.body.offsetHeight - 100) {
        currentSectionId = 'contact';
      }

      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section && section.parentElement) {
      const sectionTop = section.parentElement.offsetTop - 80; // Offset for fixed header
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  const handleViewProjects = () => {
    handleScrollToSection('projects');
  };

  return (
    <div className="App">
      <Header onNavigate={handleScrollToSection} activeSection={activeSection} />
      <Hero onScrollToProjects={handleViewProjects} />
      <AnimatedSection><About /></AnimatedSection>
      <AnimatedSection><Experience /></AnimatedSection>
      <AnimatedSection><Skills /></AnimatedSection>
      <AnimatedSection><Education /></AnimatedSection>
      <AnimatedSection><Certifications /></AnimatedSection>
      <AnimatedSection><Achievements /></AnimatedSection>
      <AnimatedSection><Projects /></AnimatedSection>
      <AnimatedSection><Contact /></AnimatedSection>
      <Footer onNavigate={handleScrollToSection} />
      
      {/* Back to Top Button */}
      <div className={`back-to-top ${isScrolled ? 'show' : ''}`} onClick={() => handleScrollToSection('home')}>
        <i className="fas fa-arrow-up"></i>
      </div>
    </div>
  );
}

export default App;
