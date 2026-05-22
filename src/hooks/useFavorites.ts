import { useState, useEffect } from "react";

const STORAGE_KEY = "axomnest_favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as string[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (pgId: string) => {
    setFavorites((prev) =>
      prev.includes(pgId) ? prev.filter((id) => id !== pgId) : [...prev, pgId]
    );
  };

  const isFavorite = (pgId: string) => favorites.includes(pgId);

  return { favorites, toggleFavorite, isFavorite };
}
