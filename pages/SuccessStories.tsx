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
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-gray-100 dark:bg-[#1E1E1E] rounded-[20px] overflow-hidden 
                         min-h-[380px] md:min-h-[450px] flex flex-col cursor-pointer 
                         transition-all duration-300 hover:bg-white dark:hover:bg-[#252525] 
                         shadow-lg hover:shadow-2xl shadow-black/20"
            >
              
              <div className="relative w-full aspect-[16/9] md:aspect-[5/3] overflow-hidden shrink-0">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out 
                             -bottom-10 top-0
                             group-hover:-translate-y-10" 
                />
              </div>

              <div className="p-5 sm:p-8 flex flex-col flex-1 transition-transform duration-500 ease-out group-hover:-translate-y-8 bg-inherit">
                
                <div className="flex-1">
                  <h3 className="text-black dark:text-white text-lg sm:text-[22px] font-bold leading-tight mb-2 md:mb-3">
                    {card.title}
                  </h3>

                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-black/70 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 md:line-clamp-4">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 md:mt-6">
                  <button className="border border-black/10 dark:border-white/20 bg-black text-white px-5 py-2.5 md:px-6 md:py-3 text-[10px] sm:text-xs 
                                     hover:bg-white hover:text-orange-500 font-bold cursor-pointer transition-all duration-300 
                                     uppercase tracking-wider">
                    Know More &gt;&gt;
                  </button>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-2 bg-inherit z-10" />
            </div>
          ))}
        </div>
      </div>

      {mounted && (
        <div className="fixed bottom-8 left-5 z-50">
          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="cursor-pointer border bg-white dark:bg-black border-black/50 dark:border-gray-400/40
                       px-5 py-2.5 text-[10px] font-bold tracking-[0.2em] rounded-full uppercase 
                       text-black dark:text-white shadow-lg
                       transition-all hover:bg-black hover:text-white 
                       dark:hover:bg-white dark:hover:text-black"
          >
            {resolvedTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      )}
    </section>
  );
};

export default SuccessStories;