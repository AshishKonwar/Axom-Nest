import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PGCard } from "@/components/common/PGCard";
import { Button } from "@/components/ui/Button";
import { pgService } from "@/services/pgService";
import type { PG } from "@/types";

export function FeaturedListings() {
  const [pgs, setPgs] = useState<PG[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pgService.getFeaturedPGs().then((data) => {
      setPgs(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-2 block">
              Hand-picked for you
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900">
              Featured <span className="gradient-text">Properties</span>
            </h2>
            <p className="text-slate-500 mt-2 max-w-md">
              Top-rated PGs verified by our team — offering the best in comfort, safety, and value.
            </p>
          </div>
          <Button variant="secondary" asChild>
            <Link to="/listings">
              View all listings <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-slate-100 animate-pulse aspect-[3/4]" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pgs.map((pg, i) => (
              <PGCard key={pg.id} pg={pg} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
