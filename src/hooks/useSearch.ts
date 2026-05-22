import { useState, useCallback } from "react";
import type { PG, SearchFilters } from "@/types";
import { pgService } from "@/services/pgService";

const DEFAULT_FILTERS: SearchFilters = {
  city: "All",
  gender: "All",
  minRent: 0,
  maxRent: 20000,
  amenities: [],
  occupancy: "All",
};

export function useSearch() {
  const [results, setResults] = useState<PG[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>(DEFAULT_FILTERS);
  const [query, setQuery] = useState("");

  const search = useCallback(async (searchQuery: string) => {
    setLoading(true);
    setQuery(searchQuery);
    try {
      const data = await pgService.searchPGs(searchQuery);
      setResults(data);
    } finally {
      setLoading(false);
    }
  }, []);

  const applyFilters = useCallback(async (newFilters: Partial<SearchFilters>) => {
    const merged = { ...filters, ...newFilters };
    setFilters(merged);
    setLoading(true);
    try {
      const data = await pgService.filterPGs(merged);
      setResults(data);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  const resetFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
  }, []);

  return {
    results,
    loading,
    filters,
    query,
    search,
    applyFilters,
    resetFilters,
  };
}
