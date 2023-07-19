import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Countries } from "./Pages/Countries";
import { Destinations } from "./Pages/Destinations";
import { DestinationDetails } from "./Pages/DestinationDetails";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:continentId/countries" element={<Countries />} />
        <Route
          path="/:continentId/countries/:countryId/destinations"
          element={<Destinations />}
        />
        <Route
          path="/:continentId/countries/:countryId/destinations/:destinationId"
          element={<DestinationDetails />}
        />
      </Routes>
    </div>
  );
}
