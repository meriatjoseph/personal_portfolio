import React, { useState, useEffect } from 'react';
import './App.css';
import profileImage from './profile.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" className="nav-logo" onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}>Portfolio</a>
          
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}>About</a>
            </li>
            <li className="nav-item">
              <a href="#experience" className="nav-link" onClick={(e) => {
                e.preventDefault();
                scrollToSection('experience');
              }}>Experience</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link" onClick={(e) => {
                e.preventDefault();
                scrollToSection('skills');
              }}>Skills</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link" onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}>Projects</a>
            </li>
            <li className="nav-item">
              <a href="#testimonials" className="nav-link" onClick={(e) => {
                e.preventDefault();
                scrollToSection('testimonials');
              }}>Testimonials</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}>Contact</a>
            </li>
          </ul>
          
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="App-header" id="home">
        <div className="profile-container">
          <img src={profileImage} className="profile-image" alt="Profile" />
          <div className="profile-border"></div>
        </div>
        <h1>Alex Morgan</h1>
        <p>AI Engineer & Data Scientist</p>
        
        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="mailto:alex@example.com" className="social-icon">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        
        <button className="btn" onClick={() => scrollToSection('projects')}>
          View My AI Projects
        </button>
      </header>

      {/* About Section */}
      <section id="about" className="App-section">
        <div className="container">
          <div className="section-title">
            <h2>About Me</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>Hello! I'm Alex, an <span className="highlight">AI Engineer & Data Scientist</span> with expertise in machine learning, deep learning, and artificial intelligence technologies.</p>
              <p>I specialize in developing intelligent systems using <span className="highlight">Python, TensorFlow, and PyTorch</span>, with a strong foundation in statistical analysis, neural networks, and data visualization. My approach combines rigorous scientific methodology with engineering excellence to create AI solutions that solve real-world problems.</p>
              <p>With experience in both research and production environments, I bridge the gap between theoretical AI concepts and practical applications. I'm passionate about leveraging data to drive insights and build systems that augment human capabilities.</p>
              <button className="btn btn-secondary">Download Resume</button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="App-section">
        <div className="container">
          <div className="section-title">
            <h2>Experience</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Senior AI Engineer</h3>
                <span className="date">Tech Innovations Inc. | 2022 - Present</span>
                <ul>
                  <li>Lead development of machine learning models for natural language processing applications</li>
                  <li>Designed and deployed deep learning architectures using TensorFlow and PyTorch</li>
                  <li>Implemented MLOps pipelines for continuous integration and deployment of AI models</li>
                  <li>Mentored junior AI engineers and conducted research on cutting-edge ML techniques</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Data Scientist</h3>
                <span className="date">Digital Solutions LLC | 2020 - 2022</span>
                <ul>
                  <li>Developed predictive models for customer behavior analysis and recommendation systems</li>
                  <li>Built interactive dashboards with Python and D3.js for data visualization</li>
                  <li>Integrated machine learning models with cloud platforms like AWS SageMaker and GCP AI</li>
                  <li>Collaborated with cross-functional teams to translate business requirements into AI solutions</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>AI Research Intern</h3>
                <span className="date">AI Research Lab | 2019 - 2020</span>
                <ul>
                  <li>Conducted research on computer vision algorithms for medical image analysis</li>
                  <li>Worked with large datasets to train and evaluate neural networks</li>
                  <li>Published findings in peer-reviewed conferences and journals</li>
                  <li>Assisted in developing open-source tools for the AI research community</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="App-section">
        <div className="container">
          <div className="section-title">
            <h2>Skills</h2>
          </div>
          <div className="skills-container">
            <div className="skill-category">
              <h3><i className="fas fa-brain"></i> Machine Learning</h3>
              <div className="skill-bar">
                <div className="skill-progress" data-percent="95%" style={{width: '95%'}}></div>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-percent="90%" style={{width: '90%'}}></div>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-percent="85%" style={{width: '85%'}}></div>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-percent="80%" style={{width: '80%'}}></div>
              </div>
            </div>
            
            <div className="skill-category">
              <h3><i className="fas fa-database"></i> Data Science</h3>
              <div className="skill-bar">
                <div className="skill-progress" data-percent="90%" style={{width: '90%'}}></div>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-percent="85%" style={{width: '85%'}}></div>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-percent="80%" style={{width: '80%'}}></div>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-percent="75%" style={{width: '75%'}}></div>
              </div>
            </div>
            
            <div className="skill-category">
              <h3><i className="fas fa-tools"></i> Tools & Technologies</h3>
              <div className="skill-bar">
                <div className="skill-progress" data-percent="95%" style={{width: '95%'}}></div>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-percent="90%" style={{width: '90%'}}></div>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-percent="85%" style={{width: '85%'}}></div>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-percent="80%" style={{width: '80%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="App-section">
        <div className="container">
          <div className="section-title">
            <h2>Projects</h2>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-img">
                AI Project Image
              </div>
              <div className="project-content">
                <h3>Natural Language Processing Toolkit</h3>
                <p>A comprehensive NLP toolkit for text analysis, sentiment classification, and named entity recognition using transformer models.</p>
                <div className="tech-stack">
                  <span className="tech-item">Python</span>
                  <span className="tech-item">PyTorch</span>
                  <span className="tech-item">Hugging Face</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link"><i className="fas fa-external-link-alt"></i> Live Demo</a>
                  <a href="#" className="project-link"><i className="fab fa-github"></i> Source Code</a>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-img">
                AI Project Image
              </div>
              <div className="project-content">
                <h3>Computer Vision for Medical Imaging</h3>
                <p>A deep learning system for detecting anomalies in medical scans with 95% accuracy, deployed on cloud infrastructure.</p>
                <div className="tech-stack">
                  <span className="tech-item">TensorFlow</span>
                  <span className="tech-item">OpenCV</span>
                  <span className="tech-item">AWS</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link"><i className="fas fa-external-link-alt"></i> Live Demo</a>
                  <a href="#" className="project-link"><i className="fab fa-github"></i> Source Code</a>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-img">
                AI Project Image
              </div>
              <div className="project-content">
                <h3>Real-time Data Analytics Dashboard</h3>
                <p>An interactive dashboard for real-time data visualization and business intelligence, processing thousands of data points per second.</p>
                <div className="tech-stack">
                  <span className="tech-item">React</span>
                  <span className="tech-item">D3.js</span>
                  <span className="tech-item">Node.js</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link"><i className="fas fa-external-link-alt"></i> Live Demo</a>
                  <a href="#" className="project-link"><i className="fab fa-github"></i> Source Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="App-section">
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
          </div>
          <div className="testimonials-container">
            <div className="testimonial-card">
              <p className="testimonial-text">
                Alex transformed our web application with exceptional attention to detail and technical expertise. 
                Their ability to understand our business needs and translate them into elegant solutions was impressive.
              </p>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Sarah Johnson" className="author-img" />
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <p>CTO, TechStart Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="App-section">
        <div className="container">
          <div className="section-title">
            <h2>Contact Me</h2>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <div className="contact-detail">
                <i className="fas fa-map-marker-alt contact-icon"></i>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>San Francisco, CA</p>
                </div>
              </div>
              <div className="contact-detail">
                <i className="fas fa-envelope contact-icon"></i>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:alex@example.com">alex@example.com</a>
                </div>
              </div>
              <div className="contact-detail">
                <i className="fas fa-phone contact-icon"></i>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <a href="tel:+11234567890">+1 (123) 456-7890</a>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" className="form-control" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" className="form-control" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" className="form-control" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="App-footer">
        <div className="container">
          <div className="footer-content">
            <a href="#home" className="footer-logo">Alex Morgan</a>
            <div className="footer-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:alex@example.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <div className="footer-links">
              <a href="#about" className="footer-link" onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}>About</a>
              <a href="#experience" className="footer-link" onClick={(e) => {
                e.preventDefault();
                scrollToSection('experience');
              }}>Experience</a>
              <a href="#skills" className="footer-link" onClick={(e) => {
                e.preventDefault();
                scrollToSection('skills');
              }}>Skills</a>
              <a href="#projects" className="footer-link" onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}>Projects</a>
              <a href="#contact" className="footer-link" onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}>Contact</a>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Alex Morgan. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <div className={`back-to-top ${isScrolled ? 'show' : ''}`} onClick={() => scrollToSection('home')}>
        <i className="fas fa-arrow-up"></i>
      </div>
    </div>
  );
}

export default App;
