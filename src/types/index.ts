export interface PG {
  id: string;
  title: string;
  description: string;
  rent: number;
  location: string;
  city: string;
  address: string;
  gender: "Boys" | "Girls" | "Mixed";
  images: string[];
  amenities: string[];
  food: boolean;
  wifi: boolean;
  parking: boolean;
  ac: boolean;
  laundry: boolean;
  rating: number;
  reviewCount: number;
  verified: boolean;
  featured: boolean;
  occupancy: ("Single" | "Double" | "Triple")[];
  owner: {
    name: string;
    phone: string;
  };
  nearbyPlaces?: string[];
  rules?: string[];
}

export interface City {
  name: string;
  slug: string;
  image: string;
  count: number;
  state: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  avatar: string;
  rating: number;
  text: string;
  pgName: string;
}

export interface SearchFilters {
  city: string;
  gender: string;
  minRent: number;
  maxRent: number;
  amenities: string[];
  occupancy: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
}
