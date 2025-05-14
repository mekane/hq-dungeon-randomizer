import { getRoomLayout } from "../../generate/";
import "./App.css";
import { MapView } from "./components";

const layout = getRoomLayout(1, 10);
console.log("Path", layout.path);

function App() {
  return <MapView mapConfig={layout.mapConfig} />;
}

export default App;
