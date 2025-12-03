interface StatsGridProps {
  stationsCount: number;
  totalBikes: number;
  usagePercent: string;
  totalEmptySlots: number;
}

export function StatsGrid({
  stationsCount,
  totalBikes,
  usagePercent,
  totalEmptySlots,
}: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-[1px] bg-[#2a3f5f]/30">
      <div className="bg-[#0f1420] px-6 py-5 text-center">
        <p className="text-3xl font-light text-[#4a9eff] mb-1.5">
          {stationsCount}
        </p>
        <p className="text-[10px] text-[#9ca3af] uppercase tracking-wider">
          Stations
        </p>
      </div>
      <div className="bg-[#0f1420] px-6 py-5 text-center">
        <p className="text-3xl font-light text-[#4a9eff] mb-1.5">
          {totalBikes}
        </p>
        <p className="text-[10px] text-[#9ca3af] uppercase tracking-wider">
          Bikes
        </p>
      </div>
      <div className="bg-[#0f1420] px-6 py-5 text-center">
        <p className="text-3xl font-light text-[#4a9eff] mb-1.5">
          {usagePercent}%
        </p>
        <p className="text-[10px] text-[#9ca3af] uppercase tracking-wider">
          Usage
        </p>
      </div>
      <div className="bg-[#0f1420] px-6 py-5 text-center">
        <p className="text-3xl font-light text-[#4a9eff] mb-1.5">
          {totalEmptySlots}
        </p>
        <p className="text-[10px] text-[#9ca3af] uppercase tracking-wider">
          Empty Docks
        </p>
      </div>
    </div>
  );
}

