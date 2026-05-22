import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { PGCard } from "@/components/common/PGCard";
import { SearchBar } from "@/components/common/SearchBar";
import { pgService } from "@/services/pgService";
import type { PG } from "@/types";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const city = searchParams.get("city") ?? "";

  const [results, setResults] = useState<PG[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      let data: PG[] = [];
      if (city) {
        data = await pgService.getPGsByCity(city);
        if (query) {
          const q = query.toLowerCase();
          data = data.filter(
            (pg) =>
              pg.title.toLowerCase().includes(q) ||
              pg.location.toLowerCase().includes(q)
          );
        }
      } else if (query) {
        data = await pgService.searchPGs(query);
      } else {
        data = await pgService.getAllPGs();
      }
      setResults(data);
      setLoading(false);
    };
    fetch();
  }, [query, city]);

  const title = city
    ? `PGs in ${city}`
    : query
    ? `Results for "${query}"`
    : "All PGs";

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="bg-hero-gradient py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-extrabold text-white mb-6"
          >
            {title}
          </motion.h1>
          <SearchBar large />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-slate-100 animate-pulse aspect-[3/4]" />
            ))}
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-slate-700 mb-2">No results found</h2>
            <p className="text-slate-400">Try a different city or search term.</p>
          </div>
        ) : (
          <>
            <p className="text-slate-500 text-sm mb-6">
              <span className="font-semibold text-slate-900">{results.length}</span> properties found
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {results.map((pg, i) => (
                <PGCard key={pg.id} pg={pg} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
