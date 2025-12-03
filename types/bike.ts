export interface Station {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  free_bikes: number;
  empty_slots: number;
  timestamp: string;
}

export interface NetworkData {
  network: {
    id: string;
    name: string;
    location: {
      latitude: number;
      longitude: number;
      city: string;
      country: string;
    };
    stations: Station[];
  };
}

export interface FlowParticle {
  id: string;
  from: Station;
  to: Station;
  progress: number;
  intensity: number;
  opacity: number;
}

export interface StationWithActivity extends Station {
  activity: number;
  flowIntensity: number;
}

