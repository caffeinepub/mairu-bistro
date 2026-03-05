import { type Variants, motion } from "motion/react";

const dishes = [
  {
    id: 1,
    name: "Korean Paneer Bao",
    description: "Fluffy steamed bao with golden pan-fried paneer & sriracha",
    price: "₹₹₹",
    image: "/assets/generated/dish-korean-paneer-bao.dim_600x600.jpg",
    tag: "Signature",
  },
  {
    id: 2,
    name: "Korean Chicken Bao",
    description: "Tender braised chicken, kimchi slaw & gochujang in soft bao",
    price: "₹₹₹",
    image: "/assets/generated/dish-korean-chicken-bao.dim_600x600.jpg",
    tag: "Popular",
  },
  {
    id: 3,
    name: "Gunpowder Chicken",
    description: "Crispy chicken tossed in our signature gunpowder spice blend",
    price: "₹₹₹",
    image: "/assets/generated/dish-gunpowder-chicken.dim_600x600.jpg",
    tag: "Spicy",
  },
  {
    id: 4,
    name: "Mairu Special Fried Rice",
    description: "Wok-tossed aromatic fried rice, chef's secret recipe",
    price: "₹₹₹",
    image: "/assets/generated/dish-special-fried-rice.dim_600x600.jpg",
    tag: "Chef's Choice",
  },
  {
    id: 5,
    name: "Green Garden Pasta",
    description: "Vibrant green pesto pasta with seasonal garden vegetables",
    price: "₹₹₹",
    image: "/assets/generated/dish-green-garden-pasta.dim_600x600.jpg",
    tag: "Vegetarian",
  },
  {
    id: 6,
    name: "Berry Milkshake",
    description: "House-blended mixed berry shake with fresh cream",
    price: "₹₹",
    image: "/assets/generated/dish-berry-milkshake.dim_600x600.jpg",
    tag: "Drinks",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function MenuSection() {
  return (
    <section
      id="menu"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
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
            <span className="eyebrow">What We Serve</span>
            <div className="h-px w-10 bg-foreground/10" />
          </div>

          <h2 className="heading-section font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
            Signature Dishes
          </h2>
          <p className="font-inter text-muted-foreground max-w-md mx-auto">
            Every dish is crafted with intention — fusion flavors that tell a
            story of culture, spice, and love.
          </p>
        </motion.div>

        {/* Dishes grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {dishes.map((dish) => (
            <motion.div
              key={dish.id}
              variants={cardVariants}
              data-ocid={`menu.item.${dish.id}`}
              className="group bg-background border border-luxury rounded-sm overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                {/* Tag badge */}
                <span className="absolute top-3 left-3 font-inter text-[10px] font-semibold px-2.5 py-1 bg-background/80 backdrop-blur-sm text-muted-foreground border border-luxury rounded-sm tracking-widest uppercase">
                  {dish.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="heading-section font-playfair text-base md:text-lg font-semibold text-foreground leading-tight">
                    {dish.name}
                  </h3>
                  <span className="font-inter text-xs font-medium text-muted-foreground/70 flex-shrink-0 mt-0.5 tracking-wider">
                    {dish.price}
                  </span>
                </div>
                <p className="font-inter text-xs md:text-sm text-muted-foreground leading-[1.7]">
                  {dish.description}
                </p>
              </div>
            </motion.div>
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
          <p className="font-inter text-muted-foreground text-sm mb-4">
            And much more awaits you at Mairu Bistro
          </p>
          <button
            type="button"
            onClick={() => {
              document
                .querySelector("#reservation")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-inter text-sm font-medium px-6 py-3 border border-luxury text-muted-foreground rounded-sm hover:border-gold hover:text-gold transition-all duration-200"
          >
            Reserve Your Table →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
