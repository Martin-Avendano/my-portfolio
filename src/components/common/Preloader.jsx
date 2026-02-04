import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      // Changed bg-black to bg-white
      className="fixed inset-0 z-[999] flex items-center justify-center bg-white"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.img
        src="/images/Logo.png" // Ensure this logo has color (like the Vite purple/yellow)
        alt="Logo"
        className="w-32 h-32"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ 
          scale: [0.5, 1, 1.2, 60], // Cinematic zoom through the camera
          opacity: [0, 1, 1, 0]      // Fade in, hold, then fade out during the big zoom
        }}
        transition={{ 
          duration: 2.2, 
          times: [0, 0.2, 0.8, 1], 
          ease: "circIn" // Makes the final "blast" feel faster
        }}
      />
    </motion.div>
  );
};

export default Preloader;