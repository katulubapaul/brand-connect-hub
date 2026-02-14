import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Uganda's AI network visualization"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <p className="animate-fade-up text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-6">
          Accelerating Uganda's Future
        </p>
        <h1 className="animate-fade-up-delay font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto">
          Artificial Intelligence is the{" "}
          <span className="text-secondary">New Electricity</span>
        </h1>
        <p className="animate-fade-up-delay-2 mt-6 text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Pearl AI Labs is the catalyst for Uganda's unified AI ecosystem — bridging national strategy with on-the-ground implementation.
        </p>
        <div className="animate-fade-up-delay-2 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#mission"
            className="px-8 py-3 bg-secondary text-accent-foreground font-semibold rounded-lg hover:brightness-110 transition-all"
          >
            Our Mission
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary-foreground/30 text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all"
          >
            Partner With Us
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
