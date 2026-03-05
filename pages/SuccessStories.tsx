'use client';

import Image from "next/image";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const cards = [
  { title: "Metaverse & Gaming", img: "/img1.jpg", desc: "Empowering Metaverse & Gaming with Innovative Solutions." },
  { title: "Energy & Manufacturing", img: "/img2.jpg", desc: "Optimizing Operations : Solutions for Energy & Manufacturing." },
  { title: "SDG", img: "/img3.jpg", desc: "Tech-Driven Sustainability : Achieving Goals with Innovation." },
  { title: "Healthcare", img: "/img4.jpg", desc: "Revolutionizing Healthcare : Better Patient Care through Innovation." },
  { title: "Textile", img: "/img5.jpg", desc: "Digital Transformation in Textile : Innovation-Led Progress." },
  { title: "Corporate", img: "/img6.jpg", desc: "Strategic Solutions for Corporate Success." },
  { title: "Advertising", img: "/img7.jpg", desc: "Elevating Brands : Creative Solutions for Advertising." },
  { title: "PSU", img: "/img8.jpg", desc: "Efficiency Redefined : Excellence in Public Sector Undertakings." },
  { title: "Finance", img: "/img9.jpg", desc: "Transforming Finance : Cutting-Edge Solutions." },
];

const SuccessStories = () => {

  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full bg-white dark:bg-black py-12 md:py-20 lg:py-[120px] transition-colors duration-300">
      <div className="max-w-[1518px] mx-auto px-4 sm:px-8 md:px-[60px] lg:px-[175px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[40px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-gray-100 dark:bg-[#1E1E1E] rounded-[20px] overflow-hidden 
              h-[450px] sm:h-[500px] flex flex-col cursor-pointer 
              transition-all duration-300 hover:bg-white dark:hover:bg-[#252525] shadow-2xl shadow-black/40"
            >
              
              {/* Image */}
              <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden shrink-0">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between transition-transform duration-500 ease-out group-hover:-translate-y-8 bg-inherit">
                
                <div>
                  <h3 className="text-black dark:text-white text-xl sm:text-[24px] font-semibold leading-tight">
                    {card.title}
                  </h3>

                  <div className="mt-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p className="text-black dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Button */}
                <div className="pt-4">
                  <button className="border border-white/40 bg-black text-white px-5 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm 
                                     hover:bg-white hover:text-orange-500 font-bold cursor-pointer hover:border-black transition-all duration-300">
                    Know More &gt;&gt;
                  </button>
                </div>

              </div>

              <div className="absolute inset-x-0 bottom-0 h-2 bg-inherit z-10" />
            </div>
          ))}
        </div>
      </div>

      {/* Theme Button */}
      <div className="fixed bottom-12 left-5 z-50">
        <div
          onClick={() =>
            mounted && setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
          }
          className="cursor-pointer border bg-white dark:bg-black border-black/50 dark:border-gray-400/40
          px-5 py-2.5 text-[10px] font-bold tracking-[0.2em] rounded-4xl uppercase 
          text-black dark:text-white
          transition-all hover:bg-black hover:text-white 
          dark:hover:bg-white dark:hover:text-black"
        >
          {mounted && resolvedTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </div>
      </div>

    </section>
  );
};

export default SuccessStories;