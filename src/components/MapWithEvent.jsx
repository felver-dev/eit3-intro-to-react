import { MapContainer } from "react-leaflet";
import { useEffect, useState } from "react";

// const users = {
//   id: int,
//   name: string,
//   firstName: string,
//   isDriver: boolean,
//   email: string,
//   password: string,
//   createdAt:dateTime(),
//   updatedAt:dateTime()
// };
// const user1 = {
//   id: 1,
//   name: "Jules",
//   firstName: "felver",
//   isDriver: false,
//   email: "jules@gmail.com",
//   password: "jules12345",
// };
// const user2 = {
//   id: 1,
//   name: "Mayandza",
//   firstName: "Ngouala",
//   isDriver: true,
//   email: "maya@gmail.com",
//   password: "maya12345",
// };

// if (user.isDrive){
//   console.log(`${user.name} is a driver`);
// }
// else {
//   console.log(`${user.name} is a client`);
// }

const MapWithEvent = () => {
  const [coordinates, setCoordinates] = useState({
    lat: 5.345317,
    lng: -4.024429,
  });
  const [driverCoordinates, setDriverCoordinates] = useState({
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
