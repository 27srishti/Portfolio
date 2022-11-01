import React from 'react'
import Contact from './Components/Contact'
import Hero from './Components/Hero'
import Nav from "./Components/Nav"
import Portfolio from './Components/Portfolio'
import Service from './Components/Service'
import Skills from './Components/Skills'
import Footer from './Components/Footer'

const Home = () => {
  return (
<section className=' overflow-x-hidden' id='Home' href="/Home" >
  
      <Nav/>
      <Hero/>
      <Service/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </section>
  )
}

export default Home
