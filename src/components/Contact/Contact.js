import React from 'react';
import './Contact.css';

const Contact = () => {
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
  );
};

export default Contact;
