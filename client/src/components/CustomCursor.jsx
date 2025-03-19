// components/CustomCursor.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorSize, setCursorSize] = useState({ width: 32, height: 32 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === "BUTTON") {
        const rect = e.target.getBoundingClientRect();
        setCursorSize({ width: rect.width + 20, height: rect.height + 20 });
        setCursorVariant("hover");
      }
    };

    const handleMouseOut = (e) => {
      if (e.relatedTarget && e.relatedTarget.tagName !== "BUTTON") {
        setCursorSize({ width: 32, height: 32 });
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: cursorPosition.x - cursorSize.width / 2,
      y: cursorPosition.y - cursorSize.height / 2,
      width: cursorSize.width,
      height: cursorSize.height,
    },
    hover: {
      x: cursorPosition.x - cursorSize.width / 2,
      y: cursorPosition.y - cursorSize.height / 2,
      width: cursorSize.width,
      height: cursorSize.height,
    },
  };

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 rounded-full border-2 border-primary pointer-events-none z-50 hidden md:block"
      variants={cursorVariants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
}
