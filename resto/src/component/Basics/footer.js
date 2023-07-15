import React from 'react';
// import {   FcGoogle} from "@react-icons/all-files/fa/FcGoogle";
import { AiFillGoogleCircle, AiFillInstagram, AiFillMail, AiFillFacebook} from "react-icons/ai";


const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='contact-details'>
            <h2>Contact us:</h2>
            
            <p>Phone no: +91 8149635001</p>
            <a href='#'>Email: newresto@09</a>
            </div>

            <div className="special">
              <h2 className='footer-title'>Today's special</h2>
              <div className="footer-content">
                <p>Pohe</p>
                <p>Butter Paneer</p>
                <p>Biryani</p>
                <p>Salad</p>
                <p>Samosa</p>
              </div>
            </div>

            <div className="popular">
              <h2 className='footer-title'>Popular Dishes</h2>
              <div className="footer-content">
                <p>Pohe</p>
                <p>Butter Paneer</p>
                <p>Biryani</p>
                <p>Salad</p>
                <p>Samosa</p>
              </div>
            </div>
            
            <div class="social-links"> 
              <AiFillGoogleCircle/>
              <AiFillInstagram/>
              <AiFillMail/>
              <AiFillFacebook/>
            </div>
        </div>
      
    </footer>
  );
};

export default Footer;