import { Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-section-dark text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <p className="text-secondary font-medium tracking-[0.15em] uppercase text-sm mb-4">Get In Touch</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
          Let's Build Uganda's Sovereign AI Future,{" "}
          <span className="text-secondary">Together.</span>
        </h2>
        <p className="mt-6 text-primary-foreground/70 text-lg max-w-2xl mx-auto leading-relaxed">
          Uganda has the talent, the research foundations, and the national ambition. We invite you to partner with us in creating world-class AI solutions for Africa's challenges.
        </p>
        <div className="mt-10">
          <a
            href="mailto:info@pearlailabs.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-accent-foreground font-semibold rounded-lg hover:brightness-110 transition-all text-lg"
          >
            <Mail size={20} />
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
