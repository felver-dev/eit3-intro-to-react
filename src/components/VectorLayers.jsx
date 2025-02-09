import { MapContainer, Polyline } from "react-leaflet";
import CustomTileLayer from "./TileLayer";

const center = [5.345317, -4.024429];

const polyline = [
  [5.345317, -4.024429],
  [5.345317, -5.1],
  [5.345317, -7.12],
];

const polylineColor = { color: "blue" };

const VectorLayer = () => {
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
      <CustomTileLayer />
      <Polyline pathOptions={polylineColor} positions={polyline} />
    </MapContainer>
  );
};

export default VectorLayer;
