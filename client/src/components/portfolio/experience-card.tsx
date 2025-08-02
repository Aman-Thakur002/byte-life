import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ExperienceCard() {
  const experiences = [
    {
      company: "Spirehub Softwares Pvt. Ltd",
      position: "Backend Developer",
      location: "Noida, UP",
      period: "Jul 2024 – Present",
      achievements: [
        "Developed and maintained 15+ RESTful APIs serving 500+ daily requests with 99.8% uptime",
        "Optimized database queries by 73%, reducing average latency from 450ms to 120ms",
        "Implemented Redis caching, decreasing database load by 40% and improving response times by 60%",
        "Established CI/CD pipelines reducing release times by 25%"
      ],
      technologies: ["Node.js", "Express.js", "MySQL", "Redis", "Docker"]
    }
  ];

  return (
    <div id="experience" className="glass-card rounded-3xl p-8 h-full transition-all duration-500 group">
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <Briefcase className="text-gray-500" size={24} />
          <h2 className="text-2xl font-bold">Experience</h2>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-600 pl-6 space-y-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <span className="text-gray-500 text-sm">{exp.period}</span>
              </div>
              <p className="text-gray-400 font-medium">{exp.company}</p>
              <div className="space-y-2 text-gray-400">
                {exp.achievements.map((achievement, idx) => (
                  <p key={idx}>• {achievement}</p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300 text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
