import { Github, Linkedin, Mail } from "lucide-react";

export function SocialCard() {
  const socialLinks = [
    { 
      icon: <Linkedin size={20} />, 
      label: "LinkedIn", 
      href: "https://linkedin.com/in/amanpratapsingh-dev" 
    },
    { 
      icon: <Github size={20} />, 
      label: "GitHub", 
      href: "https://github.com/Aman Thakur002" 
    },
    { 
      icon: <Mail size={20} />, 
      label: "Email", 
      href: "mailto:amandhakare337@gmail.com" 
    },
  ];

  return (
    <div className="glass-card rounded-3xl p-6 h-full transition-all duration-500 group">
      <div className="flex flex-col justify-between h-full space-y-4">
        <h3 className="text-xl font-semibold">Connect</h3>
        <div className="space-y-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300"
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
