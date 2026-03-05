import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { motion } from "motion/react";

export function LocationSection() {
  return (
    <section
      id="location"
      className="pt-28 pb-24 md:pt-36 md:pb-32 px-4 sm:px-6 lg:px-8 bg-background relative section-fade-top-surface"
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
            <div className="h-px w-10 bg-foreground/10" />
            <span className="eyebrow">Find Us</span>
            <div className="h-px w-10 bg-foreground/10" />
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
            className="flex flex-col gap-6"
          >
            <div className="bg-surface border border-luxury rounded-sm p-6">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                Mairu Bistro
              </h3>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-surface-elevated flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={15} className="text-olive" />
                  </div>
                  <div>
                    <p className="font-inter text-sm font-medium text-foreground mb-1">
                      Address
                    </p>
                    <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                      815-A, Road Number 41,
                      <br />
                      CBI Colony, Jubilee Hills,
                      <br />
                      Hyderabad, Telangana 500033
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-surface-elevated flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={15} className="text-olive" />
                  </div>
                  <div>
                    <p className="font-inter text-sm font-medium text-foreground mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+919107146999"
                      className="font-inter text-sm text-gold hover:text-gold/80 transition-colors"
                    >
                      +91 91071 46999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-surface-elevated flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={15} className="text-olive" />
                  </div>
                  <div>
                    <p className="font-inter text-sm font-medium text-foreground mb-1">
                      Hours
                    </p>
                    <p className="font-inter text-sm text-muted-foreground">
                      Monday – Sunday
                      <br />
                      11:00 AM – 11:45 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-luxury">
                <a
                  href="https://maps.google.com/?q=815-A+Road+Number+41+CBI+Colony+Jubilee+Hills+Hyderabad+500033"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="location.map_marker"
                  className="inline-flex items-center gap-2 font-inter text-sm font-medium text-gold hover:text-gold/80 transition-colors group"
                >
                  <Navigation size={14} />
                  Get Directions
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Services quick info */}
            <div className="grid grid-cols-3 gap-3">
              {["Dine-in", "Takeaway", "No-contact Delivery"].map((service) => (
                <div
                  key={service}
                  className="bg-surface border border-luxury rounded-sm p-3 text-center"
                >
                  <p className="font-inter text-xs text-muted-foreground leading-tight">
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
              title="Mairu Bistro Location"
              src="https://www.google.com/maps?q=815-A+Road+Number+41+CBI+Colony+Jubilee+Hills+Hyderabad+Telangana+500033&output=embed"
              width="100%"
              height="450"
              style={{
                border: 0,
                display: "block",
                filter: "invert(90%) hue-rotate(180deg)",
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
