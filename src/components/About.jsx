import aboutImg from "@/assets/about-img.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <p className="section-label">About Us</p>
        <h2 className="section-title mb-10">Building Excellence, Delivering Trust</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Text */}
          <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
            <p>
              Bright Hurst Contracting LLC is a leading interior fit-out, electro-mechanical, and civil contracting company based in the UAE. With a strong commitment to quality, innovation, and integrity, we bring client visions to life through expert craftsmanship and project excellence.
            </p>
            <p>
              Founded with the vision to redefine industry standards, we pride ourselves on delivering complex projects on time, on budget, and beyond expectations.
            </p>
          </div>

          {/* Image */}
          <div className="rounded-xl overflow-hidden">
            <img src={aboutImg} alt="Construction professional" className="w-full h-72 lg:h-80 object-cover" />
          </div>

          {/* Mission / Vision */}
          <div className="space-y-6">
            <div className="bg-secondary rounded-xl p-6">
              <h3 className="text-base font-bold text-primary mb-2">MISSION</h3>
              <p className="text-sm text-muted-foreground">
                To deliver premium-quality construction and interior solutions with precision and professionalism.
              </p>
            </div>
            <div className="bg-secondary rounded-xl p-6">
              <h3 className="text-base font-bold text-primary mb-2">VISION</h3>
              <p className="text-sm text-muted-foreground">
                To be one of the most trusted and respected contracting companies in the UAE.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
