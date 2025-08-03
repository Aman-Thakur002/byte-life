import { ExternalLink, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, technologies, projectUrl, githubUrl } = project;

  return (
    <div id="projects" className="glass-card rounded-3xl p-6 h-full transition-all duration-500 group">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          {(projectUrl || githubUrl) && (
            <ExternalLink 
              className="text-gray-500 hover:text-white cursor-pointer transition-colors duration-300" 
              size={20}
              onClick={() => window.open(projectUrl || githubUrl, '_blank')}
            />
          )}
        </div>
        
        {/* Project visual representation */}
        <div className="w-full h-32 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center">
          <Briefcase className="text-3xl text-gray-400" />
        </div>
        
        <div className="space-y-2">
          <p className="text-gray-400 text-sm">
            {description}
          </p>
          <div className="flex flex-wrap gap-1">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300 text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
