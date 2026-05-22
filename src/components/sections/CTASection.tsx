import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="py-24 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob absolute -top-20 -right-20 w-80 h-80 bg-accent/20" />
        <div className="blob absolute bottom-0 -left-20 w-64 h-64 bg-white/10 animate-float-slow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Looking for a PG?</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Browse hundreds of verified PGs across 8 Assam cities. Filter by city, budget, gender, and amenities to find your perfect stay.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/listings">
                Browse PGs <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Own a PG?</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              List your property on AxomNest and reach thousands of verified tenants across Assam. Easy setup, zero commission.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/register">
                List your property <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
