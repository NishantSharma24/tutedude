import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo.png'
import profile_logo from './images/profile-logo.png'
import './Navbar.css'


export default function Navbar() {
  return (
    <div className='container'>
      <img src={logo} alt="logo"  className='logo'/>
      <div className="links">
        <Link to="*">My Assignment</Link>
        <Link to="*">Chat with Mentor</Link>
        <div className="profile">
          <img src={profile_logo} alt="profile-logo" className="profile-logo" />
          <p>ProfileName</p>
          <select>
            <option></option>
          </select>
        </div>
      </div>
    </div>
  )
}
