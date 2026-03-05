import { Star } from "lucide-react";
import { type Variants, motion } from "motion/react";

const reviews = [
  {
    id: 1,
    name: "Priya R.",
    rating: 5,
    text: "The food is absolutely divine. The peri peri pizza was a game-changer and the outdoor seating was so romantic! Perfect place for an evening date.",
    date: "January 2025",
    initials: "PR",
  },
  {
    id: 2,
    name: "Arjun S.",
    rating: 5,
    text: "Best cafe in Jubilee Hills! The ambience is perfect for dates and the mocha is heavenly. Loved the cozy vibe and the warm string lights outside.",
    date: "February 2025",
    initials: "AS",
  },
  {
    id: 3,
    name: "Sneha M.",
    rating: 5,
    text: "Love this place! Great vibes, fresh food, and super friendly staff. The jalapeño kebabs are a must-try. Will definitely come back soon!",
    date: "March 2025",
    initials: "SM",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {(["s1", "s2", "s3", "s4", "s5"] as const).map((key, i) => (
        <Star
          key={key}
          size={11}
          className={
            i < count
              ? "text-terracotta fill-terracotta"
              : "text-muted-foreground/30"
          }
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.09 0.010 55)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-64 opacity-[0.06] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, oklch(0.60 0.14 42) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Rating hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-10 bg-terracotta/30" />
            <span className="eyebrow">What Our Guests Say</span>
            <div className="h-px w-10 bg-terracotta/30" />
          </div>

          {/* Large rating display — monumental */}
          <div className="flex items-start justify-center gap-3 mb-5">
            <span
              className="heading-editorial font-playfair text-terracotta leading-none"
              style={{ fontSize: "clamp(5.5rem, 14vw, 11rem)" }}
            >
              4.6
            </span>
            <div className="flex flex-col items-start pt-4">
              <span
                className="font-playfair text-terracotta"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                ★
              </span>
              <span className="font-dm text-[10px] tracking-[0.18em] uppercase text-muted-foreground mt-1 whitespace-nowrap">
                out of 5
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-1 mb-4">
            <StarRating count={5} />
          </div>

          <p className="font-dm text-muted-foreground text-sm tracking-wide">
            Based on{" "}
            <span className="text-foreground font-semibold">1,075</span> Google
            Reviews
          </p>

          {/* Section rule breathing space */}
          <div className="section-rule max-w-xs mx-auto mt-10" />
        </motion.div>

        {/* Reviews grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              data-ocid={`reviews.item.${review.id}`}
              className="bg-surface border border-luxury rounded-sm p-6 hover:border-terracotta/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Decorative quote mark */}
              <div className="absolute top-4 right-5 font-playfair text-6xl text-terracotta/8 font-bold leading-none select-none pointer-events-none">
                "
              </div>

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-terracotta/15 flex items-center justify-center flex-shrink-0 border border-terracotta/20">
                  <span className="font-dm text-xs font-bold text-terracotta">
                    {review.initials}
                  </span>
                </div>
                <div>
                  <p className="font-dm text-sm font-semibold text-foreground">
                    {review.name}
                  </p>
                  <p className="font-dm text-xs text-muted-foreground">
                    {review.date}
                  </p>
                </div>
                <div className="ml-auto">
                  <StarRating count={review.rating} />
                </div>
              </div>

              {/* Review text */}
              <p className="font-dm text-sm text-muted-foreground leading-[1.8]">
                {review.text}
              </p>

              {/* Bottom */}
              <div className="mt-5 pt-4 border-t border-luxury/60 flex items-center justify-between">
                <span className="font-dm text-[10px] text-muted-foreground/50 tracking-widest uppercase">
                  Google Review
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-terracotta/40" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
