import { Navigation2, Eye, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const steps = [
    {
      icon: Navigation2,
      title: "Survey",
      description: "HydroScout navigates through water autonomously, following pre-programmed routes or adapting to environmental conditions. The rover captures continuous visual data across the entire survey area.",
      details: "Covers areas traditional sampling would miss",
      step: "01",
    },
    {
      icon: Eye,
      title: "Detect",
      description: "The dual-light imaging system illuminates particles at specific wavelengths, making plastic fragments stand out against organic matter. This reduces false positives common in other detection methods.",
      details: "Distinguishes plastics from natural debris",
      step: "02",
    },
    {
      icon: MapPin,
      title: "Map",
      description: "Geo-tagged detection data is compiled into pollution maps that reveal hotspots and concentration patterns. Repeated surveys track how pollution moves and changes over time.",
      details: "Enables targeted cleanup and research",
      step: "03",
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="how-it-works"
      className={`min-h-screen flex items-center py-24 lg:py-32 gradient-surface transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined three-step process transforms raw underwater footage into actionable pollution intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="gradient-card rounded-2xl p-8 h-full border border-border/30 shadow-soft transition-all duration-300 group-hover:shadow-card group-hover:-translate-y-1">
                {/* Step number */}
                <div className="absolute top-6 right-6 text-6xl font-display font-bold text-primary/10">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl gradient-ocean flex items-center justify-center mb-6 shadow-soft">
                  <step.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>
                <p className="text-sm font-medium text-primary">
                  {step.details}
                </p>
              </div>

              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 w-12 lg:w-16 h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
