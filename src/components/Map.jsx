import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
  const [DriverName, setDriverName] = useState("Jules");
  const [DriverPosition, setDriverPosition] = useState([5.345317, -4.024429]);
  return (
    <MapContainer
      center={[5.345317, -4.024429]}
      zoom={16}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[5.345317, -4.024429]}>
        <Popup>
          <span className="space-x-2">{DriverName} est à </span>
          <span className="space-x-2">{DriverPosition}</span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
