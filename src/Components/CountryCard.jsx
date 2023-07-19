import { useNavigate } from "react-router-dom";

export const CountryCard = ({ country }) => {
  const navigate = useNavigate();

  return (
    <div
      className="continent-card"
      onClick={() => navigate(`${country?.id}/destinations`)}
    >
      <img src={country?.image} alt="continent-pic" />
      <div className="continent-name">
        <i className="fa fa-map-marker" aria-hidden="true"></i>
        <div>{country?.name}</div>
      </div>
    </div>
  );
};
