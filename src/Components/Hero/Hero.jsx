import React from 'react'
import './Hero.css'
import profilePic from '../../assets/profile-pic.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profilePic} alt='Profile Picture' />
      <h1><span>I'm Christina Hollie,</span> a Frontend Developer and UX Designer based in Portland, OR</h1>
      <p> I'm a Full stack Javascript developer with experience working with React Native, Node.js, React.js, Express.js, MongoDB, HTML, CSS, Figma</p>
      <div className='hero-action'>
        <div className='hero-connect'>Let's Connect</div>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  )
}

export default Hero