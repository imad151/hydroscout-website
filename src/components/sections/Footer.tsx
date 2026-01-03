import { Waves } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 sm:py-16 border-t border-border/50 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <div className="flex items-center gap-2 text-primary">
            <Waves className="h-5 w-5" aria-hidden="true" />
            <span className="font-display font-semibold">AquaMinds</span>
          </div>
          
          {/* Navigation Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              Home
            </a>
            <a href="#mission" className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              Our Mission
            </a>
            <a href="#technology" className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              Technology
            </a>
            <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              Team
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              Contact
            </a>
          </nav>
          
          {/* Built for Conrad */}
          <p className="text-sm text-muted-foreground">
            Built for the Conrad Challenge
          </p>
          
          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {currentYear} AquaMinds · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
