import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Bot, Lightbulb, Camera, DollarSign, Zap, RotateCcw, Leaf, ArrowRight } from "lucide-react";
import plasticClear from "@/assets/plastics_dual_light.jpg"
const TechnologySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const components = [
    { 
      icon: Bot, 
      title: "Autonomous Rover",
      text: "Self-navigating underwater vehicle designed for extended survey missions without human intervention" 
    },
    { 
      icon: Lightbulb, 
      title: "Dual-Light System",
      text: "Proprietary optical approach that enhances plastic visibility while filtering natural debris" 
    },
    { 
      icon: Camera, 
      title: "Onboard Processing",
      text: "Real-time image capture and intelligent analysis for immediate pollution detection" 
    },
  ];

  const benefits = [
    { icon: DollarSign, text: "Lower cost than traditional sampling" },
    { icon: Zap, text: "Faster, continuous data collection" },
    { icon: RotateCcw, text: "Scalable for repeated surveys" },
    { icon: Leaf, text: "Non-invasive monitoring" },
  ];

  const processSteps = [
    "HydroScout enters the water body autonomously",
    "Dual-light imaging captures enhanced particle data",
    "Onboard systems distinguish plastics from organic matter",
    "Geo-tagged data builds real-time pollution maps",
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="technology"
      className={`min-h-screen flex items-center py-24 lg:py-32 bg-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
              The Technology
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              HydroScout combines autonomous navigation with advanced optical sensing to detect microplastics that are invisible to the naked eye. Our dual-light imaging system differentiates plastic particles from organic sediment, enabling accurate pollution mapping across entire water bodies.
            </p>

            {/* Key Components */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Key Components</h3>
              <div className="space-y-4">
                {components.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Benefits</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/20"
                  >
                    <item.icon className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Visual + Process */}
          <div className="space-y-8">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated border border-border/30">
                <img
                  src={plasticClear}
                  alt="HydroScout technology model: rover, dual-light system, camera"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-accent/20 blur-3xl" />
            </div>

            {/* Data Flow */}
            <div className="gradient-card rounded-2xl p-6 border border-border/30 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">How Data Flows</h3>
              <div className="space-y-3">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">{index + 1}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
