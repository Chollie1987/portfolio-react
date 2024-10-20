import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Socials from './Components/Socials/Socials'
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Projects'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Socials/>
  

    </div>
  )
}


export default App
