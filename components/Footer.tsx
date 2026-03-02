import Link from 'next/link';
import { 
  FaInstagram, 
  FaTwitterSquare,
  FaFacebook,
  FaLinkedin,
  FaYoutube 
} from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white py-16 px-6 md:px-12 lg:px-24 font-sans border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-12 mb-16 items-start">
          
          <div className="lg:w-2/3 w-full">
            
            <div className="mb-12">
              <p className="text-2xl md:text-3xl text-white mb-2">
                Let's start working together
              </p>

              <a 
                href="mailto:hello@bzanalytics.ai" 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold hover:text-orange-400 transition-colors break-words"
              >
                hello@bzanalytics.ai
              </a>

              <div className="w-full h-[1px] bg-gray-800 mt-10"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-start">
              
              <div className="flex flex-col gap-6">
                <Image 
                  src="/bq.png" 
                  alt="BZ" 
                  width={500} 
                  height={300}
                  className="mb-6 w-[180px] md:w-[220px] lg:w-auto h-auto" 
                />
                
                <div className="flex flex-wrap gap-6 mt-6">
                  <Link href="https://instagram.com" className="hover:text-pink-500 transition-colors">
                    <FaInstagram size={24} />
                  </Link>

                  <Link href="https://twitter.com" className="hover:text-blue-300 transition-colors">
                    <FaTwitterSquare size={24} />
                  </Link>

                  <Link href="https://facebook.com" className="hover:text-blue-600 transition-colors">
                    <FaFacebook size={24} />
                  </Link>

                  <Link href="https://linkedin.com" className="hover:text-blue-500 transition-colors">
                    <FaLinkedin size={24} />
                  </Link>

                  <Link href="https://youtube.com" className="hover:text-red-600 transition-colors">
                    <FaYoutube size={24} />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-gray-300 md:ml-10">
                <Link href="#" className="hover:text-orange-400">Home</Link>
                <Link href="#" className="hover:text-orange-400">About Us</Link>
                <Link href="#" className="hover:text-orange-400">Services</Link>
                <Link href="#" className="hover:text-orange-400">Success Stories</Link>
              </div>

              <div className="flex flex-col gap-4 text-gray-300">
                <Link href="#" className="hover:text-orange-400">Blogs</Link>
                <Link href="#" className="hover:text-orange-400">Careers</Link>
                <Link href="#" className="hover:text-orange-400">Contact Us</Link>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto bg-[#111] p-6 sm:p-8 rounded-3xl border border-gray-800/50 flex flex-col items-start">
            
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