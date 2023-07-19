import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DestinationCard } from "../Components/DestinationCard";
import { TourismContext } from "../Context/TourismContext";
export const Destinations = () => {
  const navigate = useNavigate();

  const { continentId, countryId } = useParams();
  const { data } = useContext(TourismContext);
  const continent = data?.continents?.find(
    (item) => item?.id === Number(continentId)
  );
  const countries = continent?.countries;
  const destinations = countries?.find((item) => item?.id === Number(countryId))
    ?.destinations;

  const country = countries?.find((item) => item?.id === Number(countryId));
  return (
    <div>
      <div className="header">
        <button className="back-button">
          <i
            className="fa fa-long-arrow-left"
            aria-hidden="true"
            onClick={() => navigate(`/${continentId}/countries`)}
          ></i>
        </button>
        <h3>Top Countries in {country?.name} for your next holiday</h3>
      </div>
      <div className="continents-row">
        {destinations.map((destination) => (
          <DestinationCard key={destination?.id} destination={destination} />
        ))}
      </div>
    </div>
  );
};
