import { motion } from 'motion/react';
import { Scissors, Sparkles, CalendarDays } from 'lucide-react';

const services = [
  {
    title: "Lawn Care & Maintenance",
    description: "Regular mowing, edging, and trimming to keep your property looking pristine year-round.",
    icon: <Scissors size={32} />,
    image: "https://cdn.pixabay.com/photo/2015/02/20/19/46/lawn-care-643556_1280.jpg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "One-Time Clean-ups",
    description: "Overgrown yard? We'll clear out debris, weeds, and overgrowth to restore your space.",
    icon: <Sparkles size={32} />,
    image: "https://i2.wp.com/lees-general-landscaping.b-cdn.net/creative-photos/caucasian-gardener-trimming-garden-plants-2023-11-27-04-52-54-utc.jpeg?w=1920&resize=1920,1292&ssl=1",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Seasonal Services",
    description: "Spring preparation, fall leaf removal, and seasonal fertilizing for optimal health.",
    icon: <CalendarDays size={32} />,
    image: "https://www.swissvaleborough.com/ImageRepository/Document?documentID=854",
    className: "md:col-span-1 md:row-span-1",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Our <span className="text-primary italic">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Comprehensive lawn care solutions tailored for Sacramento homes. From regular maintenance to complete yard transformations.
          </p>
        </motion.div>

        {/* Desktop Bento Grid / Mobile Carousel */}
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:grid-rows-2 gap-6 md:pb-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative group rounded-3xl overflow-hidden min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center h-[400px] md:h-auto ${service.className}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <div className="w-16 h-16 rounded-2xl glass-green flex items-center justify-center text-primary mb-6 transform transition-transform group-hover:-translate-y-2">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
              
              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-3xl transition-colors duration-500 pointer-events-none z-20"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
