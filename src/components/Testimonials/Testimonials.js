import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Alex transformed our web application with exceptional attention to detail and technical expertise. Their ability to understand our business needs and translate them into elegant solutions was impressive.",
      authorName: "Sarah Johnson",
      authorTitle: "CTO, TechStart Inc.",
      authorImage: "https://randomuser.me/api/portraits/women/45.jpg"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-title">
          <h2>Testimonials</h2>
        </div>
        <div className="testimonials-container">
          {testimonials.map(testimonial => (
            <div className="testimonial-card" key={testimonial.id}>
              <p className="testimonial-text">
                {testimonial.text}
              </p>
              <div className="testimonial-author">
                <img src={testimonial.authorImage} alt={testimonial.authorName} className="author-img" />
                <div className="author-info">
                  <h4>{testimonial.authorName}</h4>
                  <p>{testimonial.authorTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
