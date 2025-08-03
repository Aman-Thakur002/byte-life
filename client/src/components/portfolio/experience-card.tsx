import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Experience } from "@/types/portfolio";

export function ExperienceCard() {
  const { data: experiences, isLoading } = useQuery<Experience[]>({
    queryKey: ["/api/experiences"],
    queryFn: async () => {
      const res = await apiRequest("GET", "/api/experiences");
      return res.json();
    },
  });

  return (
    <div id="experience" className="glass-card rounded-3xl p-8 h-full transition-all duration-500 group">
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <Briefcase className="text-gray-500" size={24} />
          <h2 className="text-2xl font-bold">Experience</h2>
        </div>
        <div className="space-y-6">
          {isLoading
            ? "Loading experience..."
            : experiences?.map((exp) => (
                <div key={exp.id} className="border-l-2 border-gray-600 pl-6 space-y-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <span className="text-gray-500 text-sm">
                      {exp.startDate} – {exp.endDate || "Present"}
                    </span>
                  </div>
                  <p className="text-gray-400 font-medium">{exp.company}</p>
                  <div className="space-y-2 text-gray-400">
                    {exp.description.map((achievement, idx) => (
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
