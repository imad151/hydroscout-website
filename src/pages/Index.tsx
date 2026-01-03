import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import OurMissionSection from "@/components/sections/OurMissionSection";
import ProblemSection from "@/components/sections/ProblemSection";
import TechnologySection from "@/components/sections/TechnologySection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TeamSection from "@/components/sections/TeamSection";
import ImpactFutureSection from "@/components/sections/ImpactFutureSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import ProjectStatusSection from "@/components/sections/ProjectStatusSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>
      
      <Navigation />
      
      <main id="main-content" className="flex-1">
        <HeroSection />
        <OurMissionSection />
        <ProblemSection />
        <TechnologySection />
        <HowItWorksSection />
        <TeamSection />
        <ImpactFutureSection />
        <GallerySection />
        <ContactSection />
        <ProjectStatusSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
