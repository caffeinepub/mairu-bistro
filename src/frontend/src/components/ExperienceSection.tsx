import { Lamp, Moon, Smile, UtensilsCrossed } from "lucide-react";
import { type Variants, motion } from "motion/react";

const features = [
  {
    icon: Lamp,
    title: "Outdoor Seating",
    description:
      "Dine under warm string lights surrounded by lush greenery — a romantic escape in the heart of the city.",
  },
  {
    icon: Smile,
    title: "Aesthetic Ambience",
    description:
      "Thoughtfully designed spaces with warm Edison lights and curated décor that inspire great conversations.",
  },
  {
    icon: UtensilsCrossed,
    title: "Friendly Service",
    description:
      "Warm hospitality that makes every guest feel at home. Our staff ensures every visit is memorable.",
  },
  {
    icon: Moon,
    title: "Perfect for Evenings",
    description:
      "The ideal setting for dates, catch-ups, and quiet evenings. Come as you are, stay as long as you like.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      {/* Warm ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 opacity-[0.04] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.60 0.14 42) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-terracotta/30" />
            <span className="eyebrow">Why Sky Salt</span>
            <div className="h-px w-10 bg-terracotta/30" />
          </div>
          <h2
            className="heading-section font-playfair font-bold text-foreground mb-5 text-balance"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)" }}
          >
            The Sky Salt Experience
          </h2>
          <p
            className="italic-pullquote text-foreground/45 max-w-xs mx-auto"
            style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)" }}
          >
            More than a meal — a moment worth savoring.
          </p>
          <div className="section-rule max-w-[120px] mx-auto mt-7" />
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 mb-16"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="group bg-surface border border-luxury rounded-sm p-7 hover:border-terracotta/40 hover:-translate-y-1 transition-all duration-300 flex gap-5 items-start"
              >
                <div className="w-10 h-10 rounded-sm bg-terracotta/10 flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta/20 transition-colors duration-300">
                  <Icon size={18} className="text-terracotta" />
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-dm text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 h-px w-0 group-hover:w-full bg-terracotta/30 transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Ambient photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-sm group"
          >
            <img
              src="/assets/generated/skysalt-gallery-outdoor.dim_800x600.jpg"
              alt="Sky Salt outdoor seating area"
              className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="font-dm text-xs font-semibold text-terracotta tracking-widest uppercase">
                Outdoor Terrace
              </span>
              <p className="font-playfair text-xl text-white font-medium mt-1">
                Dine Under the Stars
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative overflow-hidden rounded-sm group"
          >
            <img
              src="/assets/generated/skysalt-gallery-interior.dim_800x600.jpg"
              alt="Sky Salt cozy interior"
              className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="font-dm text-xs font-semibold text-terracotta tracking-widest uppercase">
                Interior
              </span>
              <p className="font-playfair text-xl text-white font-medium mt-1">
                Warm &amp; Intimate Inside
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
