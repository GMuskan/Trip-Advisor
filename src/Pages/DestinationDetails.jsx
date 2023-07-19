import { useContext } from "react";
import { TourismContext } from "../Context/TourismContext";
import { NavLink, useParams, useNavigate } from "react-router-dom";

export const DestinationDetails = () => {
  const { continentId, countryId, destinationId } = useParams();
  const navigate = useNavigate();
  const { data } = useContext(TourismContext);
  const continent = data?.continents?.find(
    (item) => item?.id === Number(continentId)
  );
  const countries = continent?.countries;
  const destinations = countries?.find((item) => item?.id === Number(countryId))
    ?.destinations;

  const destination = destinations?.find(
    (item) => item?.id === Number(destinationId)
  );
  return (
    <div>
      <div className="header">
        <button className="back-button">
          <i
            className="fa fa-long-arrow-left"
            aria-hidden="true"
            onClick={() =>
              navigate(`/${continentId}/countries/${countryId}/destinations`)
            }
          ></i>
        </button>
        <h3>Top Countries in {destination?.name} for your next holiday</h3>
      </div>
      <div className="destination-details">
        <div className="destination-image">
          <img src={destination?.image} alt="destination-pic" />
        </div>
        <div className="about-destination">
          <p>
            <span>Description: </span>
            {destination?.description}
          </p>
          <p>
            <span>Ratings: </span>
            {destination?.ratings}
          </p>
          <p>
            <span>Reviews: </span>
            {destination?.reviews}
          </p>
          <p>
            <span>Location: </span>
            {destination?.location}
          </p>
          <p>
            <span>Opening Hours: </span>
            {destination?.openingHours}
          </p>
          <p>
            <span>Ticket Price: </span>
            {destination?.ticketPrice}
          </p>
          <NavLink
            className="website-link"
            to={destination?.website}
            target="_blank"
          >
            Website
          </NavLink>
        </div>
      </div>
    </div>
  );
};
