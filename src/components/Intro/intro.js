import React from "react";
import "./intro.css";
import { Link } from "react-scroll";

import Profile from "../../assets/B.jpg";
import hire from "../../assets/hire.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Hemanth</span>
          <br />
          Front End Developer
        </span>
        <p className="introPara">
          I am a skilled front end developer with experience in developing
          <br />
          real-time and user friendly websites.
        </p>
        <Link>
          <button className="btn">
            <img src={hire} className="hire" alt="Hire" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={Profile} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
