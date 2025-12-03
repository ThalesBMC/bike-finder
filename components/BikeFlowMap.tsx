"use client";

import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { useBikeData } from "@/hooks/useBikeData";
import { useFlowAnimation } from "@/hooks/useFlowAnimation";
import { LoadingScreen } from "./LoadingScreen";
import { ErrorScreen } from "./ErrorScreen";
import { InfoPanel } from "./InfoPanel/InfoPanel";
import { FlowLines } from "./Map/FlowLines";
import { FlowParticles } from "./Map/FlowParticles";
import { StationMarker } from "./Map/StationMarker";
import {
  MAP_CENTER,
  filterCentralStations,
  addActivityToStations,
  getIntensityColor,
  getMarkerSize,
  calculateUsagePercent,
} from "@/utils/mapHelpers";

export default function BikeFlowMap() {
  const { stations, loading, error, networkName, activityHistory } =
    useBikeData();
  const { flowParticles, pulsePhase } = useFlowAnimation(stations);

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen error={error} />;

  const centralStations = filterCentralStations(stations);
  const stationsWithActivity = addActivityToStations(centralStations);
  const sortedStations = [...stationsWithActivity].sort(
    (a, b) => b.activity - a.activity
  );

  const totalBikes = centralStations.reduce((sum, s) => sum + s.free_bikes, 0);
  const totalSlots = centralStations.reduce((sum, s) => sum + s.empty_slots, 0);
  const usagePercent = calculateUsagePercent(totalBikes, totalSlots);

  return (
    <div className="relative w-full h-screen bg-[#0a0e1a]">
      <InfoPanel
        networkName={networkName}
        centralStations={centralStations}
        totalBikes={totalBikes}
        totalEmptySlots={totalSlots}
        usagePercent={usagePercent}
        activityHistory={activityHistory}
      />

      <MapContainer
        center={MAP_CENTER}
        zoom={15}
        className="w-full h-full"
        zoomControl={false}
        maxBounds={[
          [51.48, -0.18],
          [51.54, -0.08],
        ]}
        minZoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        <ZoomControl position="bottomright" />

        {flowParticles.length > 0 && (
          <FlowLines
            flowParticles={flowParticles}
            getIntensityColor={getIntensityColor}
          />
        )}

        <FlowParticles
          flowParticles={flowParticles}
          getIntensityColor={getIntensityColor}
        />

        {sortedStations.map((station) => (
          <StationMarker
            key={station.id}
            station={station}
            size={getMarkerSize(station.activity, stationsWithActivity)}
            pulsePhase={pulsePhase}
            getIntensityColor={getIntensityColor}
          />
        ))}
      </MapContainer>
    </div>
  );
}
