import { Facebook, Instagram, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reserve", href: "#reservation" },
];

export function FooterSection() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-surface border-t border-luxury pt-16 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-luxury">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex flex-col">
                <div className="h-px w-5 bg-terracotta" />
                <div className="h-px w-7 bg-terracotta/50 mt-0.5" />
              </div>
              <span className="font-playfair text-xl text-foreground font-semibold">
                Sky Salt
              </span>
            </div>
            <p className="italic-pullquote text-sm text-muted-foreground/70 mb-5">
              "A Cozy Escape for Great Food &amp; Conversations"
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.instagram.link"
                className="w-8 h-8 rounded-sm bg-surface-elevated border border-luxury flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-terracotta/40 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.facebook.link"
                className="w-8 h-8 rounded-sm bg-surface-elevated border border-luxury flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-terracotta/40 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-surface-elevated border border-luxury flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-terracotta/40 transition-all duration-200"
                aria-label="X / Twitter"
              >
                <Twitter size={15} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h4 className="eyebrow mb-5">Navigation</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid="footer.link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="font-dm text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group flex items-center gap-1.5"
                  >
                    <span className="w-0 group-hover:w-2.5 h-px bg-terracotta/60 transition-all duration-300 block" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="eyebrow mb-5">Contact</h4>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-dm text-xs text-muted-foreground/60 mb-0.5">
                  Address
                </p>
                <p className="font-dm text-sm text-muted-foreground leading-relaxed">
                  Road No. 36, CBI Colony
                  <br />
                  Jubilee Hills, Hyderabad 500033
                </p>
              </div>
              <div>
                <p className="font-dm text-xs text-muted-foreground/60 mb-0.5">
                  Phone
                </p>
                <a
                  href="tel:+918919296510"
                  className="font-dm text-sm text-terracotta hover:text-terracotta/80 transition-colors"
                >
                  +91 89192 96510
                </a>
              </div>
              <div>
                <p className="font-dm text-xs text-muted-foreground/60 mb-0.5">
                  Hours
                </p>
                <p className="font-dm text-sm text-muted-foreground">
                  Daily: 11:00 AM – 11:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: Reserve CTA */}
          <div>
            <h4 className="eyebrow mb-5">Reserve a Table</h4>
            <div className="p-5 bg-terracotta/10 border border-terracotta/25 rounded-sm mb-4">
              <p className="font-dm text-xs text-muted-foreground mb-2">
                Call us to book
              </p>
              <a
                href="tel:+918919296510"
                className="font-dm text-base font-bold text-terracotta"
              >
                +91 89192 96510
              </a>
              <p className="font-dm text-xs text-muted-foreground mt-1.5">
                or fill our online form above
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Dine-in", "Takeaway", "Delivery"].map((s) => (
                <span
                  key={s}
                  className="font-dm text-[10px] font-medium px-2.5 py-1 border border-luxury text-muted-foreground/60 rounded-sm tracking-wide"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-dm text-xs text-muted-foreground">
            © {year} Sky Salt Cafe &amp; Bistro. All rights reserved. · Jubilee
            Hills, Hyderabad
          </p>
          <p className="font-dm text-xs text-muted-foreground/60">
            Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
