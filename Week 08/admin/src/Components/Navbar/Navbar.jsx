import React from 'react'
import './Navbar.css'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1 className="nav-logo">Apna Store</h1>
        <img src={navProfile} alt="" className='nav-profile' />
    </div>
  )
}

export default Navbar
