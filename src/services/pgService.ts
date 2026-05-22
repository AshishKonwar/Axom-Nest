import type { PG, City, Testimonial, SearchFilters } from "@/types";

const PG_IMAGES = {
  room1: "https://images.unsplash.com/photo-1555854874-69bcdb22a7f2?w=800&auto=format&fit=crop&q=80",
  room2: "https://images.unsplash.com/photo-1522771739-848209f77b6f?w=800&auto=format&fit=crop&q=80",
  room3: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&auto=format&fit=crop&q=80",
  room4: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=80",
  room5: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop&q=80",
  room6: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&auto=format&fit=crop&q=80",
  room7: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop&q=80",
  room8: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=80",
  room9: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&auto=format&fit=crop&q=80",
  room10: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&auto=format&fit=crop&q=80",
};

const MOCK_PGS: PG[] = [
  
  {
    id: "pg-003",
    title: "Six Mile Comfort Stay",
    description: "Affordable yet comfortable PG accommodation in Six Mile area. Close to major hospitals and IT companies. Both boys and girls welcome.",
    rent: 6500,
    location: "Six Mile, Guwahati",
    city: "Guwahati",
    address: "78, Basistha Road, Six Mile, Guwahati - 781022",
    gender: "Mixed",
    images: [PG_IMAGES.room3, PG_IMAGES.room6, PG_IMAGES.room9],
    amenities: ["WiFi", "Food", "Cleaning", "Parking"],
    food: true,
    wifi: true,
    parking: true,
    ac: false,
    laundry: false,
    rating: 4.2,
    reviewCount: 67,
    verified: true,
    featured: false,
    occupancy: ["Double", "Triple"],
    owner: { name: "Bimal Kalita", phone: "+91 1111111111"  },
    nearbyPlaces: ["GNRC Hospital (0.5 km)", "Wipro Offices (1.2 km)", "Basistha Temple (2 km)"],
    rules: ["No loud music after 10 PM", "Common areas must be kept clean"],
  },
  {
    id: "pg-004",
    title: "Chandmari Executive PG",
    description: "Well-maintained executive PG in Chandmari with premium amenities. Air-conditioned rooms, daily housekeeping, and home-cooked meals.",
    rent: 11000,
    location: "Chandmari, Guwahati",
    city: "Guwahati",
    address: "23, Chandmari Main Road, Guwahati - 781003",
    gender: "Boys",
    images: [PG_IMAGES.room4, PG_IMAGES.room7, PG_IMAGES.room10],
    amenities: ["WiFi", "AC", "Food", "Laundry", "Gym", "TV", "24/7 Security"],
    food: true,
    wifi: true,
    parking: true,
    ac: true,
    laundry: true,
    rating: 4.7,
    reviewCount: 156,
    verified: true,
    featured: true,
    occupancy: ["Single"],
    owner: { name: "Deepak Borah", phone: "+91 1111111111" },
    nearbyPlaces: ["Chandmari Market (0.2 km)", "AIIMS Guwahati (3 km)", "Narengi IT Park (5 km)"],
    rules: ["No smoking inside rooms", "Visitors allowed only in common area", "Quiet hours after 11 PM"],
  },
  {
    id: "pg-005",
    title: "Dibrugarh Central PG",
    description: "Centrally located PG in Dibrugarh near tea research institutes and Dibrugarh University. Homely environment with nutritious meals.",
    rent: 6000,
    location: "AT Road, Dibrugarh",
    city: "Dibrugarh",
    address: "15, AT Road, Dibrugarh - 786001",
    gender: "Mixed",
    images: [PG_IMAGES.room5, PG_IMAGES.room8, PG_IMAGES.room1],
    amenities: ["WiFi", "Food", "Cleaning", "TV"],
    food: true,
    wifi: true,
    parking: false,
    ac: false,
    laundry: false,
    rating: 4.4,
    reviewCount: 42,
    verified: true,
    featured: false,
    occupancy: ["Single", "Double", "Triple"],
    owner: { name: "Hemanta Gogoi", phone: "+91 1111111111" },
    nearbyPlaces: ["Dibrugarh University (2 km)", "Dibrugarh Airport (10 km)", "AT Road Market (0.3 km)"],
    rules: ["No pets", "No cooking", "Monthly rent due by 5th of each month"],
  },
  {
    id: "pg-006",
    title: "Jorhat Scholar's Den",
    description: "Designed for students near Jorhat Engineering College and Assam Agricultural University. Study-friendly environment with fast WiFi.",
    rent: 5500,
    location: "Jorhat Town, Jorhat",
    city: "Jorhat",
    address: "8, Medical College Road, Jorhat - 785001",
    gender: "Boys",
    images: [PG_IMAGES.room6, PG_IMAGES.room9, PG_IMAGES.room2],
    amenities: ["WiFi", "Food", "Study Room", "Cleaning"],
    food: true,
    wifi: true,
    parking: false,
    ac: false,
    laundry: true,
    rating: 4.3,
    reviewCount: 55,
    verified: true,
    featured: false,
    occupancy: ["Double", "Triple"],
    owner: { name: "Manash Phukan", phone: "+91 1111111111" },
    nearbyPlaces: ["JEC College (1.5 km)", "Assam Agricultural University (3 km)", "Jorhat Station (4 km)"],
    rules: ["Study hours 9 PM–11 PM (mandatory quiet)", "No alcohol", "No smoking"],
  },
  {
    id: "pg-007",
    title: "Tezpur Riverside Residency",
    description: "Beautiful PG near the banks of Brahmaputra in Tezpur. Scenic views, peaceful environment, and proximity to Tezpur University.",
    rent: 5000,
    location: "Napaam, Tezpur",
    city: "Tezpur",
    address: "34, College Road, Napaam, Tezpur - 784001",
    gender: "Girls",
    images: [PG_IMAGES.room7, PG_IMAGES.room10, PG_IMAGES.room3],
    amenities: ["WiFi", "Food", "Cleaning", "Garden", "TV"],
    food: true,
    wifi: true,
    parking: false,
    ac: false,
    laundry: true,
    rating: 4.5,
    reviewCount: 38,
    verified: true,
    featured: false,
    occupancy: ["Single", "Double"],
    owner: { name: "Rupali Nath", phone: "+91 1111111111" },
    nearbyPlaces: ["Tezpur University (5 km)", "Agnigarh Hill (2 km)", "Tezpur Town (1 km)"],
    rules: ["Ladies only", "No male guests", "Gate closes at 9:30 PM"],
  },
  {
    id: "pg-008",
    title: "Silchar City Hub PG",
    description: "Modern PG accommodation in Silchar for young professionals and students. Located near NIT Silchar and Cachar district offices.",
    rent: 6800,
    location: "Rangirkhari, Silchar",
    city: "Silchar",
    address: "56, Rangirkhari Road, Silchar - 788007",
    gender: "Mixed",
    images: [PG_IMAGES.room8, PG_IMAGES.room1, PG_IMAGES.room4],
    amenities: ["WiFi", "AC", "Food", "Cleaning", "24/7 Security"],
    food: true,
    wifi: true,
    parking: true,
    ac: true,
    laundry: false,
    rating: 4.1,
    reviewCount: 29,
    verified: true,
    featured: false,
    occupancy: ["Single", "Double"],
    owner: { name: "Sanjay Das", phone: "+91 1111111111" },
    nearbyPlaces: ["NIT Silchar (2 km)", "Silchar Railway Station (3 km)", "Rangirkhari Market (0.5 km)"],
    rules: ["No pets", "Visitors by prior appointment", "Common areas to be kept clean"],
  },
  {
    id: "pg-009",
    title: "Tinsukia Oil Town PG",
    description: "Well-equipped PG near Oil India Limited offices. Popular among oil sector professionals and engineering students.",
    rent: 7000,
    location: "Town Road, Tinsukia",
    city: "Tinsukia",
    address: "90, Town Road, Tinsukia - 786125",
    gender: "Boys",
    images: [PG_IMAGES.room9, PG_IMAGES.room2, PG_IMAGES.room5],
    amenities: ["WiFi", "Food", "AC", "Parking", "TV", "Laundry"],
    food: true,
    wifi: true,
    parking: true,
    ac: true,
    laundry: true,
    rating: 4.6,
    reviewCount: 71,
    verified: true,
    featured: true,
    occupancy: ["Single", "Double"],
    owner: { name: "Kamal Baruah", phone: "+91 1111111111" },
    nearbyPlaces: ["Oil India HQ (3 km)", "Tinsukia Railway Station (1 km)", "Doomdooma Tea Garden (8 km)"],
    rules: ["No smoking inside premises", "Visitors allowed until 9 PM", "Parking by prior booking"],
  },
  {
    id: "pg-010",
    title: "Sivasagar Heritage Home",
    description: "Unique PG near the historic Sivasagar tanks and Rang Ghar. Cultural heritage environment with modern amenities.",
    rent: 5200,
    location: "AT Road, Sivasagar",
    city: "Sivasagar",
    address: "22, AT Road, Sivasagar - 785640",
    gender: "Mixed",
    images: [PG_IMAGES.room10, PG_IMAGES.room3, PG_IMAGES.room6],
    amenities: ["WiFi", "Food", "Cleaning", "TV"],
    food: true,
    wifi: true,
    parking: false,
    ac: false,
    laundry: false,
    rating: 4.0,
    reviewCount: 18,
    verified: false,
    featured: false,
    occupancy: ["Double", "Triple"],
    owner: { name: "Anita Saikia", phone: "+91 1111111111" },
    nearbyPlaces: ["Rang Ghar (2 km)", "Sivasagar Satra (1 km)", "Sivasagar College (0.8 km)"],
    rules: ["Respect historical surroundings", "No loud music", "Gate closes at 10 PM"],
  },
  {
    id: "pg-011",
    title: "North Lakhimpur Valley View",
    description: "Peaceful PG accommodation with views of the Subansiri Valley. Ideal for students of North Lakhimpur College and nearby institutions.",
    rent: 4500,
    location: "Town Area, North Lakhimpur",
    city: "North Lakhimpur",
    address: "14, College Road, North Lakhimpur - 787001",
    gender: "Girls",
    images: [PG_IMAGES.room4, PG_IMAGES.room7],
    amenities: ["WiFi", "Food", "Cleaning", "Garden"],
    food: true,
    wifi: true,
    parking: false,
    ac: false,
    laundry: true,
    rating: 4.3,
    reviewCount: 24,
    verified: true,
    featured: false,
    occupancy: ["Single", "Double", "Triple"],
    owner: { name: "Lakhi Borah", phone: "+91 1111111111" },
    nearbyPlaces: ["North Lakhimpur College (0.5 km)", "District Hospital (1 km)", "Town Market (0.7 km)"],
    rules: ["Ladies only", "No cooking in rooms", "Study atmosphere maintained"],
  },
  {
    id: "pg-012",
    title: "Noonmati Premium Stay",
    description: "Luxury PG near IOCL Noonmati Refinery. State-of-the-art amenities for refinery professionals and executives.",
    rent: 13000,
    location: "Noonmati, Guwahati",
    city: "Guwahati",
    address: "5, Noonmati Road, Guwahati - 781020",
    gender: "Boys",
    images: [PG_IMAGES.room5, PG_IMAGES.room8],
    amenities: ["WiFi", "AC", "Food", "Gym", "Swimming Pool", "Laundry", "CCTV", "24/7 Security"],
    food: true,
    wifi: true,
    parking: true,
    ac: true,
    laundry: true,
    rating: 4.9,
    reviewCount: 203,
    verified: true,
    featured: true,
    occupancy: ["Single"],
    owner: { name: "Probal Bordoloi", phone: "+91 1111111111" },
    nearbyPlaces: ["IOCL Noonmati (0.5 km)", "Guwahati Refinery (0.5 km)", "Noonmati Park (0.3 km)"],
    rules: ["Executive standards maintained", "Formal dress in common areas", "No outside food delivery after 11 PM"],
  },
];

