import { Station } from "@/types/bike";
import { StatsGrid } from "./StatsGrid";
import { ActivityGraph } from "./ActivityGraph";
import { Legend } from "./Legend";

interface InfoPanelProps {
  networkName: string;
  centralStations: Station[];
  totalBikes: number;
  totalEmptySlots: number;
  usagePercent: string;
  activityHistory: number[];
}

export function InfoPanel({
  networkName,
  centralStations,
  totalBikes,
  totalEmptySlots,
  usagePercent,
  activityHistory,
}: InfoPanelProps) {
  return (
    <div className="absolute top-6 left-6 z-[1000] w-96">
      <div className="bg-[#0f1420] backdrop-blur-xl rounded-2xl border border-[#2a3f5f]/50 shadow-[0_0_40px_rgba(74,158,255,0.1)] overflow-hidden">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#4a9eff] to-transparent" />

        <div className="px-6 pt-6 pb-5">
          <p className="text-xs text-[#6bb3ff] font-light tracking-[0.15em] uppercase ml-6 px-1">
            Central London
          </p>
        </div>

        <StatsGrid
          stationsCount={centralStations.length}
          totalBikes={totalBikes}
          usagePercent={usagePercent}
          totalEmptySlots={totalEmptySlots}
        />

        <div className="px-6 pb-6 pt-4 mt-4 border-t border-[#2a3f5f]/30 space-y-2.5 px-[4px] py-[4px]">
          <div className="flex items-center justify-between text-[10px] px-1">
            <span className="text-[#6b7280] font-medium">Live Data</span>
            <a
              href="https://citybik.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a9eff]/70 hover:text-[#6bb3ff] transition-colors font-medium"
            >
              CityBikes API ↗
            </a>
          </div>
          <div className="flex items-center justify-between text-[10px] px-1 py-1">
            <span className="text-[#6b7280] font-medium">Made by</span>
            <a
              href="https://github.com/thalesbmc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a9eff]/70 hover:text-[#6bb3ff] transition-colors font-medium"
            >
              Thales Brederodes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
