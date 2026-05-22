import { Link } from "react-router-dom";
import { Home, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from "lucide-react";

const CITIES = ["Guwahati", "Dibrugarh", "Jorhat", "Tezpur", "Silchar", "Tinsukia", "Sivasagar", "North Lakhimpur"];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
                <Home className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-xl text-white">
                Axom<span className="text-accent">Nest</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Find your stay, feel at home in Assam. Verified PGs, hostels and rentals across all major cities of Assam.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: "/listings", label: "Find PG" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
                { to: "/favorites", label: "Saved Properties" },
                { to: "/login", label: "Login" },
                { to: "/register", label: "Register" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Cities</h4>
            <ul className="space-y-2.5 text-sm">
              {CITIES.map((city) => (
                <li key={city}>
                  <Link
                    to={`/search?city=${city}`}
                    className="hover:text-accent transition-colors"
                  >
                    PG in {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>Dibrugarh, Assam, India — 786001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+911111111111" className="hover:text-accent transition-colors">
                  +91 11111 11111
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:hello@axomnest.com" className="hover:text-accent transition-colors">
                  dibrudigital@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AxomNest. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
