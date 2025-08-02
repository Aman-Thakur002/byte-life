import { Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroCard() {
  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This would be the actual resume URL
    link.download = 'Aman_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="glass-card rounded-3xl p-8 md:p-12 h-full transition-all duration-500 group">
      <div className="flex flex-col justify-center h-full space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-gray-400">Hello, I'm</span>
            <span className="block text-white">Aman Singh</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            Full-Stack Developer specializing in scalable backend solutions
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button 
            onClick={handleDownloadResume}
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          <Button 
            variant="outline"
            onClick={scrollToProjects}
            className="border-gray-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300"
          >
            <Eye className="mr-2 h-4 w-4" />
            View Projects
          </Button>
        </div>
      </div>
    </div>
  );
}
