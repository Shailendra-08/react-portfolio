import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navabar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/About/About'
import Technology from './components/technology/Technology'
import Project from './components/projectitem/Project'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Technology />
    <Project />
    <Contact />
    <Footer />
    </>
 
  )
}

export default App
