import { useState } from "react";
import { MapContainer, Marker, Popup, useMapEvents } from "react-leaflet";
import CustomTileLayer from "./TileLayer";

const LocationMarker = () => {
  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(event) {
      setPosition(event.latlng);
      map.flyTo(event.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Vous êtes ici même ! 😊</Popup>
    </Marker>
  );
};

const MapWithEvent = () => {
  return (
    <MapContainer
      center={{ lat: 5.345317, lng: -4.024429 }}
      zoom={18}
      scrollWheelZoom={false}
    >
      <CustomTileLayer />
      <LocationMarker />
    </MapContainer>
  );
};

export default MapWithEvent;
