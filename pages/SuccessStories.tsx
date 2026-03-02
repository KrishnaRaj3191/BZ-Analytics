import Image from "next/image";

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
  return (
    <section className="w-full bg-black py-12 md:py-20 lg:py-[120px]">
      <div className="max-w-[1518px] mx-auto px-4 sm:px-8 md:px-[60px] lg:px-[175px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[40px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-[#1E1E1E] rounded-[20px] overflow-hidden 
                         h-[450px] sm:h-[480px] flex flex-col cursor-pointer transition-colors duration-300 hover:bg-[#252525]"
            >
              <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden shrink-0">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-2"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow transition-transform duration-500 ease-out group-hover:-translate-y-12 sm:group-hover:-translate-y-16 bg-inherit">
                
                <h3 className="text-white text-xl sm:text-[26px] font-semibold leading-tight dark:text-white">
                  {card.title}
                </h3>

                <div className="mt-3 sm:mt-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8">
                  <button className="border border-white/40 text-white px-5 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm 
                                     hover:bg-white hover:text-orange-500 font-bold cursor-pointer hover:border-white transition-all duration-300">
                    Know More &gt;&gt;
                  </button>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-4 bg-inherit z-10" />
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default SuccessStories;