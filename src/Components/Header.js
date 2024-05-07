import React, { useState } from "react"
import Logo from "../Images/Food-logo.png"
import Cart_Logo from "../Images/cart_shopping_icon.png"
import Profile from "../Images/profile-icon.png"
import ProfileBox from "../Pages/Profile-box/Profile-box"
import { Link } from "react-router-dom"
import Cart from '../Pages/Cart/Cart'
import { useCart } from '../Pages/Cart/CartContext';



function Header() {
    const [service, setService] = useState(false);
    const { cart } = useCart();


    const toggleService = () => {
        setService(!service);
    }

    const [id, setId] = useState(false);
    const [cartDisplay, setCartDisplay] = useState(false);


    return (
        <div>
            <div className="header-wrapper">
                <header>
                    <div className="logo">
                        <img src={Logo} />
                        <h1>TechSahaya Annadaan</h1>
                    </div>
                    <nav>
                        <ul>
                            <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">Home</Link></li>
                            <li onClick={toggleService} className="li-service">Service {service && (<div className="service">
                                <div className="triangle">
                                    <div className="arrow-up"></div>
                                </div>
                                <ul>
                                    <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/donate">Donate</Link></li>
                                    <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/receive">Recieve</Link></li>
                                </ul>
                            </div>
                            )}</li>
                            <li>About Us</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                    <div className="user-auth">
                        <button onClick={() => setCartDisplay(!cartDisplay)}><img src={Cart_Logo} /><span>{cart.length}</span></button>
                        <button className="profile"
                            onClick={() => setId(!id)}><img src={Profile} />
                        </button>
                    </div>
                </header>
            </div>
            <ProfileBox
                id={id}
                setId={setId} />

            {cartDisplay && <Cart />}

        </div>
    )
}

export default Header
