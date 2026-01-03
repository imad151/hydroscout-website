import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FlaskConical, DollarSign, Leaf, Lightbulb } from "lucide-react";

const OurMissionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const values = [
    {
      icon: FlaskConical,
      title: "Scientific Integrity",
      description: "Data-driven, validated approaches grounded in peer-reviewed research",
    },
    {
      icon: DollarSign,
      title: "Accessibility",
      description: "Designed to cost a fraction of traditional monitoring equipment",
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "Non-invasive monitoring that protects the ecosystems we study",
    },
    {
      icon: Lightbulb,
      title: "Student Innovation",
      description: "Proving that impactful solutions can come from young engineers",
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="mission"
      className={`min-h-screen flex items-center py-24 lg:py-32 bg-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
            Our Mission
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="gradient-card rounded-2xl p-8 border border-border/30 shadow-card">
              <h3 className="text-lg font-semibold text-primary mb-4">Mission Statement</h3>
              <p className="text-muted-foreground leading-relaxed">
                HydroScout exists to make invisible plastic pollution visible. We are building affordable, autonomous tools that enable scientists, communities, and future innovators to detect microplastics directly in water — protecting ecosystems and human health for generations to come.
              </p>
            </div>

            <div className="gradient-card rounded-2xl p-8 border border-border/30 shadow-card">
              <h3 className="text-lg font-semibold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                We envision a future where every ocean, river, and lake is continuously monitored using accessible robotic technology. Where real-time pollution data empowers communities to take targeted action, and where clean water becomes a reality — not a privilege.
              </p>
            </div>
          </div>

          <div className="pt-8">
            <h3 className="text-lg font-semibold text-foreground mb-8">Core Values</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="gradient-card rounded-xl p-6 border border-border/30 shadow-soft hover:shadow-card transition-shadow text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
