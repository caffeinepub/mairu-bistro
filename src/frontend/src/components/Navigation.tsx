import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reserve", href: "#reservation" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
            ? "bg-background/95 backdrop-blur-md border-b border-luxury shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              type="button"
              onClick={() => handleNavClick("#hero")}
              className="flex items-center gap-2 group"
            >
              <div className="w-2 h-2 rounded-full bg-olive group-hover:scale-125 transition-transform" />
              <span className="font-playfair text-xl md:text-2xl text-foreground font-medium tracking-wide">
                Mairu Bistro
              </span>
            </button>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, -1).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="nav.link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-inter text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <button
                type="button"
                data-ocid="nav.primary_button"
                onClick={() => handleNavClick("#reservation")}
                className="font-inter text-sm font-medium px-5 py-2.5 rounded-sm bg-gold text-background hover:bg-gold/90 transition-all duration-200 tracking-wide"
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
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
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

              <div className="flex items-center gap-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-olive" />
                <span className="font-playfair text-xl text-foreground font-medium">
                  Mairu Bistro
                </span>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    data-ocid="nav.link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`font-inter text-base font-medium py-3 px-4 rounded-sm transition-colors duration-200 tracking-wide ${
                      link.label === "Reserve"
                        ? "bg-gold text-background mt-4 text-center"
                        : "text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-luxury">
                <p className="font-inter text-xs text-muted-foreground">
                  815-A, Road No. 41
                  <br />
                  Jubilee Hills, Hyderabad
                </p>
                <p className="font-inter text-xs text-gold mt-1">
                  +91 91071 46999
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
