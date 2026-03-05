import { ChevronDown, Star } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.jpg"
          alt="Mairu Bistro ambience"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlays for luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 bg-surface/80 backdrop-blur-sm border border-luxury px-4 py-2 rounded-full mb-8"
        >
          <Star size={14} className="text-gold fill-gold" />
          <span className="font-inter text-sm font-medium text-gold">4.4</span>
          <span className="font-inter text-sm text-muted-foreground">·</span>
          <span className="font-inter text-sm text-muted-foreground">
            2,313 Google Reviews
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <h1 className="heading-display font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-[104px] font-bold text-foreground mb-2">
            Mairu Bistro
          </h1>
          <p className="font-playfair text-lg sm:text-xl md:text-2xl text-gold/70 italic mt-1 tracking-[0.18em]">
            మిరు బిస్త్రో
          </p>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-4 my-7"
        >
          <div className="h-px w-12 bg-foreground/15" />
          <div className="w-1 h-1 rounded-full bg-olive" />
          <div className="h-px w-12 bg-foreground/15" />
        </motion.div>

        {/* Tagline — italic Playfair for the dramatic signature moment */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="italic-pullquote text-xl sm:text-2xl md:text-3xl text-foreground/70 max-w-lg mb-10"
        >
          Where Cozy Vibes Meet Flavorful Bites
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            type="button"
            data-ocid="hero.primary_button"
            onClick={() => scrollTo("#reservation")}
            className="font-inter font-medium text-base px-8 py-4 bg-gold text-background rounded-sm hover:bg-gold/90 transition-all duration-200 tracking-wide hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          >
            Reserve a Table
          </button>
          <button
            type="button"
            data-ocid="hero.secondary_button"
            onClick={() => scrollTo("#menu")}
            className="font-inter font-medium text-base px-8 py-4 border border-foreground/30 text-foreground rounded-sm hover:border-gold hover:text-gold transition-all duration-200 tracking-wide hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm"
          >
            View Menu
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll to About section"
      >
        <span className="font-inter text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
