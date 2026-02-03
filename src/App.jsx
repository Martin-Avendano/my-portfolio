import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { SmoothScroll } from './components/common/SmoothScroll';
import NavBar from "./components/layout/NavBar";
import Hero from "./pages/Hero";
import About from './pages/About';
import Project from './pages/Project';
import Footer from './components/layout/footer';

import './App.css'


function App() {
  return (
    <SmoothScroll>
      <NavBar />
      <Hero />
      <About />
      <Project />
      <Footer />
    </SmoothScroll>
  )
}

export default App
