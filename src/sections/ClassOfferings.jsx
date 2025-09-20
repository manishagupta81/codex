import React from 'react';

const OFFERINGS = [
  {
    title: 'Pre-Algebra Foundations',
    description:
      'Strengthen number sense, operations, and problem-solving strategies to make algebra concepts feel intuitive.',
  },
  {
    title: 'Algebra Mastery',
    description:
      'Master linear equations, inequalities, and quadratic functions with clear explanations and guided practice.',
  },
  {
    title: 'Geometry with Confidence',
    description:
      'Explore geometric reasoning, proofs, and coordinate geometry through visual, hands-on lessons.',
  },
  {
    title: 'Homework Help Lab',
    description:
      'Bring any math assignment or project for step-by-step guidance, tips, and study strategies.',
  },
];

const ClassOfferings = () => (
  <section className="section" id="class-offerings">
    <div className="container">
      <h2>Class Offerings</h2>
      <p className="section__subtitle">
        Targeted lessons that build confidence, strengthen fundamentals, and prepare students for success.
      </p>
      <div className="card-grid">
        {OFFERINGS.map(({ title, description }) => (
          <article className="card" key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
            <a className="card__link" href="#book-session">
              Learn more
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ClassOfferings;
