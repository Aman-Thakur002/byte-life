export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gray-600 opacity-10 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-20 w-20 h-20 bg-gray-500 opacity-5 rounded-lg animate-pulse-slow"></div>
      <div 
        className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gray-400 opacity-10 rotate-45 animate-float" 
        style={{ animationDelay: "2s" }}
      ></div>
      <div 
        className="absolute top-2/3 right-1/3 w-24 h-24 bg-gray-600 opacity-5 rounded-full animate-pulse-slow" 
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
}
