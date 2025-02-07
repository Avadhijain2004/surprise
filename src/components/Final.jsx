import { motion } from "framer-motion";

export default function Final() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-300 to-purple-400 text-white text-center p-6">
      {/* Animated heart */}
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="text-6xl"
      >
        ❤️
      </motion.div>
      
      {/* Message */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="mt-6 bg-white bg-opacity-30 backdrop-blur-lg p-6 rounded-3xl shadow-xl"
      >
        <h1 className="text-4xl font-bold text-pink-700 drop-shadow-lg">
          Thank You for Being in My Life! 🌸
        </h1>
        <p className="mt-4 text-lg text-gray-800 max-w-lg">
          Your presence fills my life with joy and happiness. I am truly grateful 
          to have a special friend like you. You make every moment beautiful! 💖
        </p>
      </motion.div>
    </div>
  );
}
