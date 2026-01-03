import { AlertTriangle, Clock, Satellite, TrendingDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const problems = [
    {
      icon: Clock,
      title: "Slow & Expensive",
      text: "Traditional water sampling requires laboratory analysis that takes weeks and costs $500–$2,000 per sample, limiting how often and where monitoring can occur.",
    },
    {
      icon: Satellite,
      title: "Coverage Gaps",
      text: "Fixed sensors monitor single points while satellites can't detect particles smaller than several millimeters — missing the microplastics that pose the greatest threat.",
    },
    {
      icon: AlertTriangle,
      title: "Reactive Response",
      text: "Without real-time data, cleanup efforts target areas based on assumptions rather than evidence, wasting resources and missing critical pollution zones.",
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="problem"
      className={`min-h-screen flex items-center py-24 lg:py-32 gradient-surface transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
              The Problem
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Microplastic pollution affects every major water body on Earth, yet our ability to monitor it remains stuck in the past. Current methods leave researchers, policymakers, and communities flying blind.
            </p>

            {/* Context stat */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-destructive/10 border border-destructive/20">
              <TrendingDown className="h-5 w-5 text-destructive" />
              <span className="text-sm font-medium text-foreground">
                Less than 1% of global water bodies are regularly monitored for microplastics
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="gradient-card rounded-2xl p-6 border border-border/30 shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center mb-5">
                  <problem.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
