import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Profile-box.css'
import Cancel from './x_icon.png'
import UserImg from './profile-img.jpg'
import DownArrow from './down_arrow_icon.png'
import RightArrow from './right_arrow_icon.png'


const ProfileBox = ({ id, setId }) => {

  const [service, setService] = useState(false);

  const toggleService = () => {
    setService(!service);
  }

  return (
    <div id={`profile-box${id ? 'active' : ''}`}>
      <div id="upper-box">
        <img src={UserImg} />
        <img onClick={() => setId(!id)} className='cancel' src={Cancel} />
        <div className='userName'>
          <h2>Your Name</h2>
          <h5>@Username</h5>
        </div>
      </div>
      <div id="middle-box">
        <ul>
          <li>Home</li>
          <li onClick={toggleService}>Services<img src={DownArrow} /></li>
          {service && (
            <ul className='inside-profile-box-service'>
              <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/donate">Donate</Link></li>
              <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/receive">Recieve</Link></li>
            </ul>)}
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Switch Account<img src={RightArrow} /></li>
          <li>Language:British English<img src={DownArrow} /></li>
          <li>Location:India<img src={DownArrow} /></li>
          <li>Settings</li>
        </ul>
        <ul>
          <li>Help</li>
          <li>Send Feedback</li>
        </ul>
      </div>
      <div id="lower-box">
        <Link to='/login'><button>Register</button></Link>
        <Link to='/login'><button>Sign In</button></Link>
      </div>
    </div>
  )
}

export default ProfileBox