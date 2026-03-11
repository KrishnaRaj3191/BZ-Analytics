'use client';

import Image from "next/image";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface CardItem {
  title: string;
  img: string;
  desc: string;
}

const cards: CardItem[] = [
  { title: "Metaverse & Gaming", img: "/img1.jpg", desc: "Empowering Metaverse & Gaming with Innovative Solutions." },
  { title: "Energy & Manufacturing", img: "/img2.jpg", desc: "Optimizing Operations: Solutions for Energy & Manufacturing." },
  { title: "SDG", img: "/img3.jpg", desc: "Tech-Driven Sustainability: Achieving Goals with Innovation." },
  { title: "Healthcare", img: "/img4.jpg", desc: "Revolutionizing Healthcare: Better Patient Care through Innovation." },
  { title: "Textile", img: "/img5.jpg", desc: "Digital Transformation in Textile: Innovation-Led Progress." },
  { title: "Corporate", img: "/img6.jpg", desc: "Strategic Solutions for Corporate Success." },
  { title: "Advertising", img: "/img7.jpg", desc: "Elevating Brands: Creative Solutions for Advertising." },
  { title: "PSU", img: "/img8.jpg", desc: "Efficiency Redefined: Excellence in Public Sector Undertakings." },
  { title: "Finance", img: "/img9.jpg", desc: "Transforming Finance: Cutting-Edge Solutions." },
];

const SuccessStories: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full bg-white dark:bg-black py-10 md:py-20 lg:py-[100px] transition-colors duration-300">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 justify-items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-gray-100 dark:bg-[#1E1E1E] rounded-[20px] overflow-hidden 
                         w-full max-w-[400px] md:max-w-full min-h-[400px] md:min-h-[450px] flex flex-col cursor-pointer 
                         transition-all duration-300 hover:bg-white dark:hover:bg-[#252525] 
                         shadow-lg hover:shadow-2xl shadow-black/10"
            >
              
              {/* Image Section */}
              <div className="relative w-full aspect-[16/10] overflow-hidden shrink-0">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out 
                             translate-y-0 group-hover:-translate-y-8" 
                />
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 transition-transform duration-500 ease-out group-hover:-translate-y-6 bg-inherit">
                
                <div className="flex-1">
                  <h3 className="text-black dark:text-white text-lg sm:text-[22px] font-extrabold leading-tight mb-2 md:mb-3">
                    {card.title}
                  </h3>

                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-black/70 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 md:mt-6">
                  {/* Button */}
                  <button className="border border-black/10 dark:border-white bg-black text-white px-5 py-2.5 md:px-6 md:py-3 text-[10px] sm:text-xs 
                                     hover:bg-white hover:text-orange-500 font-bold cursor-pointer transition-all duration-300 
                                     uppercase tracking-wider">
                    Know More &gt;&gt;
                  </button>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-4 bg-inherit z-10" />
            </div>
          ))}
        </div>
      </div>

      {mounted && (
  <div className="fixed bottom-4 left-4 z-50">
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="group relative cursor-pointer border border-white dark:border-white hover:border-black
                 px-4 py-2 text-[14px] font-extrabold overflow-hidden
                 bg-black text-white transition-colors duration-500 shadow-lg"
    >
      <span 
        className="absolute top-1/2 left-1/2 w-[400%] h-[400%] bg-white 
                   -translate-x-1/2 -translate-y-1/2 rotate-45 
                   scale-0 group-hover:scale-100 
                   transition-transform duration-500 ease-out"
      />

      <span className="relative z-10 group-hover:text-orange-500 transition-colors duration-500">
        {resolvedTheme === 'dark' ? 'Light/Dark' : 'Light/Dark'}
      </span>
    </button>
  </div>
)}
    </section>
  );
};

export default SuccessStories;