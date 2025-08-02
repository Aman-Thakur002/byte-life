import { TrendingUp } from "lucide-react";

export function MetricsCard() {
  const metrics = [
    { value: "99.8%", label: "API Uptime" },
    { value: "73%", label: "Query Optimization" },
    { value: "500+", label: "Daily Requests" },
    { value: "15+", label: "RESTful APIs" }
  ];

  return (
    <div className="glass-card rounded-3xl p-8 h-full transition-all duration-500 group">
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <TrendingUp className="text-gray-500" size={24} />
          <h2 className="text-2xl font-bold">Key Achievements</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
