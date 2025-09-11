import { motion } from "framer-motion";
import { X } from "lucide-react";
import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { videos } from "./WorksData.js";

const VideosSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    768: 2,
    480: 1,
  };

  return (
    <section className="relative py-20 bg-black text-white">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
        Featured Videos
      </h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4 px-6 md:px-20"
        columnClassName="flex flex-col gap-4"
      >
        {videos.map((video, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => setActiveVideo(video)}
          >
            <video
              src={video.url}
              muted
              playsInline
              className="w-full h-auto rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
              <p className="text-lg font-semibold">{video.title}</p>
            </div>
          </motion.div>
        ))}
      </Masonry>

      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-6xl"
            style={{ aspectRatio: activeVideo.aspect }}
          >
            <video
              src={activeVideo.url}
              autoPlay
              controls
              className="w-full h-full rounded-xl object-contain"
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white bg-black/50 hover:bg-black/70 rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default VideosSection;
