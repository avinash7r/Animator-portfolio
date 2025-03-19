import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import WorkSection from "../components/WorkSection";

const Home = () => {
  const [currentWork, setCurrentWork] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const works = [
    {
      id: 1,
      title: "Cosmic Journey",
      description: "3D animation exploring space and time",
      image: "/placeholder.jpg?height=600&width=800",
      category: "3D Animation",
    },
    {
      id: 2,
      title: "Character Reel",
      description: "Character animation showcase",
      image: "/placeholder.jpg?height=600&width=800",
      category: "Character Animation",
    },
    {
      id: 3,
      title: "Motion Graphics",
      description: "Corporate identity animations",
      image: "/placeholder.jpg?height=600&width=800",
      category: "Motion Graphics",
    },
  ];

  const handleMouseEnter = () => {};

  const handleMouseLeave = () => {
    // Your mouse leave logic
  };

  return (
    <div>
      <Navbar />
      <HeroSection
        currentWork={currentWork}
        setCurrentWork={setCurrentWork}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        works={works}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <WorkSection
        works={works}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <MobileMenu />
      <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
