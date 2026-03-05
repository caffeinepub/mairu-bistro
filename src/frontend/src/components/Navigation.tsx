import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about", ocid: "nav.about.link" },
  { label: "Menu", href: "#menu", ocid: "nav.menu.link" },
  { label: "Experience", href: "#experience", ocid: "nav.experience.link" },
  { label: "Reviews", href: "#reviews", ocid: "nav.reviews.link" },
  { label: "Gallery", href: "#gallery", ocid: "nav.gallery.link" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-luxury shadow-[0_4px_32px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              type="button"
              data-ocid="nav.home.link"
              onClick={() => handleNavClick("#hero")}
              className="flex items-center gap-3 group"
            >
              <div className="flex flex-col items-center">
                <div className="h-px w-5 bg-terracotta group-hover:w-7 transition-all duration-300" />
                <div className="h-px w-7 bg-terracotta/50 mt-0.5 group-hover:w-5 transition-all duration-300" />
              </div>
              <span className="font-playfair text-xl md:text-2xl text-foreground font-semibold tracking-wide">
                Sky Salt
              </span>
            </button>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid={link.ocid}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-dm text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-terracotta group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <button
                type="button"
                data-ocid="nav.reserve.link"
                onClick={() => handleNavClick("#reservation")}
                className="font-dm text-sm font-semibold px-5 py-2.5 rounded-sm bg-terracotta text-white hover:bg-terracotta/85 transition-all duration-200 tracking-wide"
              >
                Reserve
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              className="fixed top-0 right-0 bottom-0 w-72 bg-surface z-50 md:hidden flex flex-col pt-20 pb-8 px-6 border-l border-luxury"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <button
                type="button"
                className="absolute top-5 right-5 p-2 text-foreground"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>

              <div className="flex items-center gap-3 mb-8">
                <div className="flex flex-col">
                  <div className="h-px w-5 bg-terracotta" />
                  <div className="h-px w-7 bg-terracotta/50 mt-0.5" />
                </div>
                <span className="font-playfair text-xl text-foreground font-semibold">
                  Sky Salt
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <button
                  type="button"
                  data-ocid="nav.about.link"
                  onClick={() => handleNavClick("#about")}
                  className="font-dm text-base font-medium py-3 px-4 rounded-sm text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors duration-200 text-left"
                >
                  About
                </button>
                <button
                  type="button"
                  data-ocid="nav.menu.link"
                  onClick={() => handleNavClick("#menu")}
                  className="font-dm text-base font-medium py-3 px-4 rounded-sm text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors duration-200 text-left"
                >
                  Menu
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick("#experience")}
                  className="font-dm text-base font-medium py-3 px-4 rounded-sm text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors duration-200 text-left"
                >
                  Experience
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick("#reviews")}
                  className="font-dm text-base font-medium py-3 px-4 rounded-sm text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors duration-200 text-left"
                >
                  Reviews
                </button>
                <button
                  type="button"
                  data-ocid="nav.gallery.link"
                  onClick={() => handleNavClick("#gallery")}
                  className="font-dm text-base font-medium py-3 px-4 rounded-sm text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors duration-200 text-left"
                >
                  Gallery
                </button>
                <button
                  type="button"
                  data-ocid="nav.reserve.link"
                  onClick={() => handleNavClick("#reservation")}
                  className="font-dm text-base font-semibold py-3 px-4 rounded-sm bg-terracotta text-white mt-4 text-center transition-colors duration-200"
                >
                  Reserve a Table
                </button>
              </div>

              <div className="mt-auto pt-8 border-t border-luxury">
                <p className="font-dm text-xs text-muted-foreground">
                  Road No. 36, CBI Colony
                  <br />
                  Jubilee Hills, Hyderabad
                </p>
                <a
                  href="tel:+918919296510"
                  className="font-dm text-xs text-terracotta mt-1 block hover:text-terracotta/80 transition-colors"
                >
                  +91 89192 96510
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
