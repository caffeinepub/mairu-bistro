import { Clock, MapPin, Truck } from "lucide-react";
import { type Variants, motion } from "motion/react";

const fadeRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 80% 50%, oklch(0.60 0.14 42) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-terracotta/60" />
              <span className="eyebrow">Our Story</span>
            </div>

            <h2
              className="heading-editorial font-playfair text-foreground mb-3 text-balance"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.25rem)" }}
            >
              A Story of
              <br />
              Flavors &amp;{" "}
              <span className="italic font-medium text-foreground/75">
                Warmth
              </span>
            </h2>

            {/* Breathing rule between heading and body */}
            <div className="section-rule my-6 max-w-[160px]" />

            <p className="font-dm text-base md:text-lg text-muted-foreground leading-[1.9] mb-8">
              Nestled in the heart of Jubilee Hills, Sky Salt Cafe &amp; Bistro
              is a cozy retreat where great food meets an even better
              atmosphere. Whether you're unwinding after a long day, celebrating
              with loved ones, or simply enjoying a quiet evening — we've
              crafted a space that feels like home, with food that speaks to the
              soul.
            </p>

            {/* Info badges */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm bg-surface flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-terracotta" />
                </div>
                <div>
                  <p className="font-dm text-sm text-foreground font-semibold">
                    Location
                  </p>
                  <p className="font-dm text-sm text-muted-foreground">
                    Road No. 36, CBI Colony, Jubilee Hills, Hyderabad 500033
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm bg-surface flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={14} className="text-terracotta" />
                </div>
                <div>
                  <p className="font-dm text-sm text-foreground font-semibold">
                    Hours
                  </p>
                  <p className="font-dm text-sm text-muted-foreground">
                    Every Day: 11:00 AM – 11:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm bg-surface flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Truck size={14} className="text-terracotta" />
                </div>
                <div>
                  <p className="font-dm text-sm text-foreground font-semibold">
                    Services
                  </p>
                  <p className="font-dm text-sm text-muted-foreground">
                    Dine-in · Takeaway · Delivery
                  </p>
                </div>
              </div>
            </div>

            {/* Service badges */}
            <div className="flex flex-wrap gap-3">
              {["Dine-in", "Takeaway", "Delivery"].map((s) => (
                <span
                  key={s}
                  className="font-dm text-xs font-medium px-4 py-2 border border-luxury text-muted-foreground rounded-sm tracking-wide hover:border-terracotta/50 hover:text-terracotta transition-colors duration-200"
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
                src="/assets/generated/skysalt-about-bg.dim_1200x700.jpg"
                alt="Sky Salt Cafe cozy interior"
                className="w-full h-[400px] md:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-terracotta/10 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-surface border border-luxury rounded-sm p-5 shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-baseline gap-1">
                <span className="font-playfair text-4xl font-bold text-terracotta">
                  4.6
                </span>
                <span className="font-playfair text-lg text-terracotta">★</span>
              </div>
              <p className="font-dm text-xs text-muted-foreground mt-1">
                1,075 Reviews
              </p>
              <p className="font-dm text-xs text-muted-foreground">on Google</p>
            </motion.div>

            {/* Decorative corner accent */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border border-terracotta/20 rounded-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
