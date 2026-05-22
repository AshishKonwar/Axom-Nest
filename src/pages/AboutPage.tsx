import { motion } from "framer-motion";
import { ShieldCheck, Star, Users, Building2, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

const STATS = [
  { icon: Building2, value: "600+", label: "Verified PGs" },
  { icon: Users, value: "12,000+", label: "Happy Residents" },
  { icon: Star, value: "4.7", label: "Average Rating" },
  { icon: ShieldCheck, value: "100%", label: "Verified Listings" },
];

const TEAM = [
  { name: "Arnab Saikia", role: "Co-Founder & CEO", avatar: "https://i.pravatar.cc/100?img=32" },
  { name: "Preeti Deka", role: "Co-Founder & COO", avatar: "https://i.pravatar.cc/100?img=49" },
  { name: "Bikash Gogoi", role: "Head of Operations", avatar: "https://i.pravatar.cc/100?img=15" },
  { name: "Rupali Bora", role: "Product Design", avatar: "https://i.pravatar.cc/100?img=44" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero */}
      <section className="bg-hero-gradient py-24 relative overflow-hidden">
        <div className="blob absolute -top-20 -right-20 w-80 h-80 bg-accent/20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-white mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/75 text-lg leading-relaxed"
          >
            AxomNest was born out of frustration. We were students and young professionals who struggled to find decent, affordable PGs in Assam. The process was opaque, brokers were unreliable, and photos never matched reality. So we built the solution ourselves.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/10"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-extrabold text-primary mb-1">{value}</div>
                <div className="text-slate-500 text-sm">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              To make finding a PG in Assam as easy, transparent, and safe as possible. We personally verify every listing, so what you see is exactly what you get. No hidden charges, no false photos, no broker fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-slate-900 text-center mb-12"
          >
            Meet the <span className="gradient-text">Team</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-2xl mx-auto mb-3 border-4 border-primary/10 bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                  <User className="w-9 h-9 text-white" />
                </div>

                <div className="font-semibold text-slate-900">
                  {member.name}
                </div>

                <div className="text-slate-400 text-xs mt-0.5">
                  {member.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-hero-gradient">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to find your stay?</h2>
          <p className="text-white/70 mb-8">Browse verified PGs across Assam and find your perfect home away from home.</p>
          <Button variant="accent" size="xl" asChild>
            <Link to="/listings">Browse PGs</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
