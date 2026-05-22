import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { PGCard } from "@/components/common/PGCard";
import { Button } from "@/components/ui/Button";
import { useFavorites } from "@/hooks/useFavorites";
import { pgService } from "@/services/pgService";
import type { PG } from "@/types";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const [pgs, setPgs] = useState<PG[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pgService.getAllPGs().then((all) => {
      setPgs(all.filter((pg) => favorites.includes(pg.id)));
      setLoading(false);
    });
  }, [favorites]);

  return (
    <div className="min-h-screen bg-cream pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-extrabold text-slate-900 mb-1">
            Saved Properties
          </h1>
          <p className="text-slate-500">{pgs.length} properties saved</p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-slate-100 animate-pulse aspect-[3/4]" />
            ))}
          </div>
        ) : pgs.length === 0 ? (
          <div className="text-center py-24">
            <Heart className="w-16 h-16 text-slate-200 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-slate-700 mb-2">No saved properties</h2>
            <p className="text-slate-400 mb-6">Heart a PG listing to save it here.</p>
            <Button asChild>
              <Link to="/listings">Browse PGs</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {pgs.map((pg, i) => (
              <PGCard key={pg.id} pg={pg} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
