import React from 'react'
import './Hero.css'
import profilePic from '../../assets/profile-pic.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profilePic} alt='Profile Picture' />
      <h1><span>I'm Christina Hollie,</span> a Frontend Developer and UX Designer based in Portland, OR</h1>
      <p> I'm a Full stack Javascript developer with experience working with React Native, Node.js, React.js, Express.js, MongoDB, HTML, CSS, Figma</p>
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#socials'>Let's Connect</AnchorLink></div>
      </div>
    </div>
  )
}

export default Hero