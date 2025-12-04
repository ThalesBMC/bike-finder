import { Popup, useMap } from "react-leaflet";
import { StationWithActivity } from "@/types/bike";

interface StationPopupProps {
  station: StationWithActivity;
}

function CloseButton() {
  const map = useMap();

  const handleClose = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    map.closePopup();
  };

  return (
    <button
      onClick={handleClose}
      onTouchEnd={handleClose}
      className="custom-close-btn"
      aria-label="Close popup"
      type="button"
    >
      ×
    </button>
  );
}

export function StationPopup({ station }: StationPopupProps) {
  const availabilityPercent = (
    (station.free_bikes / (station.free_bikes + station.empty_slots)) *
    100
  ).toFixed(0);

  const stationName =
    station.name.split(" - ").slice(1).join(" - ") || station.name;

  return (
    <Popup closeOnClick={true} closeButton={false} autoClose={false}>
      <div style={{ position: "relative" }}>
        <CloseButton />
        <div className="modal-card">
          <div className="modal-header">
            <h3 className="modal-title">{stationName}</h3>
          </div>

          <div className="modal-body">
            <div className="stats-row">
              <div className="stat-item">
                <div className="stat-value">{station.free_bikes}</div>
                <div className="stat-label">AVAILABLE</div>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <div className="stat-value">{station.empty_slots}</div>
                <div className="stat-label">EMPTY</div>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <div className="stat-value">
                  {station.free_bikes + station.empty_slots}
                </div>
                <div className="stat-label">CAPACITY</div>
              </div>
            </div>

            <div className="usage-section">
              <div className="usage-header">
                <span className="usage-label">AVAILABILITY</span>
                <span className="usage-value">{availabilityPercent}%</span>
              </div>
              <div className="usage-bar-container">
                <div
                  className="usage-bar-fill"
                  style={{ width: `${availabilityPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
}
