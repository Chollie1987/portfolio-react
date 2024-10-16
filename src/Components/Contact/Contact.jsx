import React from 'react'
import './Contact.css'
import themePattern from '../../assets/theme-pattern.png'
import mailIcon from '../../assets/mail-icon.png'
import locationIcon from '../../assets/location-icon.png'


const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
            <img src={themePattern} alt='' />
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's chat</h1>
                <p>I'm currently available to take on new projects, so feel free to reach out. I would love to work with you!</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                          <img src={locationIcon} alt='' /><p>OR, United States</p>
                      </div>
                      <div className='contact-detail'>
                          <img src={mailIcon} alt='' /><p>christinahollie7@gmail.com</p>
                      </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact