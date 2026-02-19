import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-4">
          Shaping the UAE's future with precision &amp; passion
        </h1>
        <p className="text-sm md:text-base text-primary-foreground/80 max-w-xl mx-auto mb-8">
          Bright Hurst Contracting LLC delivers expert interior fit-out, MEP, and civil works across the UAE with a focus on quality, innovation, and integrity.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 rounded-full bg-background text-foreground font-semibold text-sm hover:bg-secondary transition-colors duration-200"
        >
          Get A Quote
        </a>
      </div>
    </section>
  );
};

export default Hero;
