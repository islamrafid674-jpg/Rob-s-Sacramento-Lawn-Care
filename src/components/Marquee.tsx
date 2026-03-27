import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const items = [
  "Sacramento State Alumni",
  "Free Quotes Available",
  "Spring Clean-ups",
  "Reliable & Professional",
  "Local Specialist",
  "5-Star Rated",
];

export default function Marquee() {
  return (
    <div className="py-6 border-y border-white/10 bg-black overflow-hidden flex relative z-10">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-6 mx-6">
            <Star className="text-primary" size={16} fill="currentColor" />
            <span className="text-lg font-medium tracking-wide uppercase text-gray-300">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
