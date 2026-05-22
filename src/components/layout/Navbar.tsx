import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/listings", label: "Find PG" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Home className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <span className="font-bold text-xl text-slate-900 tracking-tight block">
                Axom<span className="text-primary">Nest</span>
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate("/favorites")} title="Favorites">
              <Heart className="w-4.5 h-4.5" />
            </Button>
            <Button variant="secondary" size="sm" onClick={() => navigate("/login")}>
              Log in
            </Button>
            <Button size="sm" onClick={() => navigate("/register")}>
              Sign up
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive ? "bg-primary/10 text-primary" : "text-slate-700 hover:bg-slate-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex gap-2 pt-2 border-t border-slate-100 mt-1">
                <Button variant="secondary" size="sm" className="flex-1" onClick={() => { navigate("/login"); setMenuOpen(false); }}>
                  Log in
                </Button>
                <Button size="sm" className="flex-1" onClick={() => { navigate("/register"); setMenuOpen(false); }}>
                  Sign up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
