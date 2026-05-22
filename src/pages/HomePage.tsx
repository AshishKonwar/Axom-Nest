import { Hero } from "@/components/sections/Hero";
import { FeaturedListings } from "@/components/sections/FeaturedListings";
import { PopularLocations } from "@/components/sections/PopularLocations";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedListings />
      <PopularLocations />
      <Testimonials />
      <CTASection />
    </>
  );
}
