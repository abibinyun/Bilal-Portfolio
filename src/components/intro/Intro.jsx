import React from "react";
import { FaAward, FaBullseye } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me.jpg";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresh Graduate</small>
            </article>
            <article className="about__card">
              <FaBullseye className="about__icon" />
              <h5>Mentoring</h5>
              <small>Fullstack Web Developer</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>1 Completed Projects</small>
            </article>
          </div>
          <p>
            Saya adalah seorang junior fullstack web developer. Saya belajar mengenai teknologi MERN selama 4 bulan di Eduwork.id. Saya memiliki 1 project website POS System dengan menerapkan React JS untuk frontend, redux untuk state
            management, Node JS dan Express JS untuk backend serta MongoDB sebagai database.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
