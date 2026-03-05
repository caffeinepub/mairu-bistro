import { Facebook, Instagram, Twitter } from "lucide-react";

const quickLinks = [
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
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-luxury">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-olive" />
              <span className="font-playfair text-xl text-foreground font-medium">
                Mairu Bistro
              </span>
            </div>
            <p className="italic-pullquote text-sm text-muted-foreground/70 mb-4">
              "Where Cozy Vibes Meet Flavorful Bites"
            </p>
            <p className="font-inter text-xs text-muted-foreground mb-4">
              మిరు బిస్త్రో
            </p>
            {/* LGBTQ+ badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-luxury rounded-full">
              <span className="text-sm">🏳️‍🌈</span>
              <span className="font-inter text-xs text-muted-foreground">
                LGBTQ+ Friendly
              </span>
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
                    className="font-inter text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group flex items-center gap-1.5"
                  >
                    <span className="w-0 group-hover:w-2.5 h-px bg-olive/60 transition-all duration-300 block" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="eyebrow mb-5">Contact</h4>
            <div className="flex flex-col gap-3">
              <div>
                <p className="font-inter text-xs text-muted-foreground/60 mb-0.5">
                  Address
                </p>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                  815-A, Road No. 41, CBI Colony
                  <br />
                  Jubilee Hills, Hyderabad 500033
                </p>
              </div>
              <div>
                <p className="font-inter text-xs text-muted-foreground/60 mb-0.5">
                  Phone
                </p>
                <a
                  href="tel:+919107146999"
                  className="font-inter text-sm text-gold hover:text-gold/80 transition-colors"
                >
                  +91 91071 46999
                </a>
              </div>
              <div>
                <p className="font-inter text-xs text-muted-foreground/60 mb-0.5">
                  Hours
                </p>
                <p className="font-inter text-sm text-muted-foreground">
                  Daily: 11:00 AM – 11:45 PM
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: Social */}
          <div>
            <h4 className="eyebrow mb-5">Follow Us</h4>
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-surface-elevated border border-luxury flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-gold/40 transition-all duration-200 group"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-surface-elevated border border-luxury flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-gold/40 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-surface-elevated border border-luxury flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-gold/40 transition-all duration-200"
                aria-label="X / Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>

            <div className="p-4 bg-background border border-luxury rounded-sm">
              <p className="font-inter text-xs text-muted-foreground mb-1">
                Reserve a Table
              </p>
              <a
                href="tel:+919107146999"
                className="font-inter text-sm font-medium text-gold"
              >
                +91 91071 46999
              </a>
              <p className="font-inter text-xs text-muted-foreground mt-1">
                or fill our online form
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-muted-foreground">
            © {year} Mairu Bistro. All rights reserved. · Jubilee Hills,
            Hyderabad
          </p>
          <p className="font-inter text-xs text-muted-foreground/60">
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
