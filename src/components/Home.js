/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./css/home.css"

import { FaLinkedin, FaYoutube, FaWhatsappSquare, FaGithubSquare } from 'react-icons/fa';
import {stackImg} from "../Data"
const Home = () => {
  return (
    <>
    <div className="container-fluid bg-img" id='home'>
<div className="container home">
  <div className="row ">
    <div className="col-lg-12 heading text-center">
    <h6 data-aos="fade-up" data-aos-duration="1000">Hello!</h6>
      <h6 data-aos="fade-up" data-aos-duration="1000">
      Welcome to my portfolio website!
      </h6>
      
      <h1 data-aos="fade-up" data-aos-duration="1000">
        I'm Gokulpradap
      </h1>
      <h3 data-aos="fade-up" data-aos-duration="1000">
        FRONT-END DEVELOPER
      </h3>
      <div className='stack_img'>
{
  stackImg.map(item=> <img data-aos="fade-up" data-aos-duration="1000" src={item.img} alt={item.alt}/>)  
}
      </div>
     
    </div>
    <div className="icons" >
      <a target="_blank"  href="https://www.linkedin.com/in/gokulpradap-marichamy-bbb529209" rel="noreferrer"><i><FaLinkedin/></i></a>
      <a target="_blank"  href="https://www.youtube.com/channel/UCh9sdrgGHAOuRAaonEHiO8g" rel="noreferrer"> <i><FaYoutube/></i></a>
      <a target="_blank"  href="https://wa.me/qr/LXVA2ZRND3CUM1" rel="noreferrer"><i><FaWhatsappSquare/></i></a>
      {/* <a target="_blank"  href="https://www.instagram.com/invites/contact/?i=gkv6dhll2kgs&utm_content=obmb3yx" rel="noreferrer"><i><FaInstagramSquare/></i></a> */}
      <a target="_blank"  href="https://github.com/Gokulpradap" rel="noreferrer"><i><FaGithubSquare/></i></a>      
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Home