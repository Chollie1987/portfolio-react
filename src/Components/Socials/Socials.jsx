import React from 'react'
import './Socials.css'
import linkedinIcon from '../../assets/linkedin-icon.png'
import githubIcon from '../../assets/github-icon.png'
import instaIcon from '../../assets/insta-icon.png'
import copyrightIcon from '../../assets/copyright-icon.png'


const Socials = () => {
  return (
    <div id='socials' className='socials'>
        <div className='socials-title'>
            <div className='social-icons'>
            <img className='copyright-icon' src={copyrightIcon} alt='' /><h5>2024 Christina Hollie. All Rights Reserved</h5>
          <a href='https://www.linkedin.com/in/christina-hollie-3a32981b2/' target="_blank" rel="noopener noreferrer">
            <img className='social-icon' src={linkedinIcon} alt='' />
          </a>
          <a href='https://github.com/Chollie1987' target="_blank" rel="noopener noreferrer">
            <img className='social-icon' src={githubIcon} alt='' />
          </a>
          <a href='https://www.instagram.com/christinahollie7' target="_blank" rel="noopener noreferrer">
            <img className='social-icon' src={instaIcon} alt='' />
          </a>
            </div>
        </div>
        <div className='socials-container'></div>
    </div>
  )
}

export default Socials