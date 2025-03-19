import { motion } from "framer-motion";

const WorkSection = ({ works, handleMouseEnter, handleMouseLeave }) => {
  return (
    <section id="work" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured <span className="text-primary text-[#FF9500]">Work</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-primary text-sm font-medium mb-2">
                  {work.category}
                </span>
                <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                <p className="text-gray-300">{work.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <button className="border-white text-white hover:bg-[#FF9500] hover:text-black transition-colors duration-300 ease-in-out transform hover:scale-105 px-4 py-2 text-lg rounded">
            View All Projects - >
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
