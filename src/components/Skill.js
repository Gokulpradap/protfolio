import React from "react";
import "./css/skill.css";
import { skill } from "../Data";

const Skill = () => {
  return (
    <div className="skills text-center" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>My Projects!</h2>
          </div>
          <div className="con">
            {skill.map((item) => (
              <div className="boxs">
                <a target="_blanck" href={item.link}>                
                  <div className="box">                   
                    <img src={item.image} alt={item.name} />
                    {item.name}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
