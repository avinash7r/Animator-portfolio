import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="Navbar">
        <header className="fixed top-0 left-0 w-full z-40 px-6 py-4 flex justify-between items-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            3D ARTISRT
          </motion.div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded hover:bg-white/10"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex gap-8 items-center"
          >
            <NavLink href="#work">
              <button>Work</button>
            </NavLink>
            <NavLink href="#about">
              <button>About</button>
            </NavLink>
            <NavLink href="#contact">
              <button>Contact</button>
            </NavLink>
            <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black">
              Resume
            </button>
          </motion.nav>
        </header>

        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </>
  );
};

export default Navbar;
