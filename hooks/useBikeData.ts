import { useState, useEffect } from "react";
import { Station, NetworkData } from "@/types/bike";

export function useBikeData() {
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [networkName, setNetworkName] = useState("");
  const [activityHistory, setActivityHistory] = useState<number[]>([]);

  useEffect(() => {
    async function fetchBikeData() {
      try {
        const networkResponse = await fetch(
          "https://api.citybik.es/v2/networks/santander-cycles?fields=stations"
        );
        const networkData: NetworkData = await networkResponse.json();

        setNetworkName(networkData.network.name);
        setStations(networkData.network.stations);

        // Update activity history
        const totalBikes = networkData.network.stations.reduce(
          (sum: number, s: Station) => sum + s.free_bikes,
          0
        );
        const totalCapacity = networkData.network.stations.reduce(
          (sum: number, s: Station) => sum + s.free_bikes + s.empty_slots,
          0
        );
        const usage = totalCapacity > 0 ? (totalBikes / totalCapacity) * 100 : 0;

        setActivityHistory((prev) => {
          const newHistory = [...prev, usage];
          return newHistory.slice(-20);
        });

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch bike data");
        setLoading(false);
        console.error(err);
      }
    }

    fetchBikeData();
    const interval = setInterval(fetchBikeData, 30000);
    return () => clearInterval(interval);
  }, []);

  return { stations, loading, error, networkName, activityHistory };
}

