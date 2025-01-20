import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Linkedin, Github } from 'lucide-react';


const DownloadButton = () => {
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
      className={`inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full 
        hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
      whileHover={{ scale: isLoading ? 1 : 1.05 }}
      whileTap={{ scale: isLoading ? 1 : 0.95 }}
    >
      <Download size={20} className={isLoading ? 'animate-bounce' : ''} />
      <span>{isLoading ? 'Downloading...' : 'Download CV'}</span>
    </motion.button>
  );
};


// Updated section to include the download button
const HeroSection = () => {
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
        <p className="text-2xl md:text-3xl text-gray-300">
          Software Engineer
        </p>
        <div className="flex flex-col items-center gap-6">
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://www.linkedin.com/in/mohammad-al-omar-5b94421ab/"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/mohdoalomar"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
            >
              <Github size={24} />
            </motion.a>
          </div>
          <DownloadButton />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;