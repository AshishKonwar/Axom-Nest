import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { CITIES } from "@/services/pgService";

export function PopularLocations() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-2 block">
            Explore by location
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900">
            Popular <span className="gradient-text">Cities</span> in Assam
          </h2>
          <p className="text-slate-500 mt-3 max-w-lg mx-auto">
            From the bustling capital Guwahati to the scenic tea gardens of Dibrugarh — find PGs across Assam.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {CITIES.map((city, index) => (
            <motion.div
              key={city.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Link
                to={`/search?city=${city.name}`}
                className="relative group block rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span className="text-white font-bold text-base">{city.name}</span>
                  </div>
                  <span className="text-white/70 text-xs">{city.count}+ properties</span>
                </div>
                <div className="absolute top-3 right-3 bg-accent text-primary-dark text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
