import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Meal Demand Forecasting System",
      description: "Helps the meal industry optimize operations across multiple restaurants in different cities by accurately predicting future orders. Addresses the challenge of unpredictable demand, enabling better inventory and staffing management to maximize profits.<br/><br/>• Utilized LSTM as the primary model, achieving 94% accuracy, and experimented with other algorithms like Regression, ARIMAX, and Prophet<br/>• Addressed a time series forecasting problem, where LSTM captured patterns from previous orders along with factors such as center details, food information, cities, promotions, and pricing<br/>• Implemented both supervised and unsupervised techniques; calculates calories and other nutritional values based on BMR and suggests 10 similar nutritious meals using KNN<br/>• Developed an interactive dashboard in Tableau, allowing restaurant owners to explore different food items, view details, and analyze time-series graphs<br/>• Built with Streamlit (frontend) and Python (backend), deployed on Streamlit Cloud for accessibility",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "KNN", "LSTM", "Streamlit", "Tableau"],
      demoLink: "https://muhammednihas-mealdemandforecasting.streamlit.app/",
      sourceLink: "https://github.com/mhdnihas/Meal-Demand-Forecasting",
      image: "/meal-demand-forecasting.jpg"
    },
    {
      id: 2,
      title: "Amazon Customer Review Sentiment Prediction System",
      description: "The Amazon Customer Review Sentiment Prediction System is an AI-driven solution that predicts the sentiment (positive, negative, or neutral) of customer reviews. It empowers users to input review text, receive real-time predictions, and submit feedback to enhance future model performance. The system incorporates model monitoring and data drift detection to ensure sustained accuracy, enabling planned retraining with accumulated feedback for long-term improvement.<br/><br/>• Designed and developed a sentiment prediction model using LSTM-based deep learning, enhanced by NLP techniques such as TF-IDF and lemmatization for robust text processing<br/>• Implemented MLOps tools, MLflow and Evidently, to track model performance, compare experiments, and visually analyze data drift for proactive model maintenance<br/>• Built RESTful APIs using FastAPI to handle prediction responses, feedback submission, and data drift visualization, paired with an intuitive web interface for user interaction<br/>• Deployed the application on Google Cloud Platform (GCP) using App Engine, integrated with Cloud Storage for storing user feedback and drift reports, all within a Dockerized container for scalability and consistency",
      technologies: ["Python", "FastAPI", "Docker", "Google Cloud Platform (GCP)", "NLTK", "LSTM", "Evidently", "MLflow", "RESTful API", "HTML", "CSS", "JavaScript"],
      demoLink: "https://amazon-app1-dot-amazon-sentiment-analysis1.el.r.appspot.com/",
      sourceLink: "https://github.com/mhdnihas/Amazon-Customer-Review-Sentiment-and-Monitoring-MLOps",
      image: "/amazon-sentiment-analysis.jpg"
    },
    {
      id: 3,
      title: "Indian Constitution Chatbot",
      description: "The Indian Constitution Chatbot is an AI-powered assistant designed to bridge the gap between citizens and constitutional knowledge. Many people struggle due to a lack of awareness about their fundamental rights, legal remedies, and government policies. This intelligent chatbot provides quick, reliable, and well-structured legal insights, making constitutional information easily accessible to everyone.<br/><br/>• Implemented Retrieval-Augmented Generation (RAG) to fetch relevant constitutional documents based on user queries from a vector database<br/>• Utilized FAISS (Facebook AI Similarity Search) for efficient and scalable document retrieval<br/>• Integrated Gemini Pro as the Large Language Model (LLM) to generate accurate responses<br/>• Developed a data processing pipeline create stuff documents chain to seamlessly transfer retrieved data to the LLM<br/>• Used Hugging Face embedding methods for vectorizing text and improving search accuracy<br/>• Built and deployed an API using FastAPI, making the chatbot accessible and scalable<br/>• Successfully deployed the application on Hugging Face Spaces with Docker for public access",
      technologies: ["RAG", "Gemini Pro", "LangChain", "FAISS", "Hugging Face", "Python", "FastAPI", "RESTful API", "Docker", "HTML", "CSS", "JavaScript", "Hugging Face Spaces"],
      demoLink: "https://nihas2218-indian-constitution-bot.hf.space/",
      sourceLink: "https://github.com/mhdnihas/Indian-Constitution-Bot?tab=readme-ov-file",
      image: "/indian-constitution-chatbot.png"
    },
    {
      id: 4,
      title: "Real-time Data Analytics Dashboard",
      description: "An interactive dashboard for real-time data visualization and business intelligence, processing thousands of data points per second.",
      technologies: ["React", "D3.js", "Node.js"],
      demoLink: "#",
      sourceLink: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map(project => (
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
                <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
                <div className="tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span className="tech-item" key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoLink} className="project-link"><i className="fas fa-external-link-alt"></i> Live Demo</a>
                  <a href={project.sourceLink} className="project-link"><i className="fab fa-github"></i> Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
