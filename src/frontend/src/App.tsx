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
            background: "oklch(0.14 0.008 60)",
            border: "1px solid oklch(0.25 0.008 60)",
            color: "oklch(0.92 0.018 80)",
            fontFamily: "Inter, system-ui, sans-serif",
          },
        }}
      />
    </div>
  );
}
