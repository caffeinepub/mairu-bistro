import { type Variants, motion } from "motion/react";

const features = [
  {
    icon: "🌿",
    title: "Cozy Ambience",
    description:
      "Warm Edison lighting, lush botanicals, and intimate spaces designed to make every visit feel like home.",
  },
  {
    icon: "🌳",
    title: "Outdoor Garden Seating",
    description:
      "Dine under the canopy of our lush garden terrace — the perfect escape in the heart of Jubilee Hills.",
  },
  {
    icon: "☕",
    title: "Perfect for Every Occasion",
    description:
      "Lazy brunches, romantic dinners, casual catch-ups, or solo indulgence — Mairu sets the stage.",
  },
  {
    icon: "🤝",
    title: "Friendly Hospitality",
    description:
      "Our staff ensures every visit feels like a warm homecoming. You're not a guest — you're family.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="pt-28 pb-24 md:pt-36 md:pb-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden section-fade-top-surface"
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
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
            <div className="h-px w-10 bg-foreground/10" />
            <span className="eyebrow">Why Mairu</span>
            <div className="h-px w-10 bg-foreground/10" />
          </div>

          <h2 className="heading-section font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
            The Mairu Experience
          </h2>
          <p className="italic-pullquote text-base text-foreground/50 max-w-xs mx-auto">
            More than a meal — a moment worth savoring.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group bg-surface border border-luxury rounded-sm p-6 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-playfair text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-4 h-px w-0 group-hover:w-full bg-gold/30 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Ambient photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-sm group"
          >
            <img
              src="/assets/generated/ambience-outdoor.dim_800x600.jpg"
              alt="Mairu Bistro outdoor garden seating"
              className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="font-inter text-xs font-medium text-gold tracking-widest uppercase">
                Outdoor Garden
              </span>
              <p className="font-playfair text-xl text-foreground font-medium mt-1">
                Dine Under the Canopy
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative overflow-hidden rounded-sm group"
          >
            <img
              src="/assets/generated/ambience-interior.dim_800x600.jpg"
              alt="Mairu Bistro warm interior"
              className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="font-inter text-xs font-medium text-gold tracking-widest uppercase">
                Interior
              </span>
              <p className="font-playfair text-xl text-foreground font-medium mt-1">
                Warm & Intimate Inside
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
