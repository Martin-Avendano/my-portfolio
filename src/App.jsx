import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion' // 1. Add these imports
import Preloader from './components/common/Preloader' // 2. We will create this next
import { SmoothScroll } from './components/common/SmoothScroll';
import NavBar from "./components/layout/NavBar";
import Hero from "./pages/Hero";
import About from './pages/About';
import Project from './pages/Project';
import Footer from './components/layout/footer';
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This timer controls when the website "wakes up"
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds matches the logo animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <SmoothScroll>
            <NavBar />
            <Hero />
            <About />
            <Project />
            <Footer />
          </SmoothScroll>
        </motion.div>
      )}
    </>
  )
}

export default App