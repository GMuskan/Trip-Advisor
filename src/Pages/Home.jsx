import { useContext } from "react";
import { ContinentCard } from "../Components/ContinentCard";
import { TourismContext } from "../Context/TourismContext";

export const Home = () => {
  const { data } = useContext(TourismContext);
  return (
    <div className="home-container">
      <h1>Welcome to Trip Advisor</h1>
      <h3>Top Continents for your next Holiday</h3>
      <div className="continents-row">
        {data?.continents?.map((continent) => (
          <ContinentCard key={continent?.id} continent={continent} />
        ))}
      </div>
    </div>
  );
};
