import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    location: "East Sacramento",
    text: "Rob transformed our overgrown backyard into a perfect space for spring. Quick, professional, and very reasonably priced. Highly recommend!",
  },
  {
    name: "Michael Chen",
    location: "Elk Grove",
    text: "Been using Rob's service for a year now. He's reliable, always shows up on time, and leaves the lawn looking immaculate every single time.",
  },
  {
    name: "David & Lisa",
    location: "Midtown",
    text: "The one-time cleanup service was exactly what we needed before listing our house. The curb appeal improved instantly. Great work!",
  },
  {
    name: "Amanda R.",
    location: "Natomas",
    text: "As a fellow Sac State alum, I love supporting local businesses. Rob is incredibly detail-oriented and takes pride in his work.",
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-black relative z-10 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Client <span className="text-primary italic">Reviews</span>
          </h2>
        </motion.div>

        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:pb-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl min-w-[85vw] sm:min-w-[350px] md:min-w-0 snap-center relative flex flex-col"
            >
              <Quote className="absolute top-6 right-6 text-white/10" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-primary" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 flex-1 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
