import React from 'react'
import './About.css'
import themePattern from '../../assets/theme-pattern.png'
import profilePic from '../../assets/profile-pic.jpg'
const About = () => {
  return (
    <div className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img style={{width:'175px'}} src={themePattern} alt='themed image' />
        </div>
        <div className='about-section'>
            <div className='about-left'>
                <img className='about-pic' src={profilePic} alt='profile picture' />
            </div>
            <div className='about-right'>
                <div className='about-para'>
                      <p>I'm a full-stack JavaScript developer passionate about building dynamic, user-focused applications using technologies like React, Node.js, MongoDB, React Native, and Express.js. I graduated from Code Fellows, an accelerated program, in December 2023, and discovered that I really enjoy collaborating within a team environment.</p>
                      <p> I'm all about developing cutting-edge interactive applications that are both visually appealing and user-friendly. I believe my unique perspective would be an asset to any company. I'm passionate about using my coding skills to support underserved communities and inspire other women and people of color to see their place in the tech industry. I'm eager to join an amazing company that shares my values, where I can further develop my creativity and skills.</p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'><p>HTML & CSS</p><hr style=              {{width:'50%'}}/></div>
                      <div className='about-skill'><p>React JS</p><hr style={{ width: '70%' }} /></div>
                      <div className='about-skill'><p>JavaScript</p><hr style={{ width: '60%' }} /></div>
                      <div className='about-skill'><p>Express JS</p><hr style={{ width: '50%' }} /></div>
                      <div className='about-skill'><p>Figma</p><hr style={{ width: '70%' }} /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About