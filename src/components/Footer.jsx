import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__content">
        <div>
          <h3>Tutoring with Muskaan</h3>
          <p>
            <a href="mailto:hello@tutoringwithmuskaan.com">hello@tutoringwithmuskaan.com</a>
          </p>
        </div>
        <div className="footer__socials">
          <a href="#" aria-label="Instagram" className="footer__icon">
            &#x1F4F7;
          </a>
          <a href="#" aria-label="Facebook" className="footer__icon">
            &#x1F4F1;
          </a>
          <a href="#" aria-label="YouTube" className="footer__icon">
            &#x1F3A5;
          </a>
        </div>
        <p className="footer__note">&copy; {year} Tutoring with Muskaan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
