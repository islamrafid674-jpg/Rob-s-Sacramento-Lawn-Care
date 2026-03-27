import { motion } from 'motion/react';
import { Phone, MapPin, GraduationCap, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Let's get your lawn <br/>
              <span className="text-primary italic">Spring ready.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Call or text now to schedule your free quote. Quick, professional, and reliable service guaranteed.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass-green flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-1">Call or Text</h4>
                  <a href="tel:8315942896" className="text-2xl font-bold hover:text-primary transition-colors">
                    831-594-2896
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-1">Service Area</h4>
                  <p className="text-xl font-medium">Sacramento, CA & Surrounding</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-1">Background</h4>
                  <p className="text-xl font-medium">Sacramento State Alumni</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold mb-8">Request a Free Quote</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
                  placeholder="(831) 594-2896"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Service Needed</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors appearance-none">
                  <option value="" className="bg-gray-900">Select a service...</option>
                  <option value="maintenance" className="bg-gray-900">Regular Maintenance</option>
                  <option value="cleanup" className="bg-gray-900">One-time Cleanup</option>
                  <option value="seasonal" className="bg-gray-900">Seasonal Service</option>
                  <option value="other" className="bg-gray-900">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Message (Optional)</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors resize-none"
                  placeholder="Tell us about your lawn..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-black font-bold text-lg py-4 rounded-xl transition-all active:scale-95 box-glow"
              >
                Send Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
