import { useParams, useNavigate } from "react-router-dom";

export const DestinationCard = ({ destination }) => {
  const navigate = useNavigate();
  const { continentId, countryId } = useParams();

  return (
    <div
      className="continent-card"
      onClick={() =>
        navigate(
          `/${continentId}/countries/${countryId}/destinations/${destination?.id}`
        )
      }
    >
      <img src={destination?.image} alt="continent-pic" />
      <div className="continent-name">
        <i className="fa fa-map-marker" aria-hidden="true"></i>
        <div>{destination?.name}</div>
      </div>
    </div>
  );
};
