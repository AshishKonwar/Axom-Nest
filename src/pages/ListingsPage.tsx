import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { PGCard } from "@/components/common/PGCard";
import { Button } from "@/components/ui/Button";
import { pgService } from "@/services/pgService";
import type { PG } from "@/types";

const CITIES = ["All", "Guwahati", "Dibrugarh", "Jorhat", "Tezpur", "Silchar", "Tinsukia", "Sivasagar", "North Lakhimpur"];
const GENDERS = ["All", "Boys", "Girls", "Mixed"];
const SORT_OPTIONS = ["Featured", "Price: Low to High", "Price: High to Low", "Rating"];

export default function ListingsPage() {
  const [pgs, setPgs] = useState<PG[]>([]);
  const [filtered, setFiltered] = useState<PG[]>([]);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("All");
  const [gender, setGender] = useState("All");
  const [sort, setSort] = useState("Featured");
  const [showFilters, setShowFilters] = useState(false);
  const [maxRent, setMaxRent] = useState(20000);

  useEffect(() => {
    pgService.getAllPGs().then((data) => {
      setPgs(data);
      setFiltered(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    let result = [...pgs];
    if (city !== "All") result = result.filter((pg) => pg.city === city);
    if (gender !== "All") result = result.filter((pg) => pg.gender === gender);
    result = result.filter((pg) => pg.rent <= maxRent);
    if (sort === "Price: Low to High") result.sort((a, b) => a.rent - b.rent);
    if (sort === "Price: High to Low") result.sort((a, b) => b.rent - a.rent);
    if (sort === "Rating") result.sort((a, b) => b.rating - a.rating);
    if (sort === "Featured") result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    setFiltered(result);
  }, [pgs, city, gender, sort, maxRent]);

  const hasFilters = city !== "All" || gender !== "All" || maxRent < 20000;

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="bg-white border-b border-slate-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center gap-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {CITIES.map((c) => (
              <button
                key={c}
                onClick={() => setCity(c)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  city === c ? "bg-primary text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-sm border border-slate-200 rounded-xl px-3 py-1.5 bg-white text-slate-700 focus:outline-none focus:border-primary"
            >
              {SORT_OPTIONS.map((o) => <option key={o}>{o}</option>)}
            </select>
            <Button
              variant={showFilters ? "default" : "outline"}
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
              {hasFilters && <span className="w-2 h-2 rounded-full bg-accent ml-1" />}
            </Button>
          </div>
        </div>

        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-slate-100 bg-slate-50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-6 items-end">
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2 block">Gender</label>
                <div className="flex gap-2">
                  {GENDERS.map((g) => (
                    <button
                      key={g}
                      onClick={() => setGender(g)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                        gender === g ? "bg-primary text-white" : "bg-white border border-slate-200 text-slate-600 hover:border-primary/50"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2 block">
                  Max Rent: ₹{maxRent.toLocaleString("en-IN")}
                </label>
                <input
                  type="range"
                  min={3000}
                  max={20000}
                  step={500}
                  value={maxRent}
                  onChange={(e) => setMaxRent(Number(e.target.value))}
                  className="w-full accent-primary"
                />
              </div>
              {hasFilters && (
                <Button variant="ghost" size="sm" onClick={() => { setCity("All"); setGender("All"); setMaxRent(20000); }}>
                  <X className="w-4 h-4" /> Clear all
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-slate-500 text-sm">
            {loading ? "Loading…" : <><span className="font-semibold text-slate-900">{filtered.length}</span> properties found</>}
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-slate-100 animate-pulse aspect-[3/4]" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No properties match your filters.</p>
            <Button variant="secondary" className="mt-4" onClick={() => { setCity("All"); setGender("All"); setMaxRent(20000); }}>
              Clear filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((pg, i) => (
              <PGCard key={pg.id} pg={pg} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
