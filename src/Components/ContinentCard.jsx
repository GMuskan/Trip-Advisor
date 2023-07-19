import { useNavigate } from "react-router-dom";

export const ContinentCard = ({ continent }) => {
  const navigate = useNavigate();

  return (
    <div
      className="continent-card"
      onClick={() => navigate(`${continent?.id}/countries`)}
    >
      <img src={continent?.image} alt="continent-pic" />
      <div className="continent-name">
        <i className="fa fa-map-marker" aria-hidden="true"></i>
        <div>{continent?.name}</div>
      </div>
    </div>
  );
};
