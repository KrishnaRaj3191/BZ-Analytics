"use client";
import { motion } from "framer-motion";

const Entry = () => {
  return (
    <section className="relative w-full h-[380px] sm:h-[450px] md:h-[550px] lg:h-[60vh] flex items-center justify-center overflow-hidden bg-[#1e1e1e]">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-[url('/entry.jpeg')] bg-top bg-no-repeat bg-cover opacity-60"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

      {/* Bottom black fading overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[50%]  via-black/80 to-transparent z-[1]"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col h-full justify-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}           
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-start pt-12 sm:pt-16 md:pt-32 max-w-full sm:max-w-3xl"
        >
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-white/90 text-sm sm:text-[17px] md:text-lg font-semibold tracking-wide mb-2">
            <span className="hover:text-white cursor-pointer transition-colors">Home</span>
            <span className="text-white/80 font-bold mb-1">.</span>
            <span className="text-white hover:text-orange-400 cursor-pointer">Success Stories</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[70px] font-bold tracking-tight leading-snug sm:leading-tight md:leading-tight">
            Success Stories
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Entry;