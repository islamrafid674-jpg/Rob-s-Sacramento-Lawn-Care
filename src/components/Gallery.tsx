import { motion } from 'motion/react';

const images = [
  "https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/656746999_18092745818146271_2338143691487380272_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzI5ODAwMDAwODE5NDcyMDUxMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTc5OS5zZHIuQzMifQ%3D%3D&_nc_ohc=FSmLC4AxcnEQ7kNvwHieyEy&_nc_oc=Adp02gv6abme7ITwp6nHoOA3Hu3N-R80wM5SbdAFcbujrn7u5u1l2CY3FmbaxXFiacw&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=XT2swg0Bo50rPD4AweLZRw&_nc_ss=7a32e&oh=00_AfwLEROsUOoRLGvWt8Mzm03UwgLcv-Rrg59OXSmUX3-oHQ&oe=69CC5C13",
  "https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/655960965_18123004588591361_3520725297939379139_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzI5Nzk4OTE1OTg0NTU3OTg5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTc5OS5zZHIuQzMifQ%3D%3D&_nc_ohc=cC41E5bZsDwQ7kNvwGH1HI0&_nc_oc=AdqGAGXvrlGGUDDebF8R7cwhqRQ6eXfpJwISm61pBm69CsSJA3tLkAayDVSugwXuyko&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=XT2swg0Bo50rPD4AweLZRw&_nc_ss=7a32e&oh=00_AfxlFTrmrAzpYffLX3SZv2OD_758OAMX0KfvbdEUFZtv_g&oe=69CC5283",
  "https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/656027859_18080195588525558_5944270934942785952_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzI5Nzk4NTQ0NTczMDQ4MTcyMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTc5OS5zZHIuQzMifQ%3D%3D&_nc_ohc=5HxojSaO0mQQ7kNvwErF0z7&_nc_oc=Adqpqj2oKgYAYh6rXRQs4oSkAsEJH3dq_ypDgxZzVNBiTNgC3vYZkrzoJIWDxIzbFr4&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=XT2swg0Bo50rPD4AweLZRw&_nc_ss=7a32e&oh=00_AfxzBMUyd9QiIKDF9lNvouvZDgw6H8gn-1exKDfgSNvuPA&oe=69CC6F4E",
  "https://instagram.fdac3-1.fna.fbcdn.net/v/t51.29350-15/425689895_1072117413867917_2814580714976810497_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzI5ODAxNjg4MzE5NjY3Mzg0Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTUyMi5zZHIuZGVmYXVsdF9pbWFnZS5DMyJ9&_nc_ohc=j-JQLLm3Il0Q7kNvwFoUgV3&_nc_oc=AdqxmP-U6CHdjalmBWLZIv4AILrSgNMelhRskyB4MHb_-3lC-JyyTkNx2C8LZ3aNunE&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=5OUTMtLbpAPqax6Ikh0xDQ&_nc_ss=7a32e&oh=00_AfzMbNGnE8sFxdh3LNHawIpbp37MxkZLP0C58w6g5_v4nA&oe=69CC3EEA",
  "https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/655312167_18111740938665674_6332014649285128076_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzI5ODAwMjQxNzczMDA3Nzk0Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTc5OS5zZHIuQzMifQ%3D%3D&_nc_ohc=eUZNqxGZflkQ7kNvwFRVqWz&_nc_oc=AdqKE9kT0Ne9xZoKb8j5C-pXYjzdKFIEzIIPBwry3Sa0nHp9R_byldMufFV36QSflXk&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=XT2swg0Bo50rPD4AweLZRw&_nc_ss=7a32e&oh=00_Afw-TPAinmdvtF5On-V7GYQ9SQt92IB3gd4gZKzu8BdDAw&oe=69CC3ADF",
  "https://instagram.fdac3-2.fna.fbcdn.net/v/t51.29350-15/425973152_964769881984795_5881206470961073756_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzI5ODAwNDQzNzA2OTQxMDUxNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTc5OS5zZHIuZGVmYXVsdF9pbWFnZS5DMyJ9&_nc_ohc=9MWIPXTM4lwQ7kNvwENFa_g&_nc_oc=AdoNhnt3-IqCko6npnoZRrHS4aNv4guFwEoAcZNsIe89Xwm1ihC00OX_Ygwv2mB0Qdc&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=XT2swg0Bo50rPD4AweLZRw&_nc_ss=7a32e&oh=00_Afy_A3Jzvv6ddvUuFkZUGWvJ92j-LND8_RZ-5VLz7YU5fw&oe=69CC41AC"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Recent <span className="text-primary italic">Work</span>
          </h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="relative group rounded-2xl overflow-hidden break-inside-avoid"
            >
              <img
                src={src}
                alt={`Lawn care work ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium tracking-wide uppercase text-sm border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">
                  View Project
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
