"use client";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[35vh] md:h-[55vh] lg:h-[60vh] flex items-center overflow-hidden bg-black">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/entry.jpeg')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >

          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-white/80 text-sm md:text-base font-medium mb-3">
            <span className="hover:text-white transition-colors cursor-pointer">
              Home
            </span>
            <span className="text-white/60">.</span>
            <span className="text-white">Success Stories</span>
          </div>

          {/* Heading */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Success Stories
          </h1>

        </motion.div>
      </div>
    </section>
  );
}