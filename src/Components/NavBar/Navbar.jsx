import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />
      <ul className='nav-menu' >
        <ul>Home</ul>
        <ul>About Me</ul>
        <ul>Projects</ul>
        <ul>Socials</ul>
        <ul>Contact</ul>
      </ul>
      <div className='nav-connect'>Let's Connect</div>
    </div>
  )
}

export default Navbar