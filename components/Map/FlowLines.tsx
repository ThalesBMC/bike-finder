import { Polyline } from "react-leaflet";
import { FlowParticle } from "@/types/bike";

interface FlowLinesProps {
  flowParticles: FlowParticle[];
  getIntensityColor: (intensity: number) => string;
}

export function FlowLines({ flowParticles, getIntensityColor }: FlowLinesProps) {
  const uniqueRoutes = new Map<
    string,
    { from: { latitude: number; longitude: number }; to: { latitude: number; longitude: number }; intensity: number }
  >();

  flowParticles.forEach((p) => {
    const key = `${p.from.id}-${p.to.id}`;
    if (!uniqueRoutes.has(key)) {
      uniqueRoutes.set(key, {
        from: p.from,
        to: p.to,
        intensity: p.intensity,
      });
    }
  });

  return (
    <>
      {Array.from(uniqueRoutes.values()).map((route, idx) => (
        <Polyline
          key={`route-${idx}`}
          positions={[
            [route.from.latitude, route.from.longitude],
            [route.to.latitude, route.to.longitude],
          ]}
          pathOptions={{
            color: getIntensityColor(route.intensity),
            weight: 1.5,
            opacity: 0.3,
            lineCap: "round",
          }}
        />
      ))}
    </>
  );
}

