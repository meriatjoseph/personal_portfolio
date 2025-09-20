import React, { useState, useEffect } from 'react';
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
        const sectionTop = section.offsetTop - 150; // Adjust offset for navbar height
        if (scrollY >= sectionTop) {
          currentSectionId = section.id;
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
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewProjects = () => {
    handleScrollToSection('projects');
  };

  return (
    <div className="App">
      <Header onNavigate={handleScrollToSection} activeSection={activeSection} />
      <Hero onScrollToProjects={handleViewProjects} />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <Achievements />
      <Projects />
      <Contact />
      <Footer onNavigate={handleScrollToSection} />
      
      {/* Back to Top Button */}
      <div className={`back-to-top ${isScrolled ? 'show' : ''}`} onClick={() => handleScrollToSection('home')}>
        <i className="fas fa-arrow-up"></i>
      </div>
    </div>
  );
}

export default App;
