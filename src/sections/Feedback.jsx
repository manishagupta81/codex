import React from 'react';

const TESTIMONIALS = [
  {
    quote:
      '“Placeholder for a glowing review from a middle school parent describing a big confidence boost.”',
    author: '– Parent of 8th grader',
  },
  {
    quote:
      '“Placeholder for a high school student sharing how Muskaan helped them ace their algebra exam.”',
    author: '– 10th grade student',
  },
  {
    quote:
      '“Placeholder for feedback from a family highlighting Muskaan\'s patience and clarity.”',
    author: '– Parent of 7th grader',
  },
];

const Feedback = () => (
  <section className="section section--accent" id="feedback">
    <div className="container">
      <h2>Feedback from Families</h2>
      <p className="section__subtitle">
        What students and parents are saying about Muskaan&apos;s support.
      </p>
      <div className="card-grid testimonials">
        {TESTIMONIALS.map(({ quote, author }) => (
          <article className="testimonial-card" key={author}>
            <p className="testimonial-card__quote">{quote}</p>
            <p className="testimonial-card__author">{author}</p>
          </article>
        ))}
      </div>
      <div className="feedback-cta">
        <p>Have feedback to share? A submission form is coming soon—stay tuned!</p>
      </div>
    </div>
  </section>
);

export default Feedback;
