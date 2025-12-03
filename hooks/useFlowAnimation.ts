import { useState, useEffect, useRef } from "react";
import { Station, FlowParticle, StationWithActivity } from "@/types/bike";

export function useFlowAnimation(stations: Station[]) {
  const [flowParticles, setFlowParticles] = useState<FlowParticle[]>([]);
  const [pulsePhase, setPulsePhase] = useState(0);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (stations.length === 0) return;

    const centralStationsForAnimation = stations.filter((station) => {
      const latDiff = Math.abs(station.latitude - 51.5074);
      const lngDiff = Math.abs(station.longitude - -0.1278);
      return latDiff < 0.025 && lngDiff < 0.035;
    });

    const stationsWithActivity: StationWithActivity[] =
      centralStationsForAnimation.map((station) => ({
        ...station,
        activity: station.free_bikes + station.empty_slots,
        flowIntensity:
          station.empty_slots / (station.free_bikes + station.empty_slots || 1),
      }));

    const sortedStations = [...stationsWithActivity].sort(
      (a, b) => b.activity - a.activity
    );
    const topStations = sortedStations.slice(0, 200);

    const flowLines: Array<{ from: Station; to: Station; intensity: number }> =
      [];
    topStations.forEach((station) => {
      const distances = topStations
        .filter((s) => s.id !== station.id)
        .map((otherStation) => ({
          station: otherStation,
          distance: Math.sqrt(
            Math.pow(station.latitude - otherStation.latitude, 2) +
              Math.pow(station.longitude - otherStation.longitude, 2)
          ),
          avgIntensity:
            (station.flowIntensity + otherStation.flowIntensity) / 2,
        }))
        .filter((d) => d.distance < 0.015 && d.distance > 0.002)
        .sort((a, b) => a.distance - b.distance);

      const connectionCount = station.flowIntensity > 0.5 ? 5 : 3;
      distances
        .slice(0, connectionCount)
        .forEach(({ station: otherStation, avgIntensity }) => {
          if (avgIntensity > 0.25) {
            const exists = flowLines.some(
              (line) =>
                (line.from.id === station.id &&
                  line.to.id === otherStation.id) ||
                (line.from.id === otherStation.id && line.to.id === station.id)
            );
            if (!exists) {
              flowLines.push({
                from: station,
                to: otherStation,
                intensity: avgIntensity,
              });
            }
          }
        });
    });

    // Create particles
    const particles: FlowParticle[] = [];
    const maxParticles = 200;
    const particlesPerRoute = Math.max(
      1,
      Math.floor(maxParticles / flowLines.length)
    );

    flowLines.forEach((line, idx) => {
      const particleCount = Math.min(
        particlesPerRoute,
        Math.ceil(line.intensity * 3) + 1
      );
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          id: `particle-${idx}-${i}`,
          from: line.from,
          to: line.to,
          progress: i / particleCount,
          intensity: line.intensity,
          opacity: 0.5 + Math.random() * 0.5,
        });
      }
    });

    setFlowParticles(particles);

    let lastTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      setPulsePhase((prev) => (prev + delta * 2) % (Math.PI * 2));

      setFlowParticles((prevParticles) =>
        prevParticles.map((particle) => {
          const speed = 0.08 + particle.intensity * 0.15;
          let newProgress = particle.progress + speed * delta;

          if (newProgress >= 1) {
            newProgress = 0;
          }

          return {
            ...particle,
            progress: newProgress,
          };
        })
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [stations]);

  return { flowParticles, pulsePhase };
}
