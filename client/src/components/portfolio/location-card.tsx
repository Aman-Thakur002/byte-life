import { MapPin } from "lucide-react";

export function LocationCard() {
  return (
    <div className="glass-card rounded-3xl p-6 h-full transition-all duration-500 group">
      <div className="flex flex-col justify-between h-full space-y-4">
        <div className="text-3xl">
          <MapPin className="text-gray-500" size={32} />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Based in</h3>
          <p className="text-gray-400">Noida, UP</p>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
    </div>
  );
}
