import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { works } from "./WorksData";

const FeaturedWork = ({
  currentWork,
  setCurrentWork,
  isPlaying,
  setIsPlaying,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const work = works[currentWork] || works[0];

  // Auto-cycle images and work
  React.useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      const images = [work.raw, work.clay, work.url].filter(Boolean);

      setCurrentImageIndex((prev) => {
        if (prev + 1 < images.length) {
          return prev + 1; // next image
        } else {
          // finished images, go to next work
          setCurrentWork((prevWork) => (prevWork + 1) % works.length);
          return 0; // start first image of next work
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, currentWork, setCurrentWork, work]);

  const images = [work.raw, work.clay, work.url].filter(Boolean);

  const goToNextWork = () => {
    setCurrentWork((prev) => (prev + 1) % works.length);
    setCurrentImageIndex(0);
  };
  const goToPrevWork = () => {
    setCurrentWork((prev) => (prev - 1 + works.length) % works.length);
    setCurrentImageIndex(0);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[currentImageIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full"
          >
            {work.type === "video" ? (
              <video
                src={work.url}
                autoPlay
                muted
                loop
                className="object-cover w-full h-full"
              />
            ) : (
              <img
                src={images[currentImageIndex]}
                alt={`${work.title} - ${currentImageIndex + 1}`}
                className="object-cover w-full h-full"
              />
            )}
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Title at bottom-left */}
      <div className="absolute bottom-20 left-6 text-white">
        <AnimatePresence mode="wait">
          <motion.h2
            key={currentWork} // triggers animation every work change
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold"
          >
            {work.title}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
        {works.map((_, index) => (
          <motion.div
            role="button"
            tabIndex={0}
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentWork ? "bg-primary" : "bg-white/50"
            }`}
            onClick={() => {
              setCurrentWork(index);
              setCurrentImageIndex(0);
            }}
            whileHover={{ scale: 1.5 }}
          />
        ))}
        <button
          className="text-white hover:bg-white/10 rounded-full p-2 ml-2"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevWork}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-3 rounded-full z-10"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNextWork}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-3 rounded-full z-10"
      >
        <ArrowRight className="h-6 w-6" />
      </button>
    </section>
  );
};

export default FeaturedWork;
