import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import openMenu from '../../assets/open-menu.png'
// import closeMenu from '../../assets/close-menu.png'

const Navbar = () => {


  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt="Logo" />
      {/* <img src={openMenu} alt='' className='nav.mobile-open' /> */}
      <ul className='nav-menu' >
        {/* <img className='nav-mobile-close' src={closeMenu} alt=''/> */}
        <ul><AnchorLink className='anchor-link' href='#home'><p>Home</p></AnchorLink></ul>
        <ul><AnchorLink className='anchor-link' offset={50} href='#about'><p>About Me</p></AnchorLink></ul>
        <ul><AnchorLink className='anchor-link' offset={50} href='#projects'><p>Projects</p></AnchorLink></ul>
        <ul><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink></ul>
        <ul><AnchorLink className='anchor-link' offset={50} href='#socials'><p>Socials</p></AnchorLink></ul>
      </ul>
      <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#socials'>Let's Connect</AnchorLink></div>
    </div>
  )
}

export default Navbar