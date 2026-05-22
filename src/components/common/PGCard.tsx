import { motion } from "framer-motion";
import { MapPin, Star, Wifi, Car, UtensilsCrossed, Heart, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useFavorites } from "@/hooks/useFavorites";
import { formatRent } from "@/lib/utils";
import type { PG } from "@/types";

interface PGCardProps {
  pg: PG;
  index?: number;
}

export function PGCard({ pg, index = 0 }: PGCardProps) { 
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(pg.id); 

  const genderVariant = pg.gender === "Boys" ? "boys" : pg.gender === "Girls" ? "girls" : "mixed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden border border-slate-100"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={pg.images[0]}
          alt={pg.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="absolute top-3 left-3 flex gap-2">
          {pg.featured && <Badge variant="featured">⭐ Featured</Badge>}
          {pg.verified && (
            <Badge variant="verified">
              <BadgeCheck className="w-3 h-3" />
              Verified
            </Badge>
          )}
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(pg.id);
          }}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
            favorite
              ? "bg-red-500 text-white shadow-lg scale-110"
              : "bg-white/90 text-slate-500 hover:text-red-500"
          }`}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart className={`w-4 h-4 ${favorite ? "fill-current" : ""}`} />
        </button>

        <div className="absolute bottom-3 left-3">
          <Badge variant={genderVariant}>{pg.gender}</Badge>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-semibold text-slate-900 leading-tight group-hover:text-primary transition-colors line-clamp-1">
            {pg.title}
          </h3>
          <div className="flex items-center gap-1 shrink-0">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-semibold text-slate-700">{pg.rating}</span>
            <span className="text-xs text-slate-400">({pg.reviewCount})</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-slate-500 text-xs mb-3">
          <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
          <span className="truncate">{pg.location}</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          {pg.wifi && (
            <span className="flex items-center gap-1 text-xs bg-slate-50 text-slate-600 px-2 py-1 rounded-full border border-slate-100">
              <Wifi className="w-3 h-3 text-primary" /> WiFi
            </span>
          )}
          {pg.food && (
            <span className="flex items-center gap-1 text-xs bg-slate-50 text-slate-600 px-2 py-1 rounded-full border border-slate-100">
              <UtensilsCrossed className="w-3 h-3 text-primary" /> Food
            </span>
          )}
          {pg.parking && (
            <span className="flex items-center gap-1 text-xs bg-slate-50 text-slate-600 px-2 py-1 rounded-full border border-slate-100">
              <Car className="w-3 h-3 text-primary" /> Parking
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <div>
            <span className="text-xs text-slate-400">Starts from</span>
            <div className="font-bold text-primary text-lg leading-tight">
              {formatRent(pg.rent)}
              <span className="text-xs font-normal text-slate-400">/mo</span>
            </div>
          </div>
          <Button asChild size="sm">
            <Link to={`/listings/${pg.id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
