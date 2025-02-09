import "./app.css";
// import Form from "./components/Form";
import Map from "./components/Map";
import MapWithEvent from "./components/MapWithEvent";
import VectorLayer from "./components/VectorLayers";

const App = () => {
  return (
    <div className="w-full h-screen">
      {/* <Map /> */}
      {/* <Form /> */}

      {/* <MapWithEvent /> */}
      <VectorLayer />
    </div>
  );
};

export default App;
