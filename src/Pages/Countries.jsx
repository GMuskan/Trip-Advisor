import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CountryCard } from "../Components/CountryCard";
import { TourismContext } from "../Context/TourismContext";
export const Countries = () => {
  const navigate = useNavigate();
  const { continentId } = useParams();
  const { data } = useContext(TourismContext);
  const continent = data?.continents?.find(
    (item) => item?.id === Number(continentId)
  );
  const countries = continent?.countries;

  return (
    <div>
      <div className="header">
        <button className="back-button">
          <i
            className="fa fa-long-arrow-left"
            aria-hidden="true"
            onClick={() => navigate("/")}
          ></i>
        </button>
        <h3>Top Countries in {continent?.name} for your next holiday</h3>
      </div>
      <div className="continents-row">
        {countries.map((country) => (
          <CountryCard key={country?.id} country={country} />
        ))}
      </div>
    </div>
  );
};
