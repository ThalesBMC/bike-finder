import { CircleMarker } from "react-leaflet";
import { FlowParticle } from "@/types/bike";

interface FlowParticlesProps {
  flowParticles: FlowParticle[];
  getIntensityColor: (intensity: number) => string;
}

export function FlowParticles({ flowParticles, getIntensityColor }: FlowParticlesProps) {
  return (
    <>
      {flowParticles.map((particle) => {
        const lat =
          particle.from.latitude +
          (particle.to.latitude - particle.from.latitude) * particle.progress;
        const lng =
          particle.from.longitude +
          (particle.to.longitude - particle.from.longitude) * particle.progress;

        return (
          <CircleMarker
            key={particle.id}
            center={[lat, lng]}
            radius={2}
            pathOptions={{
              fillColor: getIntensityColor(particle.intensity),
              fillOpacity: particle.opacity,
              color: "transparent",
              weight: 0,
            }}
          />
        );
      })}
    </>
  );
}

