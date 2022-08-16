import React from 'react';
import Linkedin from '../../assets/images/linkedin.png';
import Github from '../../assets/images/github.png';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="footer-container">
        <div className="footer-social-media">
          <a
            id="footer-button"
            href="https://www.linkedin.com/in/mayara-ribeiro-/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="icon-social-media" />
          </a>
          <a
            id="footer-button"
            href="https://github.com/Mayara-Ribeiro"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="icon-social-media" />
          </a>
         
        </div>

        <h6>Desenvolvido por Mayara Ribeiro</h6>
        <h6>Start - Recife/PE</h6>
      </div>
    </footer>
  );
};

export default Footer;