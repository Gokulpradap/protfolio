import React from "react";
import "./css/about.css";
import { FaMobile} from 'react-icons/fa';
import {SiGmail} from "react-icons/si"
const About = () => {
  return (
    <div className="container about-details" id="about">
     <div className="container-inside">
     <div className="row">
       
          <h1>About Me</h1>

          <div className="col-lg-6 experience" data-aos="fade-right" data-aos-duration="1000">
          <h1>Experience</h1>
          <h4>March 2022 to Current</h4>
          <h5>Front End Developer @ Blockx IT Solutions LLP</h5>
          <p>
            I will be responsible for a Website developement and will be taking
            care of the Website and maintenance of the Hosted Website.
          </p>
          <h4>January 2019 to November 2021 </h4>
          <h5>Product Engineer @ SSKV Tech Builds Pvt Ltd, Tiruppur</h5>
          <p>
            I will be responsible for a particular sight and will be taking care
            of the Installation and maintenance of the ventilation system of
            that site.
          </p>
          <h4>March 2018 to December 2019</h4>
          <h5>Service Advisor @ Sri Sai hari Honda., Virudhunagar.</h5>
          <p>
            Recommended additional, useful services to customers, which helped
            to increase overall sales
          </p>
        </div>
        <div className="col-lg-6 experience" data-aos="fade-left" data-aos-duration="1000">
        <h1>Intro</h1>
         <p>I am a mechanical engineer who has enthusiastically transitioned into web development. My journey began with
self-learning on Guvi, where I acquired a solid foundation in web development. During my 1.6-year tenure at
Blockx IT Solutions LLP, I gained valuable practical experience in the field. My mechanical engineering
background, coupled with my web development skills, enables me to offer a unique perspective and creative
problem-solving abilities. I am committed to making meaningful contributions to the ever-evolving tech
industry and eager to continue growing in my web development career.
</p>
<br />
<p><SiGmail/> gokulmari96@gmail.com</p>
<p><FaMobile/> +91-7845536140</p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default About;
