import "../styles/playerCard.css";
import { Link } from "react-router-dom";
import { Team } from "../store";
import { useEffect } from "react";

type ManagersCardBigProps = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  previousTeams: string[];
  imageUrl: string;
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
  team,
}: ManagersCardBigProps) {
  let manager;

  useEffect(() => {
    fetch(`http://localhost:4000/managers/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        let manager = data.data;
        console.log(manager);
      });
  });

  if (manager) {
  }
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
      <h3>
        Current Team:{" "}
        <Link to={`/teams/${team ? team.id : ""}`}>
          <span>{team ? team.name : "No team Info"}</span>
        </Link>
      </h3>
      <h3>
        Previous Teams:
        <ul>
          {previousTeams.map((teamName) => {
            return (
                <li>{teamName}</li>
            );
          })}
        </ul>
      </h3>
    </div>
  );
}

export default ManagerCardBig;
