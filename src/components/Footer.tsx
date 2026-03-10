import Link from 'next/link';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer
className="relative text-white py-12 px-6 md:px-12 lg:px-24 font-sans border-gray-900 overflow-hidden bg-[#101010]" 
     style={{backgroundImage: `url(/footerbg.png)`
      
     }}
    >
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="flex flex-col lg:flex-row gap-12 mb-16 items-start">

          {/* LEFT SIDE */}
          <div className="lg:w-2/3 w-full">

            {/* EMAIL SECTION */}
            <div className="mb-12">
              <p className="text-2xl md:text-2xl text-white/70 mb-2">
                Let's start working together
              </p>

              <a
                href="mailto:hello@bzanalytics.ai"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold hover:text-orange-400 transition-colors"
              >
                hello@bzanalytics.ai
              </a>

              <div className="w-full h-[1px] bg-white/10 mt-10"></div>
            </div>

            {/* LINKS SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-10 items-start">

              {/* LOGO + SOCIAL */}
              <div className="flex flex-col gap-6">

                <Image
                  src="/bq.png"
                  alt="BZ"
                  width={200}
                  height={200}
                  className="mb-6 w-[180px] md:w-[220px] lg:w-auto h-auto"
                />

                <div className="mt-10 flex items-center gap-5">

                  <a
                    href="#"
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black hover:bg-white/10"
                  >
                    <Linkedin className="h-6 w-6 fill-white text-white" />
                  </a>

                  <a
                    href="#"
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black hover:bg-white/10"
                  >
                    <svg
                      className="h-5 w-5 fill-current text-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black hover:bg-white/10"
                  >
                    <Facebook className="h-6 w-6 fill-white text-white" />
                  </a>

                  <a
                    href="#"
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black hover:bg-white/10"
                  >
                    <Instagram className="h-6 w-6 text-white" />
                  </a>

                  <a
                    href="#"
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black hover:bg-white/10"
                  >
                    <FaYoutube className="h-6 w-6 text-white" />
                  </a>

                </div>
              </div>

              {/* LINKS COLUMN 1 */}
              <div className="flex flex-col gap-4 text-gray-300 md:ml-10">
                <Link href="#" className="hover:text-orange-400">Home</Link>
                <Link href="#" className="hover:text-orange-400">About Us</Link>
                <Link href="#" className="hover:text-orange-400">Services</Link>
                <Link href="#" className="hover:text-orange-400">Success Stories</Link>
              </div>

              {/* LINKS COLUMN 2 */}
              <div className="flex flex-col gap-4 text-gray-300">
                <Link href="#" className="hover:text-orange-400">Blogs</Link>
                <Link href="#" className="hover:text-orange-400">Careers</Link>
                <Link href="#" className="hover:text-orange-400">Contact Us</Link>
              </div>

            </div>
          </div>

          {/* SUBSCRIBE BOX */}
          <div className="w-full lg:w-auto md:ml-5 bg-[#111]/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-gray-800/50 flex flex-col items-start">

            <div className="mb-6 flex justify-center w-full">
              <Image
                src="/footerlogo.png"
                alt="Footer Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-1">
              Subscribe now
            </h3>

            <p className="text-gray-300 text-sm mb-8">
              Empower Every Mind
            </p>

            <form className="w-full space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#0d0d0d] border border-gray-800 rounded-lg py-3 px-4 focus:outline-none focus:border-orange-500 text-white"
              />

              <button
                type="submit"
                className="w-full bg-orange-400 cursor-pointer hover:bg-white hover:text-black text-white font-bold py-4 rounded-lg transition-colors"
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