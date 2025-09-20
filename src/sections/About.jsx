import React from 'react';

const About = () => (
  <section className="section section--about" id="about">
    <div className="container about">
      <div className="about__image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80"
          alt="Portrait of Muskaan smiling"
          className="about__image"
        />
      </div>
      <div className="about__content">
        <h2>Meet Muskaan</h2>
        <p>
          Hi! I&apos;m Muskaan—a patient, energetic tutor specializing in middle and high school math. Over the
          last five years, I&apos;ve helped students master algebra, geometry, and everyday homework challenges with
          clarity and compassion.
        </p>
        <p>
          My sessions are collaborative and encouraging. I focus on building problem-solving confidence, using
          simple language, visual aids, and plenty of practice. Students leave each session feeling heard,
          supported, and ready for what comes next.
        </p>
        <p>
          Whether you&apos;re preparing for a test or untangling tricky homework, I&apos;m here to guide you every step of
          the way.
        </p>
        <a className="btn btn--outline" href="#book-session">
          Schedule your first session
        </a>
      </div>
    </div>
  </section>
);

export default About;
