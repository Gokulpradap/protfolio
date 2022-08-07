import React from 'react'
import "./css/home.css"
import html from "../Assets/html.png"
const Home = () => {
  return (
    <div className="container-fluid bg-img" id='home'>
<div className="container home">
  <div className="row ">
    <div className="col-lg-12 heading text-center" data-aos="fade-up" data-aos-duration='1500'>
    <h6>Hello!</h6>
      <h6>
      Welcome to my portfolio website!
      </h6>
      
      <h1>
        I'm Gokulpradap
      </h1>
      <h3>
        FRONT-END DEVELOPER
      </h3>
      <a href={html} download={html}>Download Resume</a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home