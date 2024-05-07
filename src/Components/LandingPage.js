import React from "react";
import Arrow from "../Images/right-arrow.png"


function LandingPage() {
    return (
        <main>
            <div className="background">
                <div className="homepage-info">
                    <h1><span>Savor every bite</span><br /><span>Share the delight</span></h1>
                    <p>Spreading Joy, One Plate at a <br />Time in India!</p>
                    <button>Get Started<img src={Arrow} /></button>
                </div>
            </div>

        </main>

    )
}

export default LandingPage