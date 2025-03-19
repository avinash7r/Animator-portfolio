import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-scroll";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? "0%" : "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 right-0 w-64 h-full bg-gray-900 text-white shadow-lg z-50 p-6 flex flex-col gap-6"
    >
      <button className="self-end text-gray-300 hover:text-white" onClick={onClose}>
        <X size={24} />
      </button>

      <nav className="flex flex-col gap-4">
        <Link
          to="work"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-gray-400"
          onClick={onClose}
        >
          Work
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-gray-400"
          onClick={onClose}
        >
          About
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-gray-400"
          onClick={onClose}
        >
          Contact
        </Link>
      </nav>
    </motion.div>
  );
};

export default MobileMenu;
