import React from "react";
import { Link } from "react-router-dom";
import IMG2 from "../../assets/pro_mern_pos.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "POS App",
      img: IMG2,
      description: "User friendly application to display menu and manage orders, add address from user login and get invoice after purchase",
      technologies: "React | Redux | Express | MongoDB",
      link: "https://pos-client-cyan.vercel.app/#/",
      github: "https://github.com/abibinyun/POS-client",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="container portfolio__item-cta" style={{ marginTop: "10px" }}>
              <a href={pro.github} target="_blank" className="btn" rel="noreferrer">
                GitHub
              </a>
              <Link to={"/detail"} className="btn">
                Detail
              </Link>
              <a href={pro.link} target="_blank" className="btn btn-primary" rel="noreferrer">
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
