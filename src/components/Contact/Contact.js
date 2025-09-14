import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration from environment variables
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    // Check if we have the required EmailJS credentials
    if (!serviceID || !templateID || !userID) {
      console.error('EmailJS credentials are not configured. Please set up your EmailJS account and update the credentials.');
      setSubmitStatus({ 
        type: 'error', 
        message: 'Form submission is not configured yet. Please contact the site administrator.' 
      });
      setIsSubmitting(false);
      return;
    }

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'muhammednihas2218@gmail.com'
    };

    // Send notification email to site owner
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((result) => {
        console.log('Email sent successfully:', result);
        setSubmitStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I will get back to you soon.' 
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setSubmitStatus({ 
          type: 'error', 
          message: 'Failed to send message. Please try again later.' 
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
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
                <p>Bengluru, Karnataka</p>
              </div>
            </div>
            <div className="contact-detail">
              <i className="fas fa-envelope contact-icon"></i>
              <div className="contact-text">
                <h4>Email</h4>
                <a href="mailto:muhammednihas2218@gmail.com">muhammednihas2218@gmail.com</a>
              </div>
            </div>
            <div className="contact-detail">
              <i className="fas fa-phone contact-icon"></i>
              <div className="contact-text">
                <h4>Phone</h4>
                <a href="tel:+918589932218">+91 8589932218</a>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="form-control" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="form-control" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="form-control" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  className="form-control" 
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              {submitStatus && (
                <div className={`form-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <button 
                type="submit" 
                className="btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
