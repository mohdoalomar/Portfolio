import React, { useState, useEffect, useCallback } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectSlider = ({ projects, isDark }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  }, [projects.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  }, [projects.length]);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(handleNext, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, handleNext]);

  const handleDragEnd = (_, info) => {
    const swipeThreshold = 50;
    if (Math.abs(info.offset.x) > swipeThreshold) {
      if (info.offset.x > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  return (
    <div 
      className="relative w-full overflow-hidden h-[24rem] sm:h-[20rem]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Arrows - Hidden on Mobile */}
      <button
        onClick={handlePrev}
        className={`hidden sm:block absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full ${
          isDark ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
        } hover:bg-blue-400 hover:text-white transition-colors shadow-lg`}
        aria-label="Previous project"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button
        onClick={handleNext}
        className={`hidden sm:block absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full ${
          isDark ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
        } hover:bg-blue-400 hover:text-white transition-colors shadow-lg`}
        aria-label="Next project"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={handleDragEnd}
            custom={direction}
            variants={{
              enter: (direction) => ({
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
              }),
              center: {
                zIndex: 1,
                x: 0,
                opacity: 1
              },
              exit: (direction) => ({
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
              })
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full h-full flex justify-center items-center px-4"
          >
            <div
              className={`w-full max-w-xl p-6 rounded-xl border transition-all duration-300 ${
                isDark 
                  ? "bg-gray-900/50 border-gray-800" 
                  : "bg-white/50 border-gray-200"
              }`}
            >
              <div className={`h-1 bg-gradient-to-r ${projects[currentIndex].gradient} mb-4 rounded-t-xl`} />
              
              <div className="h-full flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-3">
                  {projects[currentIndex].title}
                </h3>
                
                <p className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm sm:text-base mb-4 flex-grow line-clamp-4`}>
                  {projects[currentIndex].description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {projects[currentIndex].tech.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs sm:text-sm px-2 py-0.5 rounded-full ${
                          isDark
                            ? "bg-gray-800 text-gray-300"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {projects[currentIndex].url && (
                    <motion.a
                      href={projects[currentIndex].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300"
                      whileHover={{ x: 5 }}
                    >
                      Visit Site <ExternalLink size={14} />
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-blue-400 w-4'
                : 'bg-gray-400 hover:bg-blue-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;