import "../styles/playerCard.css";
import { Link } from "react-router-dom";

type PlayerCardSmallProps = {
  id: Number;
  imageUrl: string;
  name: string;
};

function PlayerCardSmall({ id, imageUrl, name }: PlayerCardSmallProps) {
  return (
    <Link to={`leagues/${id}`}>
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
