import { useMemo } from "react";
import { useState } from "react";
import {
  MapContainer,
  Circle,
  Tooltip,
  CircleMarker,
  Marker,
  Popup,
  Polygon,
  Rectangle,
} from "react-leaflet";
import CustomTileLayer from "./TileLayer";

const center = [34.51, -1.45];
const multiPolygon = [
  [
    [51.41, -0.23],
    [51.32, -0.21],
    [51.45, -0.67],
  ],
  [
    [51.41, -0.205],
    [51.32, -0.89],
    [51.45, -0.07],
  ],
];

const rectangle = [
  [51.41, -0.205],
  [40.32, -0.89],
];

const Tooltips = () => {
  const [clickedCount, setClickedCount] = useState(0);
  const eventHandlers = useMemo(
    () => ({
      click() {
        setClickedCount((count) => count + 1);
      },
    }),
    []
  );

  const clickedText =
    clickedCount === 0
      ? "Cliquer ce text pour changer le tooltips"
      : `Le circle-ci est cliqué pour le ${clickedCount} fois`;
  return (
    <Circle
      center={center}
      eventHandlers={eventHandlers}
      pathOptions={{ fillColor: "blue" }}
      radius={100}
    >
      <Tooltip> {clickedText} </Tooltip>{" "}
    </Circle>
  );
};

const TooltipsDisplayer = () => {
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
      <CustomTileLayer />
      <Tooltips />
      <CircleMarker
        center={[51.51, -0.12]}
        pathOptions={{ color: "crimson" }}
        radius={20}
      >
        <Tooltip>Tooltip pour le marqueur de cercle</Tooltip>{" "}
      </CircleMarker>

      <Marker position={[51.51, -0.8]}>
        <Popup>Pop up pour le marqueur</Popup>
        <Tooltip>Tooltip pour le marqueur</Tooltip>
      </Marker>

      <Polygon pathOptions={{ color: "seagreen" }} positions={multiPolygon}>
        <Tooltip> ToolTip pour le multiPolygon </Tooltip>
      </Polygon>

      <Rectangle bounds={rectangle} pathOptions={{ color: "blue" }}>
        <Tooltip>Tooltip pour le rectangle</Tooltip>
      </Rectangle>
    </MapContainer>
  );
};

export default TooltipsDisplayer;