const CITIES: City[] = [
  // {
  //   name: "Guwahati",
  //   slug: "guwahati",
  //   image: "https://images.unsplash.com/photo-1572987665223-a81c99ca26f1?w=600&auto=format&fit=crop&q=80",
  //   count: 248,
  //   state: "Assam",
  // },
  {
    name: "Guwahati",
    slug: "guwahati",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80",
    count: 249,
    state: "Assam",
  },
  {
    name: "Dibrugarh",
    slug: "dibrugarh",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80",
    count: 87,
    state: "Assam",
  },
  {
    name: "Jorhat",
    slug: "jorhat",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format&fit=crop&q=80",
    count: 63,
    state: "Assam",
  },
  {
    name: "Tezpur",
    slug: "tezpur",
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600&auto=format&fit=crop&q=80",
    count: 45,
    state: "Assam",
  },
  {
    name: "Silchar",
    slug: "silchar",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&auto=format&fit=crop&q=80",
    count: 71,
    state: "Assam",
  },
  {
    name: "Tinsukia",
    slug: "tinsukia",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600&auto=format&fit=crop&q=80",
    count: 39,
    state: "Assam",
  },
  {
    name: "Sivasagar",
    slug: "sivasagar",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600&auto=format&fit=crop&q=80",
    count: 28,
    state: "Assam",
  },
  {
    name: "North Lakhimpur",
    slug: "north-lakhimpur",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=80",
    count: 22,
    state: "Assam",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-001",
    name: "Riya Baruah",
    city: "Guwahati",
    avatar: "https://i.pravatar.cc/100?img=47",
    rating: 5,
    text: "AxomNest helped me find the perfect ladies PG in Dispur within 2 days of moving to Guwahati. The verified listings gave me confidence and the process was smooth.",
    pgName: "Dispur Heights Ladies PG",
  },
  {
    id: "t-002",
    name: "Ankur Dutta",
    city: "Dibrugarh",
    avatar: "https://i.pravatar.cc/100?img=12",
    rating: 5,
    text: "As a student from outside Assam, finding accommodation was stressful until I discovered AxomNest. Found a great PG near Dibrugarh University with all amenities I needed.",
    pgName: "Dibrugarh Central PG",
  },
  {
    id: "t-003",
    name: "Priyanka Saikia",
    city: "Jorhat",
    avatar: "https://i.pravatar.cc/100?img=29",
    rating: 4,
    text: "The filter options made it easy to find a PG within my budget. The owner was genuine and the property was exactly as shown in the photos. Highly recommend!",
    pgName: "Jorhat Scholar's Den",
  },
  {
    id: "t-004",
    name: "Deepjyoti Borah",
    city: "Guwahati",
    avatar: "https://i.pravatar.cc/100?img=8",
    rating: 5,
    text: "I was transferred to Guwahati for work and needed premium accommodation quickly. AxomNest's verified listings saved me time and the Noonmati PG is excellent.",
    pgName: "Noonmati Premium Stay",
  },
];

