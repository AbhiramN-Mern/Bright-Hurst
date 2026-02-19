import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "OUR SERVICES", href: "#features" },
  { label: "OUR PROJECTS", href: "#projects" },
  { label: "TESTIMONIALS", href: "#testimonials" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="section-container flex items-center justify-between h-16 md:h-20 px-4">
        <a href="#home" className="text-xl md:text-2xl font-display font-bold text-primary">
          LOGO
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-wider text-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold tracking-wider hover:bg-navy-light transition-colors duration-200"
          >
            CONTACT US
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in-up">
          <div className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-block text-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-navy-light transition-colors"
            >
              CONTACT US
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
