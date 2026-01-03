import { Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroRobot from "@/assets/hero-robot.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen gradient-surface flex items-center pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground mb-6">
                <Waves className="h-4 w-4" />
                <span className="text-sm font-medium">Environmental Monitoring Technology</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground leading-tight">
                HydroScout
              </h1>
            </div>

            <h2 className="text-2xl lg:text-3xl font-display font-medium text-primary animate-fade-up animation-delay-100">
              Real-time microplastic detection for cleaner oceans and freshwater
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-up animation-delay-200">
              HydroScout is a low-cost autonomous underwater robot that detects, classifies, and maps microplastics in water using advanced imaging and intelligent data analysis.
            </p>

            <p className="text-sm text-muted-foreground animate-fade-up animation-delay-300">
              Built by <span className="font-semibold text-foreground">AquaMinds</span> — a student-led engineering team tackling plastic pollution through accessible technology.
            </p>

            <div className="animate-fade-up animation-delay-400">
              <Button variant="hero" size="lg" asChild>
                <a href="#technology">Explore the System</a>
              </Button>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={heroRobot} 
                alt="HydroScout autonomous underwater robot for microplastic detection" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-accent/20 blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse animation-delay-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
