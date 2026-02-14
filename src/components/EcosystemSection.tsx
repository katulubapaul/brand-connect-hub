import { Sprout, Compass, Microscope, HeartPulse, Mountain } from "lucide-react";

const sectors = [
  { icon: Sprout, label: "Agro-industrialization", desc: "Precision farming, AI-powered crop sorting, market intelligence." },
  { icon: Compass, label: "Tourism", desc: "Smart marketing, virtual tourism experiences, visitor management." },
  { icon: Microscope, label: "Science, Tech & Innovation", desc: "R&D acceleration and creation of new digital public infrastructure." },
  { icon: HeartPulse, label: "Health & Medicine", desc: "AI-powered diagnostics and imaging analysis for TB, malaria, and more." },
  { icon: Mountain, label: "Minerals", desc: "Geological exploration analytics and predictive maintenance." },
];

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-secondary font-medium tracking-[0.15em] uppercase text-sm mb-4">National Impact</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            A Unified AI Ecosystem for National Development
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Pearl AI Labs at UICT serves as the central node connecting sovereign infrastructure to Uganda's priority sectors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <div
              key={sector.label}
              className="bg-background rounded-xl p-8 border border-border hover:shadow-lg hover:border-secondary/40 transition-all"
            >
              <sector.icon className="text-secondary mb-4" size={28} />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{sector.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{sector.desc}</p>
            </div>
          ))}
        </div>

        {/* Talent Pipeline */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Building Uganda's Next Generation of AI Leaders
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stage: "Stage 1", title: "Collaborate & Train", desc: "UICT students and researchers work alongside our experts on flagship projects." },
              { stage: "Stage 2", title: "Develop & Innovate", desc: "Talent is skilled in building core foundational AI and robotics solutions." },
              { stage: "Stage 3", title: "Deploy & Lead", desc: "Graduates become top-tier AI engineers, researchers, and founders driving innovation." },
            ].map((item, i) => (
              <div key={item.stage} className="relative bg-background rounded-xl p-8 border border-border text-center">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-secondary/20 text-secondary rounded-full">
                  {item.stage}
                </span>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-secondary" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
