export function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#0a0e1a]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#4a9eff] mx-auto mb-4"></div>
        <p className="text-[#d1d5db] text-xl font-light">
          Loading bike data...
        </p>
      </div>
    </div>
  );
}

