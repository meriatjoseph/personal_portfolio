import React from 'react';
import './App.css';
import profileImage from './profile.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profileImage} className="profile-image" alt="Profile" />
        <h1>Your Name</h1>
        <p>A passionate Software Engineer</p>
      </header>

      <section id="about" className="App-section">
        <h2>About Me</h2>
        <p>
          Write a brief introduction about yourself here.
          Highlight your passion, what drives you, and your career goals.
          Mention your key strengths and what you bring to a team.
        </p>
      </section>

      <section id="experience" className="App-section">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Software Engineer - Company Name</h3>
          <p>Jan 2023 - Present</p>
          <ul>
            <li>Developed and maintained web applications using React and Node.js.</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software.</li>
            <li>Implemented RESTful APIs and integrated with various third-party services.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Intern - Another Company</h3>
          <p>Summer 2022</p>
          <ul>
            <li>Assisted in the development of a mobile application.</li>
            <li>Gained experience in agile development methodologies.</li>
          </ul>
        </div>
      </section>

      <section id="skills" className="App-section">
        <h2>Skills</h2>
        <div className="skills-category">
          <h3>Programming Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3>Frameworks & Libraries</h3>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Django</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3>Tools & Technologies</h3>
          <ul>
            <li>Git</li>
            <li>Docker</li>
            <li>AWS</li>
          </ul>
        </div>
      </section>

      <section id="projects" className="App-section">
        <h2>Projects</h2>
        <div className="project-item">
          <h3>Project Alpha</h3>
          <p>A brief description of Project Alpha. Mention the technologies used and your role.</p>
          <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-item">
          <h3>Project Beta</h3>
          <p>A brief description of Project Beta. Mention the technologies used and your role.</p>
          <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </section>

      <footer className="App-footer">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
