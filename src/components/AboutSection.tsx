import { Brain, Database, Users, FlaskConical } from "lucide-react";

const stats = [
  { icon: FlaskConical, label: "AI Publications (2019–2024)", value: "50+" },
  { icon: Brain, label: "Research Focus Areas", value: "3" },
  { icon: Users, label: "Emerging AI Startups", value: "6+" },
  { icon: Database, label: "Key Labs & Centers", value: "4" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-secondary font-medium tracking-[0.15em] uppercase text-sm mb-4">Uganda's AI Landscape</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            A Vibrant & Growing Ecosystem
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Uganda possesses a vibrant and growing ecosystem of AI research, talent, and innovation — from Makerere University's AI Lab to emerging startups like Sunbird AI and Neexa AI.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card rounded-xl p-6 text-center border border-border hover:border-secondary/50 transition-colors"
            >
              <stat.icon className="mx-auto mb-4 text-secondary" size={32} />
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
              <p className="mt-2 text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="font-display text-lg font-semibold text-foreground mb-3 gold-underline pb-2">Data Challenge</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mt-4">
              Disintegrated digital and non-digital data sources prevent AI models from being trained effectively on national data.
            </p>
          </div>
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="font-display text-lg font-semibold text-foreground mb-3 gold-underline pb-2">Compute Gap</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mt-4">
              Small, disintegrated, and inaccessible computing resources limit researchers' processing power for cutting-edge AI.
            </p>
          </div>
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="font-display text-lg font-semibold text-foreground mb-3 gold-underline pb-2">Talent Gap</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mt-4">
              Most human capital operates at the application layer, with little foundational research being carried out locally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
