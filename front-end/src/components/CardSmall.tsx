import "../styles/playerCard.css";
import { Link } from "react-router-dom";

type PlayerCardSmallProps = {
  resource?: string;
  id: number;
  imageUrl: string;
  name: string;
};

function PlayerCardSmall({
  resource,
  id,
  imageUrl,
  name,
}: PlayerCardSmallProps) {
  return (
    <Link to={`${resource}/${id}`}>
      <div className="card">
        <div className="imageContainer">
          <img src={imageUrl} alt={name} />
        </div>
        <h3>{name}</h3>
      </div>
    </Link>
  );
}

export default PlayerCardSmall;
