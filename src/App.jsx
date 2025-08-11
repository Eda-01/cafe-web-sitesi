import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import "./style.scss"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import kahveResim from './assets/kahve.jpeg'
import wifiResim from './assets/wifi.png'
import sicakAtmosferResim from './assets/sıcakatmosfer.jpeg'

const featuresData = [
  {
    title: "Özel Filtre Kahve",
    description: "Single-origin çekirdeklerle günlük taze demleme.",
    iconClass: "bi bi-cup-hot",
    img: kahveResim,
    alt: 'Özel Filtre Kahve',
  },
  {
    title: "Hızlı ve Ücretsiz WiFi",
    description: "Çalışmak ve sosyalleşmek için ideal bağlantı.",
    iconClass: "bi bi-wifi",
    img: wifiResim,
    alt: 'WiFi',
  },
  {
    title: "Sıcak ve Samimi Ortam",
    description: "Günün yorgunluğunu atabileceğiniz rahat bir atmosfer.",
    iconClass: "bi bi-emoji-smile",
    img: sicakAtmosferResim,
    alt: 'Sıcak Atmosfer',
  },
];

function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <Features items={featuresData} />
      <Footer />
    </>
  )
}

export default App
