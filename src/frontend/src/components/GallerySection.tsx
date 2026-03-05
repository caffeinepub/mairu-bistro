import { X } from "lucide-react";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

const galleryItems = [
  {
    id: 1,
    src: "/assets/generated/gallery-food-spread.dim_800x600.jpg",
    alt: "Mairu Bistro food spread",
    caption: "Chef's Table Spread",
  },
  {
    id: 2,
    src: "/assets/generated/gallery-drinks.dim_800x600.jpg",
    alt: "Mairu Bistro drinks selection",
    caption: "Crafted Drinks",
  },
  {
    id: 3,
    src: "/assets/generated/ambience-outdoor.dim_800x600.jpg",
    alt: "Mairu Bistro outdoor garden seating",
    caption: "Garden Terrace",
  },
  {
    id: 4,
    src: "/assets/generated/ambience-interior.dim_800x600.jpg",
    alt: "Mairu Bistro interior ambience",
    caption: "The Interior",
  },
  {
    id: 5,
    src: "/assets/generated/dish-gunpowder-chicken.dim_600x600.jpg",
    alt: "Gunpowder Chicken",
    caption: "Gunpowder Chicken",
  },
  {
    id: 6,
    src: "/assets/generated/dish-berry-milkshake.dim_600x600.jpg",
    alt: "Berry Milkshake",
    caption: "Berry Milkshake",
  },
];

export function GallerySection() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background"
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
            <span className="eyebrow">Gallery</span>
            <div className="h-px w-10 bg-foreground/10" />
          </div>

          <h2 className="heading-section font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
            A Taste of Mairu
          </h2>
          <p className="italic-pullquote text-base text-foreground/50 max-w-xs mx-auto">
            Flavors, spaces, and moments.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="masonry-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              data-ocid={`gallery.item.${item.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
              onClick={() => setLightboxSrc(item.src)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-olive/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-playfair text-sm text-foreground font-medium">
                  {item.caption}
                </p>
              </div>
              {/* Corner accent */}
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxSrc(null)}
          >
            <button
              type="button"
              className="absolute top-4 right-4 p-2 text-white hover:text-gold transition-colors"
              onClick={() => setLightboxSrc(null)}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <motion.img
              src={lightboxSrc}
              alt="Mairu Bistro"
              className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
