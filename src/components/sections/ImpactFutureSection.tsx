import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, TrendingUp, Globe, Users } from "lucide-react";

const ImpactFutureSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const roadmapPhases = [
    { label: "Phase 1", description: "Research & Design", completed: true },
    { label: "Phase 2", description: "Prototype Development", current: true },
    { label: "Phase 3", description: "Field Testing" },
    { label: "Phase 4", description: "Pilot Deployments" },
  ];

  const impactStats = [
    {
      icon: Globe,
      stat: "8M+ tons",
      label: "of plastic enter oceans annually",
    },
    {
      icon: TrendingUp,
      stat: "90%",
      label: "of water bodies contain microplastics",
    },
    {
      icon: Users,
      stat: "3B+",
      label: "people rely on contaminated water sources",
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="impact"
      className={`min-h-screen flex items-center py-24 lg:py-32 bg-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
              Impact & Future
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              HydroScout aims to transform environmental research by providing accessible, real-time microplastic monitoring. By democratizing water quality data, we support conservation efforts, scientific research, and community-led initiatives worldwide.
            </p>
          </div>

          {/* Impact Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {impactStats.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-secondary/50 border border-border/50"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-display font-bold text-foreground mb-1">
                  {item.stat}
                </div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Roadmap */}
          <div>
            <h3 className="text-lg font-semibold text-center text-foreground mb-10">
              Development Roadmap
            </h3>
            
            {/* Desktop Roadmap */}
            <div className="hidden md:flex items-center justify-between gap-2">
              {roadmapPhases.map((phase, index) => (
                <div key={index} className="flex items-center flex-1">
                  <div
                    className={`flex-1 text-center p-5 rounded-xl border transition-all ${
                      phase.current
                        ? "bg-primary/10 border-primary/30 shadow-card"
                        : phase.completed
                        ? "bg-accent/10 border-accent/30"
                        : "bg-card border-border/50"
                    }`}
                  >
                    <div
                      className={`text-sm font-bold mb-1 ${
                        phase.current
                          ? "text-primary"
                          : phase.completed
                          ? "text-accent"
                          : "text-muted-foreground"
                      }`}
                    >
                      {phase.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {phase.description}
                    </div>
                  </div>
                  {index < roadmapPhases.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-muted-foreground/50 mx-1 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Roadmap */}
            <div className="md:hidden space-y-3">
              {roadmapPhases.map((phase, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border ${
                    phase.current
                      ? "bg-primary/10 border-primary/30"
                      : phase.completed
                      ? "bg-accent/10 border-accent/30"
                      : "bg-card border-border/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        phase.current
                          ? "bg-primary text-primary-foreground"
                          : phase.completed
                          ? "bg-accent text-accent-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <div
                        className={`font-semibold ${
                          phase.current
                            ? "text-primary"
                            : phase.completed
                            ? "text-accent"
                            : "text-foreground"
                        }`}
                      >
                        {phase.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {phase.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactFutureSection;
