"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";

const languages = [
  { code: "en", label: "EN", flag: "/usa.png" },
  { code: "hi", label: "HI", flag: "/india.png" },
  { code: "ar", label: "AR", flag: "/uae.png" },
];

const navItems = [
  "Home", "About Us", "Services", "Success Stories", "Blogs", "Careers", "Contact Us",
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  // Reusable Language Dropdown Component to avoid code repetition
  const LanguageSelector = () => (
    <div className="relative">
      <button
        onClick={() => setOpenLang(!openLang)}
        className=" cursor-pointer flex items-center gap-2 hover:text-orange-500 transition-colors py-2 px-2"
      >
        <img src={selectedLang.flag} className="w-5 h-5 rounded-full object-cover" alt="flag" />
        <span className="text-sm">{selectedLang.label}</span>
        {openLang ? <FiChevronUp /> : <FiChevronDown />}
      </button>

      {openLang && (
        <div className="absolute right-0 mt-3 bg-zinc-900 border border-gray-700 rounded-md w-[120px] overflow-hidden shadow-xl z-[60]">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => {
                setSelectedLang(lang);
                setOpenLang(false);
              }}
              className="flex items-center gap-2 px-4 py-3 hover:bg-orange-400 cursor-pointer transition-colors font-bold"
            >
              <img src={lang.flag} className="w-4 h-4 rounded-full" alt={lang.label} />
              <span className="text-sm">{lang.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header className="w-full bg-black text-white font-bold sticky top-0 z-50">
      <div className="w-full flex items-center justify-between px-4 lg:px-4 py-4">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src="/bq.png" alt="Logo" width={120} height={40} className="h-10 md:h-13 mr-4 w-auto object-contain" />
        </div>

        {/* DESKTOP NAV + DESKTOP LANGUAGE SELECTOR */}
        <div className="hidden min-[1200px]:flex items-center gap-8">
          <nav className="flex items-center text-sm font-medium gap-5">
            {navItems.map((item) => (
              <div key={item} className="flex items-center group cursor-pointer">
                <span className="mr-2 text-white transition-colors duration-300 group-hover:text-orange-500 xl:inline hidden">•</span>
                <Link href="#" className="transition-colors duration-300 group-hover:text-orange-500 whitespace-nowrap">
                  {item}
                </Link>
              </div>
            ))}
          </nav>
          {/* Desktop specific language selector */}
          <LanguageSelector />
        </div>

        {/* RIGHT SECTION (Mobile Language + Consultation Button + Toggle) */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* MOBILE LANGUAGE SELECTOR (Hidden on Desktop) */}
          <div className="min-[1200px]:hidden">
            <LanguageSelector />
          </div>

          {/* Consultation Button (Hidden on Mobile) */}
          <Link
            href="#"
            className="hidden min-[1200px]:block bg-[#101010] relative overflow-hidden border border-white px-10 py-4 group cursor-pointer flex-shrink-0"
          >
            <span className="absolute top-1/2 left-1/2 w-[400%] h-[400%] bg-white -translate-x-1/2 -translate-y-1/2 rotate-45 scale-0 group-hover:scale-110 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10 text-white group-hover:text-orange-500 transition-colors duration-300 font-extrabold text-[17px]">
              Schedule a consultation
            </span>
          </Link>

          {/* Toggle Button (Hamburger) */}
          <button
            className="min-[1200px]:hidden p-2 text-white hover:text-orange-500 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="min-[1200px]:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 shadow-2xl">
          <div className="flex flex-col gap-6 p-8 text-sm">
            {navItems.map((item) => (
              <Link key={item} href="#" onClick={() => setMenuOpen(false)} className="text-lg hover:text-orange-500 transition-colors border-b border-gray-900 pb-2">
                {item}
              </Link>
            ))}
            <button className="w-full border border-white py-4 mt-4 font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300 uppercase">
              Schedule a consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;