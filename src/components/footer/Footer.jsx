import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
// import { FaAngellist } from 'react-icons/fa'
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Muhammad Bilal Ismail
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/muhammad-bilal-ismail-42721014b/" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://github.com/abibinyun" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        {/* <a href="https://angel.co/u/meri-gogichashvili" target="_blank" rel="noreferrer" ><FaAngellist /></a> */}
      </div>
      <div className="footer__copyright">
        <small>&copy; Muhammad Bilal Ismail 2022. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
