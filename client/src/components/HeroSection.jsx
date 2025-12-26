import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, ArrowRight } from "lucide-react";
import Button from "@mui/material/Button";
import NavLink from "./NavLink";
import { HeroWorks } from "./WorksData"; // import your HeroWorks array

const HeroSection = ({
  currentWork,
  setCurrentWork,
  isPlaying,
  setIsPlaying,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  // Safely get the current work, fallback to first item if undefined
  const work = HeroWorks[currentWork] || HeroWorks[0];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWork}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full"
          >
            {work.type === "video" ? (
              <video
                src={work.url}
                className="object-cover w-full h-full"
                autoPlay={isPlaying}
                loop
                muted
                controls={false}
              />
            ) : (
              <img
                src={work.url}
                alt={work.title}
                className="object-cover w-full h-full"
              />
            )}
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Bringing ideas to life through modelling and animation
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Bringing ideas to life through modelling. Passionate 3d artist
            specializing in modelling and motion graphics.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              className="bg-primary hover:bg-primary/90 text-black font-bold px-8 py-6 text-lg flex items-center gap-2 group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-[#FF9500]">View Work</span>
              <ArrowRight className="text-[#FF9500] transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outlined"
              className="border-white text-white hover:bg-white hover:text-black transition-colors px-8 py-6 text-lg"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink href="#contact">CONTACT ME</NavLink>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Pagination & Play/Pause */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
        {HeroWorks.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentWork ? "bg-primary" : "bg-white/50"
            }`}
            onClick={() => setCurrentWork(index)}
            whileHover={{ scale: 1.5 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
        {/* <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 ml-2"
          onClick={() => setIsPlaying(!isPlaying)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5" />
          )}
        </Button> */}
      </div>
    </section>
  );
};

export default HeroSection;
