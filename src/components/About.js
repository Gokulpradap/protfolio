import React from "react";
import "./css/about.css";

const About = () => {
  return (
    <div className="container about-details" id="about">
     <div className="container-inside">
     <div className="row">
       
          <h1>About Me</h1>

          <div className="col-lg-6 about">
            
          <h5>Name : Gokulpradap M</h5>
          <h5>Date of birth: March 01, 1996</h5>
          <h5>Address: Tamilnadu, India</h5>
          <h5>Zip code: 626149</h5>
          <h5>Email: gokulmari96@gmail.com</h5>
          <h5>Phone: +91-7845536140</h5>
         
        </div>
        <div className="col-lg-6 details">
         <p>I’m a Front-End Developer located in Coimbatore Tamilnadu. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
         <p>Well-organised person, problem solver, independent employee with high attention to detail.</p>
         <p>Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default About;
