import { Eye, Cpu } from "lucide-react";
import researchImg from "@/assets/research-lab.jpg";

const MissionSection = () => {
  return (
    <section id="mission" className="py-20 md:py-32 bg-section-dark text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-secondary font-medium tracking-[0.15em] uppercase text-sm mb-4">Our Mission</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Skilling Uganda's Top Talent & Building{" "}
            <span className="text-secondary">Foundational AI</span> for Africa
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={researchImg}
              alt="Researchers working in Pearl AI Labs"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                <Eye className="text-secondary" size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-2">Pillar 1: Applied AI Research</h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  Focusing on core AI research in fields that offer Uganda the biggest technological edge — AI vision, light LLMs, enterprise AI, and data analytics. Turning research into real-world impact.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                <Cpu className="text-secondary" size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-2">Pillar 2: Industrial Robotics & AI Embodiment</h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  Conducting research on industrial-grade robotics and AI embodiment. Building the talent and technology for the next wave of automation in key sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
