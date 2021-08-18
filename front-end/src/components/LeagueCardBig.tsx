import "../styles/playerCard.css";
import { Link } from "react-router-dom";
import { Team } from "../store";

type LeagueCardBigProps = {
  id: Number;
  imageUrl: string;
  name: string;
  numberOfTeams: Number;
  country: string;
  teams: Team[];
};
// id  Int @id @default(autoincrement())
// name String
// country String
// numberOfTeams Int
// imageUrl String
// teams Team[]

function LeagueCardBig({
  imageUrl,
  name,
  numberOfTeams,
  country,
  teams,
}: LeagueCardBigProps) {
  return (
    <div className="card">
      <div className="imageContainer">
        <img src={imageUrl} alt={name} />
      </div>
      <h3>`Name of League: ${name}`</h3>
      <h3>`Based in ${country}`</h3>
      <h3>`Competitiors: ${numberOfTeams}`</h3>
      <ul>
        <h3>Teams</h3>
        {teams.map((team) => {
          <li>
            <Link to={`/teams/${team.id}`}>{team.name}</Link>
          </li>;
        })}
      </ul>
    </div>
  );
}

export default LeagueCardBig;
