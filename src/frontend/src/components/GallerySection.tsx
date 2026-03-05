import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const galleryItems = [
  {
    id: 1,
    src: "/assets/generated/skysalt-gallery-outdoor.dim_800x600.jpg",
    alt: "Sky Salt outdoor seating with string lights",
    caption: "Outdoor Terrace",
  },
  {
    id: 2,
    src: "/assets/generated/skysalt-gallery-coffee.dim_600x800.jpg",
    alt: "Specialty coffee drinks at Sky Salt",
    caption: "Artisan Coffee",
  },
  {
    id: 3,
    src: "/assets/generated/skysalt-gallery-interior.dim_800x600.jpg",
    alt: "Sky Salt cozy interior ambience",
    caption: "The Interior",
  },
  {
    id: 4,
    src: "/assets/generated/skysalt-gallery-food.dim_600x800.jpg",
    alt: "Food spread at Sky Salt Cafe",
    caption: "Chef's Spread",
  },
];

export function GallerySection() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxCaption, setLightboxCaption] = useState<string>("");

  const openLightbox = (src: string, caption: string) => {
    setLightboxSrc(src);
    setLightboxCaption(caption);
  };

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
            <div className="h-px w-10 bg-terracotta/30" />
            <span className="eyebrow">Gallery</span>
            <div className="h-px w-10 bg-terracotta/30" />
          </div>
          <h2 className="heading-section font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
            Our Space &amp; Flavors
          </h2>
          <p className="italic-pullquote text-base text-foreground/50 max-w-xs mx-auto">
            Flavors, spaces, and moments to remember.
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
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
              onClick={() => openLightbox(item.src, item.caption)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Hover overlays */}
              <div className="absolute inset-0 bg-terracotta/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-playfair text-sm text-white font-medium">
                  {item.caption}
                </p>
              </div>
              {/* Corner accent */}
              <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-terracotta/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 flex-col gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxSrc(null)}
          >
            <button
              type="button"
              className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors z-10"
              onClick={() => setLightboxSrc(null)}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <motion.img
              src={lightboxSrc}
              alt={lightboxCaption}
              className="max-w-full max-h-[82vh] object-contain rounded-sm shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            />
            {lightboxCaption && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="font-dm text-sm text-white/50 tracking-wide"
              >
                {lightboxCaption}
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
