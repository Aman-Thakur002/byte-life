import { Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function SkillsCard() {
  const skillCategories = [
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "JWT", "Redis"]
    },
    {
      category: "Frontend", 
      skills: ["React.js", "Next.js", "Tailwind", "Redux"]
    },
    {
      category: "Database",
      skills: ["MySQL", "MongoDB", "Sequelize"]
    }
  ];

  return (
    <div className="glass-card rounded-3xl p-8 h-full transition-all duration-500 group">
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <Code className="text-gray-500" size={24} />
          <h2 className="text-2xl font-bold">Technical Skills</h2>
        </div>
        <div className="space-y-4">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <h4 className="text-sm font-semibold text-gray-400 mb-2">{category.category}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-gray-800 text-gray-300">
                    {skill}
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
