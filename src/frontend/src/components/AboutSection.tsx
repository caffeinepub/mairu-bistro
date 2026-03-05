import { Clock, Heart, MapPin } from "lucide-react";
import { type Variants, motion } from "motion/react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-10 bg-olive/70" />
              <span className="eyebrow">Our Story</span>
            </div>

            <h2 className="heading-section font-playfair text-4xl sm:text-5xl md:text-[56px] text-foreground font-bold mb-3">
              A Sanctuary of
              <br />
              <span className="italic text-foreground/85">
                Flavors &amp; Warmth
              </span>
            </h2>

            <p className="font-inter text-base md:text-lg text-muted-foreground leading-[1.85] mb-8">
              Nestled in the heart of Jubilee Hills, Mairu Bistro is a sanctuary
              of flavors and warmth. Surrounded by lush greenery and dappled
              sunlight, we serve fusion comfort food crafted with love — where
              Korean-inspired baos meet Indian spices, and every plate tells a
              story. Whether you're here for a lazy brunch, a romantic dinner,
              or a casual catch-up with friends, Mairu is your place to slow
              down and savor.
            </p>

            {/* Info badges */}
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm bg-surface flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-olive" />
                </div>
                <div>
                  <p className="font-inter text-sm text-foreground font-medium">
                    Location
                  </p>
                  <p className="font-inter text-sm text-muted-foreground">
                    815-A, Road No. 41, CBI Colony, Jubilee Hills, Hyderabad
                    500033
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm bg-surface flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={14} className="text-olive" />
                </div>
                <div>
                  <p className="font-inter text-sm text-foreground font-medium">
                    Hours
                  </p>
                  <p className="font-inter text-sm text-muted-foreground">
                    11:00 AM – 11:45 PM, Every Day
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm bg-surface flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Heart size={14} className="text-olive" />
                </div>
                <div>
                  <p className="font-inter text-sm text-foreground font-medium">
                    Inclusive
                  </p>
                  <p className="font-inter text-sm text-muted-foreground">
                    🏳️‍🌈 LGBTQ+ Friendly Space
                  </p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-wrap gap-3">
              {["Dine-in", "Takeaway", "No-contact Delivery"].map((s) => (
                <span
                  key={s}
                  className="font-inter text-xs font-medium px-4 py-2 border border-luxury text-muted-foreground rounded-sm tracking-wide hover:border-olive/50 hover:text-olive transition-colors duration-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm group">
              <img
                src="/assets/generated/about-bistro.dim_800x600.jpg"
                alt="Mairu Bistro cozy interior"
                className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-surface border border-luxury rounded-sm p-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-baseline gap-1">
                <span className="font-playfair text-4xl font-bold text-gold">
                  4.4
                </span>
                <span className="font-playfair text-lg text-gold">★</span>
              </div>
              <p className="font-inter text-xs text-muted-foreground mt-1">
                2,313 Reviews
              </p>
              <p className="font-inter text-xs text-muted-foreground">
                on Google
              </p>
            </motion.div>

            {/* Decorative accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-olive/20 rounded-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
