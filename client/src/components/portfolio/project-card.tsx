import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  projectUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ 
  title, 
  description, 
  technologies, 
  icon,
  projectUrl,
  githubUrl 
}: ProjectCardProps) {
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
          <i className={`${icon} text-3xl text-gray-400`}></i>
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