function simulateDelay<T>(data: T, ms = 300): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
}

export const pgService = {
  async getAllPGs(): Promise<PG[]> {
    return simulateDelay(MOCK_PGS);
  },

  async getFeaturedPGs(): Promise<PG[]> {
    return simulateDelay(MOCK_PGS.filter((pg) => pg.featured));
  },

  async getPGById(id: string): Promise<PG | null> {
    const pg = MOCK_PGS.find((p) => p.id === id) ?? null;
    return simulateDelay(pg);
  },

  async getPGsByCity(city: string): Promise<PG[]> {
    const result = MOCK_PGS.filter(
      (pg) => pg.city.toLowerCase() === city.toLowerCase()
    );
    return simulateDelay(result);
  },

  async searchPGs(query: string): Promise<PG[]> {
    const q = query.toLowerCase();
    const result = MOCK_PGS.filter(
      (pg) =>
        pg.title.toLowerCase().includes(q) ||
        pg.city.toLowerCase().includes(q) ||
        pg.location.toLowerCase().includes(q) ||
        pg.description.toLowerCase().includes(q)
    );
    return simulateDelay(result);
  },

  async filterPGs(filters: Partial<SearchFilters>): Promise<PG[]> {
    let result = [...MOCK_PGS];
    if (filters.city && filters.city !== "All") {
      result = result.filter(
        (pg) => pg.city.toLowerCase() === filters.city!.toLowerCase()
      );
    }
    if (filters.gender && filters.gender !== "All") {
      result = result.filter((pg) => pg.gender === filters.gender);
    }
    if (filters.minRent !== undefined) {
      result = result.filter((pg) => pg.rent >= filters.minRent!);
    }
    if (filters.maxRent !== undefined) {
      result = result.filter((pg) => pg.rent <= filters.maxRent!);
    }
    if (filters.amenities && filters.amenities.length > 0) {
      result = result.filter((pg) =>
        filters.amenities!.every((a) => pg.amenities.includes(a))
      );
    }
    return simulateDelay(result);
  },

  async getCities(): Promise<City[]> {
    return simulateDelay(CITIES);
  },

  async getTestimonials(): Promise<Testimonial[]> {
    return simulateDelay(TESTIMONIALS);
  },
};

export { CITIES, MOCK_PGS, TESTIMONIALS };
