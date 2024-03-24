import React from "react";
import "./skills.css";
import WD from "../../assets/WD.png";
import UI from "../../assets/UI.png";
import DB from "../../assets/DB.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDescritption">
        Hard working and effective web developer who has 3 years of experience.
        Developed an Customer web portal, static websites, responsive websites
        and dynamic websites by using HTML, CSS, Bootstrap, JavaScript and React
        JS and also have a knowledge in backend technologies like Node JS and
        Express JS. Seeking a developer position where a strong understanding of
        technology and a marketing background can be best utilized.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img className="skillBarImg" src={WD} alt="" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>
              Builds, designs, and maintains the websites and software
              applications.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img className="skillBarImg" src={UI} alt="" />
          <div className="skillBarText">
            <h2>UI Design</h2>
            <p>
              Understands UI, cross-browser compatibility, and general web
              functions and standards.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img className="skillBarImg" src={DB} alt="" />
          <div className="skillBarText">
            <h2>Database Management</h2>
            <p>
              Manipulate and control data to meet necessary conditions
              throughout the entire data lifecycle
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
