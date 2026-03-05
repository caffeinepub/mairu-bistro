import { Toaster } from "@/components/ui/sonner";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { FooterSection } from "./components/FooterSection";
import { GallerySection } from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { LocationSection } from "./components/LocationSection";
import { MenuSection } from "./components/MenuSection";
import { Navigation } from "./components/Navigation";
import { ReservationSection } from "./components/ReservationSection";
import { ReviewsSection } from "./components/ReviewsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <ExperienceSection />
        <ReviewsSection />
        <GallerySection />
        <ReservationSection />
        <LocationSection />
      </main>
      <FooterSection />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "oklch(0.13 0.010 55)",
            border: "1px solid oklch(0.24 0.008 55)",
            color: "oklch(0.93 0.016 78)",
            fontFamily: "'DM Sans', system-ui, sans-serif",
          },
        }}
      />
    </div>
  );
}
