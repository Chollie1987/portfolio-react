import React from 'react'
import './Services.css'
import themePattern from '../../assets/theme-pattern.png'

const Services = () => {
  return (
    <div className='services'>
        <div className='services-title'>
            <h1>My Services</h1>
            <img src={themePattern} alt='' />
        </div>
        <div className='services-container'></div>
    </div>
  )
}

export default Services