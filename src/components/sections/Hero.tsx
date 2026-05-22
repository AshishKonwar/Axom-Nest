import { motion } from "framer-motion";
import { SearchBar } from "@/components/common/SearchBar";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Star, Building2 } from "lucide-react";

const STATS = [
  { icon: Building2, value: "600+", label: "Verified PGs" },
  { icon: Star, value: "4.7", label: "Avg. Rating" },
  { icon: ShieldCheck, value: "8", label: "Assam Cities" },
];

const QUICK_CITIES = ["Guwahati", "Dibrugarh", "Jorhat", "Tezpur", "Silchar"];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute -top-32 -left-32 w-96 h-96 bg-accent/30" />
        <div className="blob absolute top-1/2 -right-48 w-[500px] h-[500px] bg-primary-light/20 animate-float-slow" />
        <div className="blob absolute bottom-0 left-1/3 w-64 h-64 bg-accent-light/40 animate-float" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Now live in 8 Assam cities
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
          >
            Find Your Perfect{" "}
            <span className="relative">
              <span className="text-accent">PG</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-1 left-0 right-0 h-1 bg-accent/40 rounded-full origin-left"
              />
            </span>{" "}
            in Assam
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/75 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Verified PGs, hostels, rentals and stays across Assam. Find your next home with zero brokerage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <SearchBar large className="max-w-2xl mb-5" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap items-center gap-2 text-white/70 text-sm"
          >
            <span className="font-medium">Popular:</span>
            {QUICK_CITIES.map((city) => (
              <Link
                key={city}
                to={`/search?city=${city}`}
                className="bg-white/10 hover:bg-white/20 border border-white/15 rounded-full px-3 py-1 transition-colors hover:text-white"
              >
                {city}
              </Link>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 flex flex-wrap gap-6"
        >
          {STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-6 py-4"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-white/60 text-xs">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
