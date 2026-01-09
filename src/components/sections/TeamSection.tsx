import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import teamSahil from "@/assets/team-sahil.jpg";
import teamSean from "@/assets/team-sean.jpeg";

/**
 * TEAM DATA - Easy to update!
 */

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "Sahil",
    role: "Robotics, AI and Mechanical Engineer",
    description: "Leads rover design, electronics integration, intelligent imaging systems, and testing methodology",
    image: teamSahil,
  },
  {
    name: "Sean",
    role: "Biologist & Mechanical Engineer",
    description: "Focuses on environmental science and mechanical systems",
    image: teamSean,
  },
];

const TeamSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="team"
      className={`min-h-screen flex items-center py-24 lg:py-32 bg-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground">
            The Team
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <article
              key={index}
              className="gradient-card rounded-2xl p-6 sm:p-8 border border-border/30 shadow-card"
            >
              <div className="flex flex-col items-center text-center gap-5">
                {/* Profile Image */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-primary/20 shadow-soft">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {member.role}
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-2">
                    {member.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-sm sm:text-base text-muted-foreground mt-10 max-w-2xl mx-auto">
          <span className="font-semibold text-foreground">AquaMinds</span> is a student-led team passionate about engineering, sustainability, and real-world environmental impact.
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
