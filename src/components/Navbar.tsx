import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Instagram, Leaf } from 'lucide-react';

const links = [
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-2 md:py-4' : 'py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="glass rounded-2xl px-4 md:px-6 py-2 md:py-4 flex items-center justify-between">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-primary shadow-[0_0_15px_rgba(34,197,94,0.4)] bg-white flex items-center justify-center transition-transform group-hover:scale-105">
                <Leaf className="text-primary w-7 h-7 md:w-8 md:h-8" />
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-tighter hidden sm:block">
                <span className="text-primary">Rob's</span> Lawn Care
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6 text-sm font-medium text-gray-300">
                {links.map((link) => (
                  <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/saclawncare/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a
                  href="tel:8315942896"
                  className="bg-primary hover:bg-primary-dark text-black font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 transition-all active:scale-95"
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white p-2 active:scale-95 transition-transform"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/98 backdrop-blur-2xl flex flex-col"
          >
            <div className="p-6 flex justify-end">
              <button
                className="text-white p-4 active:scale-95 transition-transform"
                onClick={() => setIsOpen(false)}
              >
                <X size={32} />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center gap-8 p-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-4xl font-bold tracking-tight"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                className="flex gap-6 mt-8"
              >
                <a href="https://www.instagram.com/saclawncare/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white p-2">
                  <Instagram size={32} />
                </a>
              </motion.div>
              
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
                href="tel:8315942896"
                className="mt-8 bg-primary text-black font-bold text-xl px-8 py-4 rounded-full flex items-center gap-3 active:scale-95 transition-transform"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={24} />
                831-594-2896
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
