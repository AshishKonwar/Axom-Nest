# AxomNest — Find your stay, feel at home in Assam

A production-ready PG (Paying Guest) finder web application built with React + Vite + TypeScript, focused on Assam, India.

## Features

- **9 pages**: Home, Listings, PG Details, Search, Contact, About, Login, Register, Favorites
- **Mock API service** with 12 PG listings across 8 Assam cities
- **Favorites system** (persisted to localStorage)
- **Advanced filtering**: city, gender, rent range, sort options
- **Framer Motion animations**: hero entrance, card hover, scroll reveal, floating blobs
- **Glassmorphism design**: soft shadows, smooth gradients, floating cards
- **Responsive mobile-first layout**
- **React Router DOM v7** with lazy-loaded routes (code splitting)
- **React Hook Form** for login, register, and contact forms
- **Zero backend** — fully static, deployable anywhere

## Tech Stack

| Tool | Version |
|------|---------|
| React | 18 |
| TypeScript | 5 (strict) |
| Vite | 6 |
| Tailwind CSS | 3 |
| Framer Motion | 11 |
| React Router DOM | 7 |
| React Hook Form | 7 |
| Radix UI | latest |
| Lucide React | latest |

## Color Palette

| Role | Color |
|------|-------|
| Primary | `#0B6E4F` |
| Primary Light | `#1D8348` |
| Accent (Gold) | `#D4AF37` |
| Accent Light | `#F5E6A9` |
| Background | `#FAFAF8` |

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # TypeScript check + production build
npm run preview   # Preview production build locally
```

## Project Structure

```
src/
├── assets/              # Static assets
├── components/
│   ├── common/          # PGCard, SearchBar
│   ├── ui/              # Button, Badge, Input, Card
│   ├── layout/          # Navbar, Footer
│   └── sections/        # Hero, FeaturedListings, PopularLocations, Testimonials, CTA
├── pages/               # All 9 route pages
├── hooks/               # useFavorites, useSearch
├── lib/                 # utils (cn, formatRent)
├── services/            # pgService.ts (mock API + data)
├── types/               # TypeScript interfaces
├── styles/              # globals.css (Tailwind base + custom classes)
├── routes/              # AppRoutes (React Router v7)
└── App.tsx
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home — Hero, Featured, Cities, Testimonials, CTA |
| `/listings` | All PGs with filters and sort |
| `/listings/:id` | PG Detail with gallery, amenities, booking |
| `/search?q=&city=` | Search results |
| `/favorites` | Saved properties (localStorage) |
| `/contact` | Contact form |
| `/about` | About team and mission |
| `/login` | Login form |
| `/register` | Register (Tenant or Owner) |

## Deployment

### Netlify
```bash
npm run build
# Deploy the dist/ folder
# netlify.toml is already configured with SPA redirects
```

### Vercel
```bash
npm run build
# vercel.json is already configured
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder
# Set base in vite.config.ts: base: '/repo-name/'
```

### Any VPS / Static Host
```bash
npm run build
# Serve the dist/ folder with any static file server
# Ensure all routes redirect to index.html (SPA)
```

## Assam Cities Covered

- Guwahati (248 PGs)
- Dibrugarh (87 PGs)
- Jorhat (63 PGs)
- Tezpur (45 PGs)
- Silchar (71 PGs)
- Tinsukia (39 PGs)
- Sivasagar (28 PGs)
- North Lakhimpur (22 PGs)

---

Built with care for Assam 🌿
