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
        className={`
          flex flex-col md:flex-row
          items-stretch md:items-center
          bg-white rounded-2xl
          shadow-glass border border-white/60
          overflow-hidden w-full
        `}
      >
  {large ? (
    <>
      <div className="flex items-center gap-3 flex-1 px-5 py-4 min-w-0">
        <Search className="w-5 h-5 text-primary shrink-0" />

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by locality, landmark, PG name..."
          className="
            flex-1 min-w-0
            text-slate-800
            placeholder:text-slate-400
            bg-transparent
            outline-none
            text-base
          "
        />
      </div>

      <div className="p-2 md:pr-2">
        <Button
          type="submit"
          size="lg"
          className="
            rounded-xl
            w-full md:w-auto
            h-14
            px-8
            flex items-center justify-center
          "
        >
          <Search className="w-4 h-4" />
          Search PGs
        </Button>
      </div>
    </>
  ) : null}
</motion.div>
    </form>
  );
}