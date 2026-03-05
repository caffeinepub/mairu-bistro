import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { motion } from "motion/react";

export function LocationSection() {
  return (
    <section
      id="location"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-terracotta/30" />
            <span className="eyebrow">Find Us</span>
            <div className="h-px w-10 bg-terracotta/30" />
          </div>
          <h2 className="heading-section font-playfair text-4xl sm:text-5xl font-bold text-foreground">
            Come Visit Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5"
          >
            <div className="bg-surface border border-luxury rounded-sm p-7">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                Sky Salt Cafe &amp; Bistro
              </h3>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-terracotta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={15} className="text-terracotta" />
                  </div>
                  <div>
                    <p className="font-dm text-sm font-semibold text-foreground mb-1">
                      Address
                    </p>
                    <p className="font-dm text-sm text-muted-foreground leading-relaxed">
                      Road No. 36, CBI Colony,
                      <br />
                      Jubilee Hills,
                      <br />
                      Hyderabad, Telangana 500033
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-terracotta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={15} className="text-terracotta" />
                  </div>
                  <div>
                    <p className="font-dm text-sm font-semibold text-foreground mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+918919296510"
                      className="font-dm text-sm text-terracotta hover:text-terracotta/80 transition-colors"
                    >
                      +91 89192 96510
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-terracotta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={15} className="text-terracotta" />
                  </div>
                  <div>
                    <p className="font-dm text-sm font-semibold text-foreground mb-1">
                      Hours
                    </p>
                    <p className="font-dm text-sm text-muted-foreground">
                      Monday – Sunday
                      <br />
                      11:00 AM – 11:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-luxury">
                <a
                  href="https://maps.google.com/?q=Sky+Salt+Cafe+Bistro+Road+No+36+CBI+Colony+Jubilee+Hills+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="location.map_marker"
                  className="inline-flex items-center gap-2 font-dm text-sm font-medium text-terracotta hover:text-terracotta/80 transition-colors group"
                >
                  <Navigation size={14} />
                  Get Directions
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="grid grid-cols-3 gap-3">
              {["Dine-in", "Takeaway", "Delivery"].map((service) => (
                <div
                  key={service}
                  className="bg-surface border border-luxury rounded-sm p-3 text-center hover:border-terracotta/40 transition-colors duration-200"
                >
                  <p className="font-dm text-xs text-muted-foreground">
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="overflow-hidden rounded-sm border border-luxury"
          >
            <iframe
              title="Sky Salt Cafe & Bistro Location"
              src="https://www.google.com/maps?q=Sky+Salt+Cafe+Bistro+Road+Number+36+CBI+Colony+Jubilee+Hills+Hyderabad+Telangana+500033&output=embed"
              width="100%"
              height="450"
              style={{
                border: 0,
                display: "block",
                filter: "invert(88%) hue-rotate(180deg) saturate(0.85)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
