import { motion } from "framer-motion";
import { Star, Quote, User } from "lucide-react";
import { TESTIMONIALS } from "@/services/pgService";


export function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-2 block">
            What residents say
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900">
            Loved by <span className="gradient-text">thousands</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-md mx-auto">
            Real stories from real residents across Assam who found their perfect stay with AxomNest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl p-6 shadow-card border border-slate-100 hover:shadow-card-hover transition-shadow group"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < t.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"
                    }`}
                  />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 text-sm">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full border-2 border-primary/20 bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {t.name}
                  </div>

                  <div className="text-xs text-slate-400">
                    {t.city} ·{" "}
                    <span className="text-primary">
                      {t.pgName}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
