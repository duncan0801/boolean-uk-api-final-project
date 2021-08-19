import "../styles/playerCard.css";
import { Link } from "react-router-dom";
import { Team } from "../store";

type ManagersCardBigProps = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  previousTeams: string[];
  imageUrl: string;
  teamId: number;
  team: Team | undefined
};
// id  Int @id @default(autoincrement())
// name String
// country String
// numberOfTeams Int
// imageUrl String
// teams Team[]

function ManagerCardBig({
  id,
  firstName,
  lastName,
  age,
  previousTeams,
  imageUrl,
  teamId,
  team
}: ManagersCardBigProps) {
  return (
    <div className="card">
      <div className="imageContainer">
        <img src={imageUrl} alt={firstName + " " + lastName} />
      </div>
      <h2>
        <span className="firstName">{firstName + ""}</span>
        <span className="lstName">{lastName}</span>
      </h2>
      <h3>Age: {age}</h3>
      <h3>Current Team: {team ? team.name : "No team available"}</h3>
      <h3>
        Previous Teams:
        <ul>
          {previousTeams.map((team) => {
            return (
              <Link to={`/teams/?name=${team}`}>
                <li>{team}</li>
              </Link>
            );
          })}
        </ul>
      </h3>
    </div>
  );
}

export default ManagerCardBig;
