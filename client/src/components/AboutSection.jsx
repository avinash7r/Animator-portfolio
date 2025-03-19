import { motion } from "framer-motion"
import Button from "@mui/material/Button";
import { ArrowRight } from "lucide-react"

const AboutSection = ({ handleMouseEnter, handleMouseLeave }) => {
  return (
    <section id="about" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-lg">
              <img
                src="imade-bike.jpg?height=600&width=600"
                alt="Animator portrait"
                className="object-cover w-full h-full"
              />
            </div>
            {/* <motion.div
              className="absolute -bottom-6 -right-6 bg-primary text-black p-4 rounded-lg font-bold text-xl text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              10+ Years Experience
            </motion.div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary text-[#FF9500]">Me</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              I'm a passionate animator with over 10 years of experience creating compelling visual stories through
              animation. My work spans from character animation to motion graphics and 3D visualization.
            </p>
            <p className="text-xl text-gray-300 mb-8">
              I've collaborated with leading studios and brands to bring their ideas to life, always focusing on
              creating memorable and impactful animations that connect with audiences.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-primary font-bold text-xl mb-3 text-[#FF9500]">Skills</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>3D Animation</li>
                  <li>Character Design</li>
                  <li>Motion Graphics</li>
                  <li>Storyboarding</li>
                </ul>
              </div>
              <div>
                <h3 className="text-primary font-bold text-xl mb-3 text-[#FF9500]">Software</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Maya</li>
                  <li>Blender</li>
                  <li>After Effects</li>
                  <li>Cinema 4D</li>
                </ul>
              </div>
            </div>

            <Button
              className="bg-primary hover:bg-primary/90 text-black font-bold px-8 py-6 text-lg flex items-center gap-2 group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Download Resume
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
