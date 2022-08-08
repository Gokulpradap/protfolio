/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./css/home.css"
import resume from "../Assets/My Resume.pdf"
import { FaLinkedin, FaYoutube, FaWhatsappSquare, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

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
      <a href={resume} download={resume}>Download Resume</a>
    </div>
    <div className="icons" >
      <a target="_blank" data-aos="fade-right"data-aos-duration='3000' href="https://www.linkedin.com/in/gokulpradap-marichamy-bbb529209" rel="noreferrer"><i><FaLinkedin/></i></a>
      <a target="_blank" data-aos="fade-right"data-aos-duration='3000' href="https://www.youtube.com/channel/UCh9sdrgGHAOuRAaonEHiO8g" rel="noreferrer"> <i><FaYoutube/></i></a>
      <a target="_blank" data-aos="fade-up"data-aos-duration='3000' href="https://wa.me/qr/LXVA2ZRND3CUM1" rel="noreferrer"><i><FaWhatsappSquare/></i></a>
      <a target="_blank" data-aos="fade-left"data-aos-duration='3000' href="https://www.facebook.com/gokul.pradap" rel="noreferrer"><i><FaFacebookSquare/></i></a>
      <a target="_blank" data-aos="fade-left"data-aos-duration='3000' href="https://www.instagram.com/invites/contact/?i=gkv6dhll2kgs&utm_content=obmb3yx" rel="noreferrer"><i><FaInstagramSquare/></i></a>
      
     
      
      
      
    </div>
  </div>
</div>
    </div>
  )
}

export default Home