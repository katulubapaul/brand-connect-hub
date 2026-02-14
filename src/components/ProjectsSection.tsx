import aiVisionImg from "@/assets/ai-vision.jpg";
import roboticsCoffeeImg from "@/assets/robotics-coffee.jpg";
import { Monitor } from "lucide-react";

const projects = [
  {
    title: "AI Vision Technology",
    description:
      "Developing novel, vision-based light LLMs that operate efficiently on edge devices, leveraging Uganda's sovereign compute infrastructure.",
    image: aiVisionImg,
  },
  {
    title: "Crop Value Addition",
    description:
      "An industrial robotics and AI vision project to automate coffee bean quality sorting, directly boosting value in a critical export sector.",
    image: roboticsCoffeeImg,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-secondary font-medium tracking-[0.15em] uppercase text-sm mb-4">Flagship Projects</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Our Blueprint for Impact
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary/50 transition-all"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl border border-border p-8 md:p-10 flex flex-col md:flex-row items-start gap-6">
          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
            <Monitor className="text-primary-foreground" size={28} />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Enterprise & Government AI Solutions
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Building bespoke AI solutions, including Small Language Models (SLMs) and chatbots, to enhance efficiency and service delivery for corporations and public institutions across Uganda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
