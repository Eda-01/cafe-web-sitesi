import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import "./style.scss"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'




function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  )
}

export default App
