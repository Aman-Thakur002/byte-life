export function StatusCard() {
  return (
    <div className="glass-card rounded-3xl p-6 h-full transition-all duration-500 group">
      <div className="flex flex-col justify-between h-full space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-gray-400 text-sm font-medium">Available for work</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Currently at</h3>
          <p className="text-gray-400">Spirehub Softwares</p>
          <p className="text-sm text-gray-500">Backend Developer</p>
        </div>
      </div>
    </div>
  );
}
