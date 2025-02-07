import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Surprise() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowText(true), 2000);
  }, []);

  return (
    <>
    <div className="relative min-h-screen flex items-center justify-center bg-pink-200 overflow-hidden">
      {/* Falling petals */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-red-500 text-3xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: "100vh", rotate: 360 }}
          transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 2 }}
          style={{ left: `${Math.random() * 100}vw` }}
        >
          🌹
        </motion.div>
      ))}

      {/* Center text */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center p-6 bg-white bg-opacity-30 backdrop-blur-lg rounded-3xl shadow-xl"
        >
          <h1 className="text-4xl font-bold text-pink-600 drop-shadow-lg">
            Happy Rose Day to My Special Friend! 🌹
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            You are as special as a beautiful rose, bringing joy and warmth into my life.
            May your days be filled with happiness, love, and endless smiles! 💖
          </p>
          <Link to='/final'>
          <button className="rounded-full bg-pink-700 text-white p-4 mt-10 font-semibold  hover:bg-pink-400">
            Final Click
          </button>
          </Link>
        </motion.div>
        
      )}
      
      
    </div>
    
  
  </>
  );
}

