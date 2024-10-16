import React from 'react'
import './Socials.css'
import linkedinIcon from '../../assets/linkedin-icon.png'
import githubIcon from '../../assets/github-icon.png'
import instaIcon from '../../assets/insta-icon.png'


const Socials = () => {
  return (
    <div className='socials'>
        <div className='socials-title'>
            <h1>My Socials</h1>
            <div className='social-icons'>
            <img className='social-icon' src={linkedinIcon} alt='' />
            <img className='social-icon' src={githubIcon} alt='' />
            <img className='social-icon' src={instaIcon} alt='' />
            </div>
        </div>
        <div className='socials-container'></div>
    </div>
  )
}

export default Socials