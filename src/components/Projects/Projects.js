import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Meal Demand Forecasting System",
      description: "Helps the meal industry <strong>optimize operations</strong> across multiple restaurants in different cities by <strong>accurately predicting future orders</strong>. Addresses the challenge of unpredictable demand, enabling better inventory and staffing management to <strong>maximize profits</strong>.<br/><br/>• Utilized <strong>LSTM as the primary model</strong>, achieving <strong>94% accuracy</strong>, and experimented with other algorithms like Regression, ARIMAX, and Prophet<br/>• Addressed a <strong>time series forecasting problem</strong>, where LSTM captured patterns from previous orders along with factors such as center details, food information, cities, promotions, and pricing<br/>• Implemented both supervised and unsupervised techniques; <strong>calculates calories and other nutritional values</strong> based on BMR and suggests <strong>10 similar nutritious meals using KNN</strong><br/>• Developed an <strong>interactive dashboard in Tableau</strong>, allowing restaurant owners to explore different food items, view details, and analyze time-series graphs<br/>• Built with <strong>Streamlit (frontend)</strong> and <strong>Python (backend)</strong>, deployed on <strong>Streamlit Cloud</strong> for accessibility",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "KNN", "LSTM", "Streamlit", "Tableau"],
      demoLink: "https://muhammednihas-mealdemandforecasting.streamlit.app/",
      sourceLink: "https://github.com/mhdnihas/Meal-Demand-Forecasting",
      image: "/meal-demand-forecasting.jpg"
    },
    {
      id: 2,
      title: "Amazon Customer Review Sentiment Prediction System",
      description: "The Amazon Customer Review Sentiment Prediction System is an <strong>AI-driven solution</strong> that predicts the sentiment (positive, negative, or neutral) of customer reviews. It empowers users to input review text, receive <strong>real-time predictions</strong>, and submit feedback to enhance future model performance. The system incorporates <strong>model monitoring and data drift detection</strong> to ensure sustained accuracy, enabling <strong>planned retraining</strong> with accumulated feedback for long-term improvement.<br/><br/>• Designed and developed a <strong>sentiment prediction model using LSTM-based deep learning</strong>, enhanced by NLP techniques such as TF-IDF and lemmatization for <strong>robust text processing</strong><br/>• Implemented <strong>MLOps tools, MLflow and Evidently</strong>, to track model performance, compare experiments, and visually analyze data drift for <strong>proactive model maintenance</strong><br/>• Built <strong>RESTful APIs using FastAPI</strong> to handle prediction responses, feedback submission, and data drift visualization, paired with an <strong>intuitive web interface</strong> for user interaction<br/>• Deployed the application on <strong>Google Cloud Platform (GCP)</strong> using <strong>App Engine</strong>, integrated with <strong>Cloud Storage</strong> for storing user feedback and drift reports, all within a <strong>Dockerized container</strong> for scalability and consistency",
      technologies: ["Python", "FastAPI", "Docker", "Google Cloud Platform (GCP)", "NLTK", "LSTM", "Evidently", "MLflow", "RESTful API", "HTML", "CSS", "JavaScript"],
      demoLink: "https://amazon-app1-dot-amazon-sentiment-analysis1.el.r.appspot.com/",
      sourceLink: "https://github.com/mhdnihas/Amazon-Customer-Review-Sentiment-and-Monitoring-MLOps",
      image: "/amazon-sentiment-analysis.jpg"
    },
    {
      id: 3,
      title: "Indian Constitution Chatbot",
      description: "The Indian Constitution Chatbot is an <strong>AI-powered assistant</strong> designed to bridge the gap between citizens and constitutional knowledge. Many people struggle due to a lack of awareness about their fundamental rights, legal remedies, and government policies. This intelligent chatbot provides <strong>quick, reliable, and well-structured legal insights</strong>, making constitutional information easily accessible to everyone.<br/><br/>• Implemented <strong>Retrieval-Augmented Generation (RAG)</strong> to fetch relevant constitutional documents based on user queries from a <strong>vector database</strong><br/>• Utilized <strong>FAISS (Facebook AI Similarity Search)</strong> for <strong>efficient and scalable document retrieval</strong><br/>• Integrated <strong>Gemini Pro</strong> as the <strong>Large Language Model (LLM)</strong> to generate <strong>accurate responses</strong><br/>• Developed a <strong>data processing pipeline</strong> create stuff documents chain to seamlessly transfer retrieved data to the LLM<br/>• Used <strong>Hugging Face embedding methods</strong> for vectorizing text and <strong>improving search accuracy</strong><br/>• Built and deployed an <strong>API using FastAPI</strong>, making the chatbot <strong>accessible and scalable</strong><br/>• Successfully deployed the application on <strong>Hugging Face Spaces</strong> with <strong>Docker</strong> for public access",
      technologies: ["RAG", "Gemini Pro", "LangChain", "FAISS", "Hugging Face", "Python", "FastAPI", "RESTful API", "Docker", "HTML", "CSS", "JavaScript", "Hugging Face Spaces"],
      demoLink: "https://nihas2218-indian-constitution-bot.hf.space/",
      sourceLink: "https://github.com/mhdnihas/Indian-Constitution-Bot?tab=readme-ov-file",
      image: "/indian-constitution-chatbot.png"
    },
    {
      id: 4,
      title: "NASA Jet Engine RUL Prediction",
      description: "Developed a <strong>Remaining Useful Life (RUL) Prediction model</strong> for aircraft engines using <strong>NASA's C-MAPSS dataset</strong>. Implemented <strong>time-series forecasting and machine learning techniques</strong> to predict engine failure and optimize maintenance. Addressed challenges like sensor noise, variable operating conditions, and multiple fault modes to <strong>improve predictive accuracy</strong>.<br/><br/>• Conducted <strong>Exploratory Data Analysis (EDA)</strong> to understand data patterns and distributions<br/>• Performed <strong>Feature Engineering</strong> to enhance model performance<br/>• Developed a <strong>high-performance Random Forest model</strong> for accurate predictions",
      technologies: ["Python", "Machine Learning", "Random Forest", "Time Series Forecasting", "Feature Engineering", "Exploratory Data Analysis"],
      demoLink: "#",
      sourceLink: "https://github.com/mhdnihas/NASA-Predictive-Engine-Maintenance",
      image: "/nasa-jet-engine-rul.png"
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  
  // Calculate total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  
  // Get current projects to display
  const startIndex = currentPage * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);
  
  // Navigation functions
  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };
  
  const goToPrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };
  
  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        
        <div className="projects-carousel">
          <div className="projects-grid">
            {currentProjects.map(project => (
              <div className="project-card" key={project.id}>
                <div className="project-img">
                  {project.image ? (
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    'AI Project Image'
                  )}
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p 
                    className="project-description"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  ></p>
                  
                  <div className="tech-stack">
                    {project.technologies.map((tech, index) => (
                      <span className="tech-item" key={index}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i> Live Demo</a>
                    <a href={project.sourceLink} className="project-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Source Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Controls */}
          <div className="carousel-controls">
            <button 
              className="carousel-btn prev-btn" 
              onClick={goToPrevPage}
              aria-label="Previous projects"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <div className="carousel-indicators">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentPage ? 'active' : ''}`}
                  onClick={() => goToPage(index)}
                  aria-label={`Go to page ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              className="carousel-btn next-btn" 
              onClick={goToNextPage}
              aria-label="Next projects"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
