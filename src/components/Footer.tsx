import { Leaf, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5 relative z-10 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3 text-2xl font-bold tracking-tighter">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary bg-white flex items-center justify-center">
            <Leaf className="text-primary w-6 h-6 md:w-7 md:h-7" />
          </div>
          <span>Rob's <span className="text-primary">Lawn Care</span></span>
        </div>
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Rob's Sacramento Lawn Care. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/saclawncare/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-all hover:scale-110">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
