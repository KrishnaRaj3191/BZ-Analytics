"use client";

import Link from 'next/link';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer
      className="relative text-white py-12 px-6 md:px-12 lg:px-24 font-sans border-gray-900 overflow-hidden bg-[#101010]"
      style={{ backgroundImage: `url(/footerbg.png)`, backgroundSize: 'cover' }}
    >
      <div className="max-w-7xl p-4 md:p-10 mx-auto relative z-10">
        
        {/* Main Wrapper*/}
        <div className="flex flex-col lg:flex-row gap-16 lg:justify-between items-start">

          {/* LEFT SIDE: Email and Links */}
          <div className="w-full lg:w-[60%] flex flex-col">

            {/* EMAIL SECTION */}
            <div className="mb-12">
              <p className="text-xl md:text-2xl text-white/70 mb-2">
                Let's start working together
              </p>
              <a
                href="mailto:hello@bzanalytics.ai"
                className="text-2xl sm:text-4xl md:text-5xl font-bold hover:text-orange-400 transition-colors break-words"
              >
                hello@bzanalytics.ai
              </a>
              <div className="w-full h-[1px] bg-white/10 mt-10"></div>
            </div>

            {/* LINKS SECTION */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[auto_1fr_1fr] gap-10">

              {/* LOGO + SOCIAL */}
              <div className="flex flex-col gap-6">
                <Image
                  src="/bq.png"
                  alt="BZ"
                  width={250}
                  height={100}
                  className="w-[180px] md:w-[200px] h-auto"
                />

                <div className="flex flex-wrap items-center gap-4 mt-20">
                  {[ 
                    { icon: <Linkedin className="h-5 w-5 fill-white" />, href: "#" },
                    { icon: (
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                      </svg>
                    ), href: "#" },
                    { icon: <Facebook className="h-5 w-5 fill-white" />, href: "#" },
                    { icon: <Instagram className="h-5 w-5" />, href: "#" },
                    { icon: <FaYoutube className="h-5 w-5" />, href: "#" }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black border border-white/10 hover:bg-white/10 transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* LINKS COLUMN 1 */}
              <div className="flex flex-col gap-4 text-gray-300 md:pl-10">
                <Link href="#" className="hover:text-orange-400 transition-colors">Home</Link>
                <Link href="#" className="hover:text-orange-400 transition-colors">About Us</Link>
                <Link href="#" className="hover:text-orange-400 transition-colors">Services</Link>
                <Link href="#" className="hover:text-orange-400 transition-colors">Success Stories</Link>
              </div>

              {/* LINKS COLUMN 2 */}
              <div className="flex flex-col gap-4 text-gray-300">
                <Link href="#" className="hover:text-orange-400 transition-colors">Blogs</Link>
                <Link href="#" className="hover:text-orange-400 transition-colors">Careers</Link>
                <Link href="#" className="hover:text-orange-400 transition-colors">Contact Us</Link>
              </div>

            </div>
          </div>

          {/* SUBSCRIBE BOX*/}
          <div className="w-full lg:w-[320px] xl:w-[300px] bg-black/30 p-8 flex flex-col items-start">
            <div className="mb-6 flex justify-center w-full">
              <Image
                src="/footerlogo.png"
                alt="Footer Logo"
                width={140}
                height={100}
                className="object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold mb-1">Subscribe now</h3>
            <p className="text-gray-400 text-sm mb-8">Empower Every Mind</p>

            <form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#0d0d0d] border border-gray-800 rounded-lg py-3 px-4 focus:outline-none focus:border-orange-500 text-white placeholder:text-gray-600"
              />
              <button
                type="submit"
                className="w-full bg-orange-400 cursor-pointer hover:bg-white hover:text-black text-white font-bold py-4 rounded-lg transition-all"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;