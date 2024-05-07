import React from "react";
import Arrow from "../Images/right-arrow.png"
import thanks from "../Images/thanks.png";

import SwiperComponents from "./Swiper-components"

function ServicePage() {
    return (
        <div className="service-page">
            <div className="heading">
                <h1>Feeding india's hope:<br />
                    Explore our services, "share the love"</h1>
                <button>View Services<img src={Arrow} /></button>
            </div>
            <div className="carousel">
                <div className="carousel-message">
                    <div className='carousel-message-heading'>
                        <img src={thanks} />
                        <h3>Special<br />Message</h3>
                    </div>
                    <div>
                        <p>
                            Join us in making a difference! Explore our donation categories and contribute to creating a brighter future.<br /><br/> Your support matters.
                        </p>
                    </div>
                </div>
                <SwiperComponents />
            </div>

        </div>
    )
}

export default ServicePage