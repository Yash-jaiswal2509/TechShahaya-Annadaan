// AboutUsContact.js
import React from 'react';
import FoodTruck from '../Images/donating-hands.jpg'
import Arrow2 from "../Images/right-arrow-2.png"


const AboutUs = () => {
    return (
        <div className="about-us-container">
            <section className="about-us">
                <div className="info">
                    <h1>About Us</h1>
                    <h2>Welcome to TechSahaya Annadaan</h2>
                    <ul>
                        <li>
                            We are on a mission to build a community where no one goes hungry and everyone is nourished, not just in body, but in spirit.
                        </li>
                        <li>
                            Our mission is to connect those with surplus meals to individuals and families in need.
                        </li>
                        <li>
                            Every donation, whether it's a single meal or more, contributes to building a stronger, healthier, and more connected community.
                        </li>
                        <li>
                            Join us in the journey of making a difference, one meal at a time.
                        </li>
                    </ul>
                    <div>
                        <button>Learn More<img src={Arrow2} /></button>
                    </div>
                </div>
                <div className="about-us-image">
                    <img src={FoodTruck} />
                </div>
            </section>
        </div>
    )
}

export default AboutUs


