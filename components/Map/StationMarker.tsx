import { CircleMarker } from "react-leaflet";
import { StationWithActivity } from "@/types/bike";
import { StationPopup } from "./StationPopup";
import { useState } from "react";

interface StationMarkerProps {
  station: StationWithActivity;
  size: number;
  pulsePhase: number;
  getIntensityColor: (intensity: number) => string;
}

export function StationMarker({
  station,
  size: baseSize,
  pulsePhase,
  getIntensityColor,
}: StationMarkerProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Reduzido de 0.3 para 0.15 - pulsação mais sutil
  const pulseIntensity =
    station.flowIntensity > 0.5 ? Math.sin(pulsePhase) * 0.3 + 1 : 1;
  const size = baseSize * pulseIntensity;

  // Reduzido de 1.5x para 1.3x no hover
  const displaySize = isHovered ? size * 1.3 : size;
  const zIndexOffset = isHovered ? 1000 : 0;

  return (
    <CircleMarker
      center={[station.latitude, station.longitude]}
      radius={displaySize}
      pathOptions={{
        fillColor: getIntensityColor(station.flowIntensity),
        fillOpacity: isHovered ? 0.85 : 0.6,
        color: getIntensityColor(station.flowIntensity),
        weight: isHovered ? 3 : station.flowIntensity > 0.6 ? 2 : 1,
        opacity: isHovered ? 1 : station.flowIntensity > 0.6 ? 0.8 : 0.4,
      }}
      eventHandlers={{
        mouseover: () => setIsHovered(true),
        mouseout: () => setIsHovered(false),
      }}
      pane={isHovered ? "markerPane" : undefined}
    >
      <StationPopup station={station} />
    </CircleMarker>
  );
}
