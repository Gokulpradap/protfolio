import React from "react";
import "./css/skill.css";
import { skill } from "../Data";

const Skill = () => {
  return (
    <div style={{background:"lightblue"}} id="portfolio" className="container-fluid mt-3 pt-5 pb-5">
      <div className="container">
      <h2 style={{color:"#00005F", fontWeight:"600"}}>My Projects!</h2>
        <div className="row text-center">
          <div className="col-lg-12">
           
          </div>
          <div className="con">
            {skill.map((item) => (
              <div className="boxs">
                <a target="_blanck" href={item.link}>                
                  <div className="box">                   
                    <img src={item.image} alt={item.name} />
                    <h5 className="mt-3">{item.name}</h5>
                  </div>
                </a>
              </div>
            ))}
          </div>
          
        </div>
      </div>
      {/* task */}
      {/* <div className="container">
      <h2 style={{color:"#00005F", fontWeight:"600"}}>Tasks</h2>
        <div className="row text-center">
          <div className="col-lg-12">
           
          </div>
          <div className="con">
            {skill.map((item) => (
              <div className="boxs">
                <a target="_blanck" href={item.link}>                
                  <div className="box">                   
                    <img src={item.image} alt={item.name} />
                    <h5 className="mt-3">{item.name}</h5>
                  </div>
                </a>
              </div>
            ))}
          </div>
          
        </div>
      </div> */}
      </div>
  );
};

export default Skill;
