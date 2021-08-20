import "../styles/playerCard.css";
import { Link } from "react-router-dom";
import { Team } from "../store";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";

type ManagersCardBigProps = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  previousTeams: string[];
  imageUrl: string;
  teamId: number;
  team: Team | undefined;
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
  team,
}: ManagersCardBigProps) {
  return (
    <div className="card">
      <div className="imageContainer">
        <img src={imageUrl} alt={firstName + " " + lastName} />
      </div>
      <h2>
        <span className="firstName">{firstName + "   "}</span>
        <span className="lstName">{lastName}</span>
      </h2>
      <h3>Age: {age}</h3>
      <h3>
        Current Team:{" "}
        {team ? (
          <Link to={`http://localhost:3000/teams/${team.id}`}>{team.name}</Link>
        ) : (
          "No team info"
        )}
      </h3>
      <h3>
        Previous Teams:
        <ul>
          {previousTeams.map((team) => {
            return <li key={team}>{team}</li>;
          })}
        </ul>
      </h3>
      <ButtonGroup>
        <Button variant="contained" color="primary">
          Edit
        </Button>
        <Button variant="contained" color="secondary">
          Delete
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default ManagerCardBig;
