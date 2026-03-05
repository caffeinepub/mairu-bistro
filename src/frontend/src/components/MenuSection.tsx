import { type Variants, motion } from "motion/react";

const dishes = [
  {
    id: 1,
    name: "Peri Peri Chicken Pizza",
    descriptor: "Fiery, tangy, irresistible",
    image: "/assets/generated/skysalt-pizza.dim_600x600.jpg",
    tag: "Signature",
  },
  {
    id: 2,
    name: "Chicken Dim Sum",
    descriptor: "Steamed to perfection",
    image: "/assets/generated/skysalt-dimsum.dim_600x600.jpg",
    tag: "Popular",
  },
  {
    id: 3,
    name: "White Sauce Pasta",
    descriptor: "Creamy, rich, comforting",
    image: "/assets/generated/skysalt-pasta-white.dim_600x600.jpg",
    tag: "Vegetarian",
  },
  {
    id: 4,
    name: "Jalapeño Kebabs",
    descriptor: "Bold spice, tender bite",
    image: "/assets/generated/skysalt-kebabs.dim_600x600.jpg",
    tag: "Spicy",
  },
  {
    id: 5,
    name: "Alfredo Penne Pasta",
    descriptor: "Classic Italian soul",
    image: "/assets/generated/skysalt-alfredo.dim_600x600.jpg",
    tag: "Chef's Pick",
  },
  {
    id: 6,
    name: "Mocha",
    descriptor: "The perfect ending",
    image: "/assets/generated/skysalt-mocha.dim_600x600.jpg",
    tag: "Drinks",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function MenuSection() {
  return (
    <section
      id="menu"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "oklch(0.09 0.010 55)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-terracotta/30" />
            <span className="eyebrow">What We Serve</span>
            <div className="h-px w-10 bg-terracotta/30" />
          </div>
          <h2
            className="heading-section font-playfair font-bold text-foreground mb-4 text-balance"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.75rem)" }}
          >
            Our Signature Dishes
          </h2>
          <p className="font-dm text-muted-foreground max-w-md mx-auto text-sm md:text-base">
            Every dish is crafted with fresh ingredients and balanced flavors —
            food that speaks to the soul.
          </p>
          <div className="section-rule max-w-[100px] mx-auto mt-7" />
        </motion.div>

        {/* Dishes grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {dishes.map((dish) => (
            <motion.article
              key={dish.id}
              variants={cardVariants}
              data-ocid={`menu.item.${dish.id}`}
              whileHover={{ scale: 1.025, y: -6 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="group bg-surface border border-luxury rounded-sm overflow-hidden cursor-default relative"
              style={{
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              }}
            >
              {/* Left-edge terracotta inset on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-terracotta/0 group-hover:bg-terracotta/70 transition-all duration-400 z-10 rounded-l-sm" />

              {/* Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                  style={{
                    transition:
                      "transform 0.75s cubic-bezier(0.25, 0.1, 0.25, 1)",
                    transform: "scale(1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1.07)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1)";
                  }}
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                {/* Tag badge */}
                <span className="absolute top-3 left-3 font-dm text-[10px] font-semibold px-2.5 py-1 bg-black/70 backdrop-blur-sm text-white/75 border border-white/10 rounded-sm tracking-widest uppercase">
                  {dish.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 pb-6 relative">
                {/* Editorial index number — background motif */}
                <span className="card-index absolute bottom-2 right-3 leading-none select-none pointer-events-none">
                  {String(dish.id).padStart(2, "0")}
                </span>

                <h3
                  className="font-playfair font-semibold text-foreground leading-tight mb-2 text-balance"
                  style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)" }}
                >
                  {dish.name}
                </h3>
                <p
                  className="font-dm text-muted-foreground/70 leading-snug"
                  style={{ fontSize: "0.8rem", fontStyle: "italic" }}
                >
                  {dish.descriptor}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="font-dm text-muted-foreground text-sm mb-4">
            And many more seasonal favorites at Sky Salt Cafe &amp; Bistro
          </p>
          <button
            type="button"
            onClick={() => {
              document
                .querySelector("#reservation")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-dm text-sm font-medium px-7 py-3 border border-luxury text-muted-foreground rounded-sm hover:border-terracotta hover:text-terracotta transition-all duration-200"
          >
            Reserve Your Table →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
