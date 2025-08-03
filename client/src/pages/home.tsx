import { Navigation } from "@/components/portfolio/navigation";
import { BackgroundAnimation } from "@/components/portfolio/background-animation";
import { HeroCard } from "@/components/portfolio/hero-card";
import { StatusCard } from "@/components/portfolio/status-card";
import { LocationCard } from "@/components/portfolio/location-card";
import { AboutCard } from "@/components/portfolio/about-card";
import { SocialCard } from "@/components/portfolio/social-card";
import { ExperienceCard } from "@/components/portfolio/experience-card";
import { ProjectCard } from "@/components/portfolio/project-card";
import { SkillsCard } from "@/components/portfolio/skills-card";
import { MetricsCard } from "@/components/portfolio/metrics-card";
import { ContactCard } from "@/components/portfolio/contact-card";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Project } from "@/types/portfolio";

export default function Home() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
    queryFn: async () => {
      const res = await apiRequest("GET", "/api/projects");
      return res.json();
    },
  });

  return (
    <div className="min-h-screen bg-gradient-portfolio text-white overflow-x-hidden">
      <BackgroundAnimation />
      
      <div className="relative z-10">
        <Navigation />
        
        <main className="px-6 md:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
              {/* Hero Card - spans 2 columns and 2 rows on large screens */}
              <div className="md:col-span-2 lg:col-span-2 lg:row-span-2">
                <HeroCard />
              </div>
              
              {/* Status Card */}
              <div className="md:col-span-1 lg:col-span-1">
                <StatusCard />
              </div>
              
              {/* Location Card */}
              <div className="md:col-span-1 lg:col-span-1">
                <LocationCard />
              </div>
              
              {/* About Card - spans 3 columns */}
              <div className="md:col-span-2 lg:col-span-3">
                <AboutCard />
              </div>
              
              {/* Social Card */}
              <div className="md:col-span-1 lg:col-span-1">
                <SocialCard />
              </div>
              
              {/* Experience Card - spans full width */}
              <div className="md:col-span-2 lg:col-span-4">
                <ExperienceCard />
              </div>
              
              {/* Project Cards - 2 columns each */}
              {isLoading
                ? "Loading projects..."
                : projects?.map((project) => (
                    <div className="md:col-span-1 lg:col-span-2" key={project.id}>
                      <ProjectCard project={project} />
                    </div>
                  ))}
              
              {/* Skills Card - 2 columns */}
              <div className="md:col-span-2 lg:col-span-2">
                <SkillsCard />
              </div>
              
              {/* Metrics Card - 2 columns */}
              <div className="md:col-span-2 lg:col-span-2">
                <MetricsCard />
              </div>
              
              {/* Contact Card - spans full width */}
              <div className="md:col-span-2 lg:col-span-4">
                <ContactCard />
              </div>
            </div>
          </div>
        </main>
        
        <footer className="text-center py-8 text-gray-400">
          <p>&copy; 2024 Aman Singh. Built with passion for creating amazing experiences.</p>
        </footer>
      </div>
    </div>
  );
}
