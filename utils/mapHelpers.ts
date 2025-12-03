import { Station, StationWithActivity } from "@/types/bike";

export const MAP_CENTER: [number, number] = [51.5074, -0.1278];

export function filterCentralStations(stations: Station[]): Station[] {
  return stations.filter((station) => {
    const latDiff = Math.abs(station.latitude - 51.5074);
    const lngDiff = Math.abs(station.longitude - -0.1278);
    return latDiff < 0.025 && lngDiff < 0.035;
  });
}

export function addActivityToStations(stations: Station[]): StationWithActivity[] {
  return stations.map((station) => ({
    ...station,
    activity: station.free_bikes + station.empty_slots,
    // flowIntensity agora representa % de bikes disponíveis (não slots vazios)
    flowIntensity:
      station.free_bikes / (station.free_bikes + station.empty_slots || 1),
  }));
}

// Cores baseadas na disponibilidade de bikes
// Quanto mais azul brilhante = MAIS bikes disponíveis
export function getIntensityColor(intensity: number): string {
  if (intensity > 0.7) return "#4a9eff"; // Muitas bikes (>70%)
  if (intensity > 0.5) return "#3d7fd9"; // Bom número de bikes (50-70%)
  if (intensity > 0.3) return "#3366b3"; // Poucas bikes (30-50%)
  return "#2d4d8c"; // Muito poucas bikes (<30%)
}

export function getMarkerSize(
  activity: number,
  stationsWithActivity: StationWithActivity[]
): number {
  const maxActivity = Math.max(...stationsWithActivity.map((s) => s.activity));
  return 5 + (activity / maxActivity) * 15;
}

export function calculateUsagePercent(
  totalBikes: number,
  totalSlots: number
): string {
  const totalCapacity = totalBikes + totalSlots;
  return totalCapacity > 0
    ? ((totalBikes / totalCapacity) * 100).toFixed(1)
    : "0.0";
}

