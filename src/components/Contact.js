import React from "react";
import "./css/contact.css";
import gokul from "../Assets/gokul.png"
const Contact = () => {
  return (
    <>
    <div className="container-fluid contact" id="contact" >
      <div className="container">
        <div className="row">
          <h1>Contact Me!</h1>
          <div className="col-lg-6 text-center mt-5">
            <img src={gokul} alt="gokulimage" />
          </div>
          <div className="col-lg-6 mt-5">
            <form className="mt-5">
              <div class="mb-4">
                <label class="form-label">
                  Name
                </label>
                <input
                  type="name"
                  class="form-control"   
                  placeholder="Enter your Name*"               
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-4">
                <label class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email*"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
              <label class="form-label">
                  Message
                </label>
                <textarea                  
                  class="form-control"
                  placeholder="Enter your message*"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        
      </div>      
    </div>
    <small class="text-center">Copyright &copy; 2022, All Rights Gokulpradap.M</small>
    </>
  );
};

export default Contact;
