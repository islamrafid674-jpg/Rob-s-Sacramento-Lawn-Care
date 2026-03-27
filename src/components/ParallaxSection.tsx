import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 w-full h-[140%]"
      >
        <img
          src="https://media.istockphoto.com/id/96926811/photo/using-lawn-mower.jpg?s=612x612&w=0&k=20&c=VScjDNarkvmp69n9MyDQhaVFQOw7pNOJRuM90Tm9kpE="
          alt="Lawn care detail"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-8"
        >
          Ready for a <span className="text-primary italic">perfect</span> lawn this Spring?
        </motion.h2>
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          href="tel:8315942896"
          className="inline-flex bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-5 rounded-full transition-all active:scale-95"
        >
          Schedule Your Free Quote
        </motion.a>
      </div>
    </section>
  );
}
