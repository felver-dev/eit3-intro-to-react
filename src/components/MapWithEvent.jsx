import { MapContainer } from "react-leaflet";
import { useEffect, useState } from "react";

const MapWithEvent = () => {
  const [coordinates, setCoordinates] = useState({
    lat: 5.345317,
    lng: -4.024429,
  });

  
  const handleCoordinatesModifier = (newLat, newLng) => {
    setCoordinates({
      lat: newLat,
      lng: newLng,
    });
  };
  return (
    <MapContainer
      center={{ lat: coordinates.lat, lng: coordinates.lng }}
    ></MapContainer>
  );
};

export default MapWithEvent;
