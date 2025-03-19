import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="py-8 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold mb-4 md:mb-0"
          >
            ANIMATOR
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} Animator Portfolio. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
