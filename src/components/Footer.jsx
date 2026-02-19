import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-3">LOGO</h3>
            <p className="text-sm text-primary-foreground/70">
              Shaping the UAE's future<br />with precision &amp; passion
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-sm font-bold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Our Services", "Our Projects", "Testimonials"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, "")}`} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              {["Privacy policy", "Terms & Conditions", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Find Us */}
          <div>
            <h4 className="text-sm font-bold mb-4">Find Us</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Bright Hurst Contracting LLC<br />
              Office No. 1203, Al Shatha Tower<br />
              Dubai Internet City, Dubai, UAE<br />
              P.O. Box: 123456
            </p>
            <p className="text-sm font-bold mb-2">Social Media Links</p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="section-container px-4 py-4 text-center">
          <p className="text-xs text-primary-foreground/50">© Bright Hurst 2025. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
