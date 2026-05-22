import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const HomePage = lazy(() => import("@/pages/HomePage"));
const ListingsPage = lazy(() => import("@/pages/ListingsPage"));
const PGDetailsPage = lazy(() => import("@/pages/PGDetailsPage"));
const SearchPage = lazy(() => import("@/pages/SearchPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/RegisterPage"));
const FavoritesPage = lazy(() => import("@/pages/FavoritesPage"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
        <p className="text-slate-500 text-sm font-medium">Loading…</p>
      </div>
    </div>
  );
}

export function AppRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/listings" element={<ListingsPage />} />
            <Route path="/listings/:id" element={<PGDetailsPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
