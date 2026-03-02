"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const ringX = useSpring(0, springConfig);
  const ringY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [ringX, ringY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <div
        className="fixed h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b4513]"
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      />

      <motion.div
        className="fixed h-[25px] w-[25px] rounded-full border-2 border-[#ff8c00]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}