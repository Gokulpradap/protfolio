import React from "react";
import mongodb from "../Assets/mongodb.png";
import html from "../Assets/html.png";
import css from "../Assets/css3.png";
import js from "../Assets/javascript.png";
import bootstrap from "../Assets/bootstrap.png";
import react from "../Assets/reactjs.png";
import node from "../Assets/node-js.png";
import "./css/skill.css"
const Skill = () => {
  return (
    <div className="skills text-center" id="skill">
      <div className="container skill">
        <h2>Skills</h2>
        <div className="row">
          <div className="col-lg-3">
            <img  data-aos="fade-up" data-aos-duration='1000' src={html} alt="html" />
          </div>
          <div className="col-lg-3">
            <img  data-aos="fade-up" data-aos-duration='1000' src={css} alt="css" />
          </div>
          <div className="col-lg-3">
            <img  data-aos="fade-up" data-aos-duration='1000' src={js} alt="javascript" />
          </div>
          <div className="col-lg-3">
            <img  data-aos="fade-up" data-aos-duration='1000' src={bootstrap} alt="" />
          </div>
          <div className="col-lg-4"> <img  data-aos="fade-up" data-aos-duration='2000' src={react} alt="react" /></div>
          <div className="col-lg-4"> <img  data-aos="fade-up" data-aos-duration='2000' src={node} alt="node" /></div>
          <div className="col-lg-4"><img  data-aos="fade-up" data-aos-duration='2000' src={mongodb} alt="" /></div>
        </div>

       
       
        
      </div>
    </div>
  );
};

export default Skill;
