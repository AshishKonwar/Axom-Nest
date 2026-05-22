import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";

interface SearchBarProps {
  className?: string;
  large?: boolean;
}

export function SearchBar({
  className = "",
  large = false,
}: SearchBarProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (query.trim()) {
      params.set("q", query.trim());
    }

    navigate(`/search?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className={`relative ${className}`}>
      <motion.div
        className={`flex items-center bg-white rounded-2xl shadow-glass border border-white/60 overflow-hidden ${
          large ? "gap-0" : "gap-2 p-2"
        }`}
      >
        {large ? (
          <>
            <div className="flex items-center gap-3 flex-1 px-5 py-4">
              <Search className="w-5 h-5 text-primary shrink-0" />

              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by locality, landmark, PG name..."
                className="flex-1 text-slate-800 placeholder:text-slate-400 bg-transparent outline-none text-base"
              />
            </div>

            <div className="px-3 py-2">
              <Button
                type="submit"
                size="lg"
                className="rounded-xl"
              >
                <Search className="w-4 h-4" />
                Search PGs
              </Button>
            </div>
          </>
        ) : (
          <>
            <Search className="w-4 h-4 text-slate-400 ml-2 shrink-0" />

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search city or locality..."
              className="flex-1 text-slate-700 placeholder:text-slate-400 bg-transparent outline-none text-sm py-1"
            />

            <Button type="submit" size="sm">
              Search
            </Button>
          </>
        )}
      </motion.div>
    </form>
  );
}