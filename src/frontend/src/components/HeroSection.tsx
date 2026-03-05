import { ChevronDown, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: bgY }}>
        <img
          src="/assets/generated/skysalt-hero-bg.dim_1920x1080.jpg"
          alt="Sky Salt Cafe outdoor terrace"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Dark overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/15 px-4 py-2 rounded-full mb-8"
        >
          <Star size={13} className="text-terracotta fill-terracotta" />
          <span className="font-dm text-sm font-semibold text-terracotta">
            4.6
          </span>
          <span className="font-dm text-sm text-white/40">·</span>
          <span className="font-dm text-sm text-white/60">
            1,075 Google Reviews
          </span>
        </motion.div>

        {/* Pre-heading eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="h-px w-8 bg-terracotta/60" />
          <span className="font-dm text-xs font-semibold tracking-[0.22em] uppercase text-terracotta/90">
            Jubilee Hills, Hyderabad
          </span>
          <div className="h-px w-8 bg-terracotta/60" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            delay: 0.38,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="heading-editorial font-playfair text-white"
          style={{ fontSize: "clamp(3.2rem, 9vw, 8rem)" }}
        >
          Sky Salt
          <br />
          <span
            className="italic font-normal text-white/70"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 4.5rem)",
              letterSpacing: "0.04em",
            }}
          >
            Cafe &amp; Bistro
          </span>
        </motion.h1>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex items-center gap-5 my-8"
        >
          <div className="h-px w-16 bg-white/12" />
          <div className="w-1 h-1 rounded-full bg-terracotta opacity-70" />
          <div className="h-px w-4 bg-terracotta/50" />
          <div className="h-px w-4 bg-white/12" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="italic-pullquote text-white/55 max-w-md mb-10"
          style={{ fontSize: "clamp(1.05rem, 2.2vw, 1.4rem)" }}
        >
          A Cozy Escape for Great Food &amp; Conversations
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            type="button"
            data-ocid="hero.view_menu.button"
            onClick={() => scrollTo("#menu")}
            className="font-dm font-semibold text-base px-8 py-4 bg-terracotta text-white rounded-sm hover:bg-terracotta/85 transition-all duration-200 tracking-wide hover:-translate-y-0.5 active:translate-y-0 shadow-[0_6px_24px_rgba(194,113,79,0.35)]"
          >
            View Menu
          </button>
          <button
            type="button"
            data-ocid="hero.reserve_table.button"
            onClick={() => scrollTo("#reservation")}
            className="font-dm font-semibold text-base px-8 py-4 border border-white/35 text-white/90 rounded-sm hover:border-terracotta hover:text-terracotta transition-all duration-200 tracking-wide hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm"
          >
            Reserve a Table
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll to About"
      >
        <span className="font-dm text-[10px] tracking-widest uppercase">
          Discover
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.6,
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
