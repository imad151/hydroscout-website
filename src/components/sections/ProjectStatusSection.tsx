import { CheckCircle2, Circle, AlertCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProjectStatusSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const milestones = [
    {
      status: "complete",
      text: "Autonomous rover prototype under development",
    },
    {
      status: "complete",
      text: "Imaging and sensing systems bench-tested",
    },
    {
      status: "complete",
      text: "Dataset creation and validation in progress",
    },
    {
      status: "in-progress",
      text: "Pool and controlled field testing planned",
    },
  ];

  const getIcon = (status: string) => {
    switch (status) {
      case "complete":
        return <CheckCircle2 className="h-5 w-5 text-accent" />;
      case "in-progress":
        return <AlertCircle className="h-5 w-5 text-primary" />;
      default:
        return <Circle className="h-5 w-5 text-muted-foreground/50" />;
    }
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="status"
      className={`min-h-screen flex items-center py-24 lg:py-32 gradient-surface transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
              Project Status
            </h2>
          </div>

          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-5 rounded-xl border transition-all duration-200 ${
                  milestone.status === "complete"
                    ? "bg-accent/5 border-accent/20"
                    : milestone.status === "in-progress"
                    ? "bg-primary/5 border-primary/20"
                    : "bg-card border-border/50"
                }`}
              >
                {getIcon(milestone.status)}
                <span className={`text-base ${
                  milestone.status === "planned" 
                    ? "text-muted-foreground" 
                    : "text-foreground"
                }`}>
                  {milestone.text}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10 italic">
            HydroScout is currently in the prototype phase with ongoing testing and refinement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectStatusSection;
