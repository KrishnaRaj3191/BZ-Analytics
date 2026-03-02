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
  "Home",
  "About Us",
  "Services",
  "Success Stories",
  "Blogs",
  "Careers",
  "Contact Us",
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  return (
    <header className="w-full bg-black text-white sticky top-0 z-50">
      <div className="max-w-[1660px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4">
        
        <Image
          src="/bq.png"
          alt="BZ"
          width={120}
          height={40}
          className="h-12 w-auto"
        />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link key={item} href="#" className="hover:text-orange-500">
              {item}
            </Link>
          ))}

          {/* Desktop Language */}
          <div className="relative">
            <button
              onClick={() => setOpenLang(!openLang)}
              className="flex items-center gap-2"
            >
              <img
                src={selectedLang.flag}
                className="w-5 h-5 rounded-full"
                alt="flag"
              />
              {selectedLang.label}
              {openLang ? <FiChevronUp /> : <FiChevronDown />}
            </button>

            {openLang && (
              <div className="absolute right-0 mt-3 bg-black border border-gray-700 rounded-md w-[120px]">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang);
                      setOpenLang(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 cursor-pointer"
                  >
                    <img
                      src={lang.flag}
                      className="w-4 h-4 rounded-full"
                      alt={lang.label}
                    />
                    {lang.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>

        <button className="hidden lg:block border border-white px-5 py-2 hover:text-orange-500 hover:border-orange-500">
          Schedule a consultation
        </button>

        {/* Hamburger */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800 px-6 pb-6">
          <div className="flex flex-col gap-6 mt-6 text-sm">

            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-500"
              >
                {item}
              </Link>
            ))}

            {/* Mobile Language */}
            <div>
              <button
                onClick={() => setOpenLang(!openLang)}
                className="flex items-center justify-between w-full border border-gray-700 px-4 py-2"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={selectedLang.flag}
                    className="w-5 h-5 rounded-full"
                    alt="flag"
                  />
                  {selectedLang.label}
                </div>
                {openLang ? <FiChevronUp /> : <FiChevronDown />}
              </button>

              {openLang && (
                <div className="mt-2 border border-gray-700 rounded-md">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang);
                        setOpenLang(false);
                      }}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 cursor-pointer"
                    >
                      <img
                        src={lang.flag}
                        className="w-4 h-4 rounded-full"
                        alt={lang.label}
                      />
                      {lang.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button className="border border-white py-3 hover:text-orange-500 hover:border-orange-500">
              Schedule a consultation
            </button>

          </div>
        </div>
      )}
    </header>
  );
};

export default Header;