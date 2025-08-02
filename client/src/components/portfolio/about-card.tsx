import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AboutCard() {
  const skills = ["Node.js", "React.js", "MySQL", "MongoDB"];

  return (
    <div id="about" className="glass-card rounded-3xl p-8 h-full transition-all duration-500 group">
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <User className="text-gray-500" size={24} />
          <h2 className="text-2xl font-bold">About Me</h2>
        </div>
        <div className="space-y-4 text-gray-400 leading-relaxed">
          <p>
            Full-Stack Developer with a strong backend focus and 1+ year of experience designing and building scalable, high-performance web applications. I specialize in Node.js, Express.js, MySQL, MongoDB, and React.js.
          </p>
          <p>
            My expertise includes RESTful API design, authentication systems, CI/CD pipelines, and performance optimization. I'm passionate about delivering efficient solutions and contributing to innovative projects that solve real-world problems.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-gray-800 text-gray-300">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
