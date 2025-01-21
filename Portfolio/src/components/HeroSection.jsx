import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Linkedin, Github } from 'lucide-react';

const DownloadButton = ({ isDark }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    
    // Direct download using window.location
    const link = document.createElement('a');
    link.href = 'files/cv.pdf';  // URL directly from public folder
    link.download = 'Mohammed_Alomar_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <motion.button
      onClick={handleDownload}
      disabled={isLoading}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full 
        transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
        ${isDark 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      whileHover={{ scale: isLoading ? 1 : 1.05 }}
      whileTap={{ scale: isLoading ? 1 : 0.95 }}
    >
      <Download size={20} className={isLoading ? 'animate-bounce' : ''} />
      <span>{isLoading ? 'Downloading...' : 'Download CV'}</span>
    </motion.button>
  );
};

const HeroSection = ({ isDark }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <motion.div
        className="z-10 text-center space-y-8 max-w-3xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Mohammed Alomar
        </h1>
        <p className={`text-2xl md:text-3xl ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Software Engineer
        </p>
        <div className="flex flex-col items-center gap-6">
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://www.linkedin.com/in/mohammad-al-omar-5b94421ab/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-full transition-colors ${
                isDark 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              <Linkedin size={24} className="text-white" />
            </motion.a>
            <motion.a
              href="https://github.com/mohdoalomar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-full transition-colors ${
                isDark 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            >
              <Github size={24} className="text-white" />
            </motion.a>
          </div>
          <DownloadButton isDark={isDark} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;