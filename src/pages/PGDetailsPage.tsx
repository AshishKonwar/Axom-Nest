import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin, Star, Wifi, Car, UtensilsCrossed, Wind, Shirt, BadgeCheck,
  Phone, Heart, ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useFavorites } from "@/hooks/useFavorites";
import { pgService } from "@/services/pgService";
import { formatRent } from "@/lib/utils";
import type { PG } from "@/types";

export default function PGDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [pg, setPg] = useState<PG | null>(null);
  const [loading, setLoading] = useState(true);
  const [imgIdx, setImgIdx] = useState(0);
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    if (!id) return;
    pgService.getPGById(id).then((data) => {
      setPg(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream pt-20">
        <div className="w-10 h-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
      </div>
    );
  }

  if (!pg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-cream pt-20 gap-4">
        <p className="text-slate-500 text-lg">Property not found.</p>
        <Button onClick={() => navigate("/listings")}>Browse all PGs</Button>
      </div>
    );
  }

  const genderVariant = pg.gender === "Boys" ? "boys" : pg.gender === "Girls" ? "girls" : "mixed";
  const favorite = isFavorite(pg.id);

  const amenityIcons: Record<string, React.ReactNode> = {
    WiFi: <Wifi className="w-4 h-4" />,
    AC: <Wind className="w-4 h-4" />,
    Food: <UtensilsCrossed className="w-4 h-4" />,
    Parking: <Car className="w-4 h-4" />,
    Laundry: <Shirt className="w-4 h-4" />,
  };

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-6 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to listings
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Image gallery */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-video">
              <motion.img
                key={imgIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={pg.images[imgIdx]}
                alt={pg.title}
                className="w-full h-full object-cover"
              />
              {pg.images.length > 1 && (
                <>
                  <button
                    onClick={() => setImgIdx((i) => (i - 1 + pg.images.length) % pg.images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow hover:bg-white"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-700" />
                  </button>
                  <button
                    onClick={() => setImgIdx((i) => (i + 1) % pg.images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow hover:bg-white"
                  >
                    <ChevronRight className="w-5 h-5 text-slate-700" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {pg.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setImgIdx(i)}
                        className={`w-2 h-2 rounded-full transition-all ${i === imgIdx ? "bg-white scale-125" : "bg-white/50"}`}
                      />
                    ))}
                  </div>
                </>
              )}
              <div className="absolute top-4 left-4 flex gap-2">
                {pg.verified && (
                  <Badge variant="verified">
                    <BadgeCheck className="w-3 h-3" /> Verified
                  </Badge>
                )}
                {pg.featured && <Badge variant="featured">⭐ Featured</Badge>}
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <Badge variant={genderVariant}>{pg.gender}</Badge>
              </div>
            </div>

            {/* Thumbnail strip */}
            {pg.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {pg.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className={`shrink-0 w-20 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      i === imgIdx ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Details */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-100">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">{pg.title}</h1>
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm mt-1">
                    <MapPin className="w-4 h-4 text-primary" />
                    {pg.address}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-100 rounded-xl px-3 py-1.5 shrink-0">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-slate-800">{pg.rating}</span>
                  <span className="text-slate-400 text-xs">({pg.reviewCount})</span>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">{pg.description}</p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Amenities</h2>
              <div className="flex flex-wrap gap-2">
                {pg.amenities.map((a) => (
                  <span
                    key={a}
                    className="flex items-center gap-1.5 bg-primary/5 text-primary border border-primary/10 rounded-full px-3 py-1.5 text-sm font-medium"
                  >
                    {amenityIcons[a] ?? <CheckCircle2 className="w-4 h-4" />}
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby */}
            {pg.nearbyPlaces && (
              <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-100">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Nearby Places</h2>
                <ul className="space-y-2">
                  {pg.nearbyPlaces.map((place) => (
                    <li key={place} className="flex items-center gap-2 text-slate-600 text-sm">
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      {place}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Rules */}
            {pg.rules && (
              <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-100">
                <h2 className="text-lg font-bold text-slate-900 mb-4">House Rules</h2>
                <ul className="space-y-2">
                  {pg.rules.map((rule) => (
                    <li key={rule} className="flex items-center gap-2 text-slate-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 sticky top-24">
              <div className="mb-1 text-slate-400 text-xs uppercase tracking-wide font-semibold">Starts from</div>
              <div className="text-3xl font-extrabold text-primary mb-1">
                {formatRent(pg.rent)}
                <span className="text-base font-normal text-slate-400">/mo</span>
              </div>
              <p className="text-slate-500 text-xs mb-5">All inclusive · No hidden charges</p>

              <div className="flex gap-2 mb-4">
                {pg.occupancy.map((o) => (
                  <span key={o} className="flex-1 text-center bg-slate-50 border border-slate-200 rounded-xl py-2 text-sm font-medium text-slate-700">
                    {o}
                  </span>
                ))}
              </div>

              <Button className="w-full mb-3" size="lg">
                <Phone className="w-4 h-4" />
                Contact Owner
              </Button>
              <Button
                variant="secondary"
                className="w-full"
                size="lg"
                onClick={() => toggleFavorite(pg.id)}
              >
                <Heart className={`w-4 h-4 ${favorite ? "fill-primary" : ""}`} />
                {favorite ? "Saved" : "Save Property"}
              </Button>

              <div className="mt-5 pt-5 border-t border-slate-100">
                <div className="text-sm font-semibold text-slate-700 mb-2">Owner</div>
                <div className="text-slate-600 text-sm">{pg.owner.name}</div>
                <div className="text-primary text-sm font-medium">{pg.owner.phone}</div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 text-sm text-slate-600">
              <BadgeCheck className="w-4 h-4 text-primary inline mr-1.5" />
              This listing is <strong className="text-primary">verified</strong> by the AxomNest team.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
