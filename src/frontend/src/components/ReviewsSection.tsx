import { Star } from "lucide-react";
import { type Variants, motion } from "motion/react";

const reviews = [
  {
    id: 1,
    name: "Priya S.",
    rating: 5,
    text: "The ambience is absolutely stunning! Loved the outdoor seating with all the plants. Korean Paneer Bao was a dream — perfectly fluffy and flavourful!",
    date: "January 2025",
    initials: "PS",
  },
  {
    id: 2,
    name: "Rahul M.",
    rating: 5,
    text: "Came here for a date night and it was perfect. The staff was warm, food was amazing. The lighting creates such a romantic mood. Will definitely be back!",
    date: "December 2024",
    initials: "RM",
  },
  {
    id: 3,
    name: "Ananya K.",
    rating: 4,
    text: "Great fusion food and cozy vibes. The Berry Milkshake is a must-try. Service was a tad slow but totally worth the wait. Atmosphere makes up for everything!",
    date: "February 2025",
    initials: "AK",
  },
  {
    id: 4,
    name: "Vikram T.",
    rating: 5,
    text: "Gunpowder Chicken was absolutely fire! Love the LGBTQ+ friendly atmosphere. Feels very inclusive and welcoming. One of the best bistros in Hyderabad!",
    date: "January 2025",
    initials: "VT",
  },
  {
    id: 5,
    name: "Sneha R.",
    rating: 5,
    text: "Hidden gem in Jubilee Hills. The green garden seating is magical in the evening. Highly recommend Mairu Special Fried Rice — comfort food at its finest!",
    date: "March 2025",
    initials: "SR",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {(["s1", "s2", "s3", "s4", "s5"] as const).map((key, i) => (
        <Star
          key={key}
          size={12}
          className={
            i < count ? "text-gold fill-gold" : "text-muted-foreground/30"
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
      className="pt-28 pb-24 md:pt-36 md:pb-32 px-4 sm:px-6 lg:px-8 bg-surface relative section-fade-top"
    >
      <div className="max-w-7xl mx-auto">
        {/* Rating hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-foreground/10" />
            <span className="eyebrow">What Our Guests Say</span>
            <div className="h-px w-10 bg-foreground/10" />
          </div>

          {/* Large rating — gold is appropriate here: it IS a gold star rating */}
          <div className="flex items-end justify-center gap-2 mb-3">
            <span className="heading-display font-playfair text-8xl sm:text-9xl font-bold text-gold leading-none">
              4.4
            </span>
            <span className="font-playfair text-3xl text-gold mb-3">★</span>
          </div>

          <div className="flex justify-center gap-1 mb-4">
            <StarRating count={4} />
          </div>

          <p className="font-inter text-muted-foreground text-sm tracking-wide">
            Based on{" "}
            <span className="text-foreground font-semibold">2,313</span> Google
            Reviews
          </p>
        </motion.div>

        {/* Reviews grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              data-ocid={`reviews.item.${review.id}`}
              className="bg-background border border-luxury rounded-sm p-6 hover:border-gold/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Decorative quote mark */}
              <div className="absolute top-4 right-5 font-playfair text-6xl text-gold/10 font-bold leading-none select-none pointer-events-none">
                "
              </div>

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-surface-elevated flex items-center justify-center flex-shrink-0 border border-luxury">
                  <span className="font-inter text-xs font-semibold text-gold">
                    {review.initials}
                  </span>
                </div>
                <div>
                  <p className="font-inter text-sm font-semibold text-foreground">
                    {review.name}
                  </p>
                  <p className="font-inter text-xs text-muted-foreground">
                    {review.date}
                  </p>
                </div>
                <div className="ml-auto">
                  <StarRating count={review.rating} />
                </div>
              </div>

              {/* Review text */}
              <p className="font-inter text-sm text-muted-foreground leading-[1.8]">
                {review.text}
              </p>

              {/* Bottom accent */}
              <div className="mt-5 pt-4 border-t border-luxury/60 flex items-center justify-between">
                <span className="font-inter text-[10px] text-muted-foreground/50 tracking-widest uppercase">
                  Google Review
                </span>
                <div className="w-1 h-1 rounded-full bg-olive/40" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
