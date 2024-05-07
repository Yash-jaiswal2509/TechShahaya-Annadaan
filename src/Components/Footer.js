import React from 'react'
import Instagram from '../Images/instagram_icon.png'
import Facebook from '../Images/facebook_logo_icon.png'
import Twitter from '../Images/twitter_logo_icon.png'
import Linkedin from '../Images/linkedin_social_icon.png'
const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div className="footer-name">
                <ul>
                    <li><h1>TechSahaya Annadaan</h1></li>
                    <li>All rights reserved</li>
                </ul>
            </div>
            <div className="footer-about-us">
                <ul>
                    <li><h2>About Us</h2></li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Articles</li>
                </ul>
            </div>
            <div className="footer-support">
            <ul>
                    <li><h2>Support</h2></li>
                    <li>Developers</li>
                    <li>Community</li>
                    <li>Reports</li>
                    <li>Documentation</li>
                </ul>
            </div>
            <div className="footer-contact-us">
            <ul>
                    <li><h2>Contact Us</h2></li>
                    <li>FAQ</li>
                    <li>Privacy Policy</li>
                    <li>Copyrights</li>
                    <li>Terms and conditions</li>
                </ul>
            </div>
        </div>

        <div className="social-links">
            <img src={Facebook}  />
            <img src={Instagram}  />
            <img src={Linkedin}  />
            <img src={Twitter}  />
        </div>
    </footer>
  )
}

export default Footer