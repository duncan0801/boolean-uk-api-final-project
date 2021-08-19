import "../styles/playerCard.css";
import useStore, { League } from "../store";
import { Link } from "react-router-dom";
import { Manager } from "../store";
import { Player } from "../store";
import { useEffect } from "react";
import TeamInfoPage from "../pages/TeamInfoPage";

type TeamCardProps = {
  id: Number;
  name: string;
  stadium: string;
  yearFormed: Number;
  badgeUrl: string;
  leagueId: Number;
  league?: League;
  manager?: Manager;
  players: Player[];
};

// id  Int @id @default(autoincrement())
// name String
// stadium String
// yearFormed Int
// badgeUrl String
// leagueId Int
// league  League @relation(fields: [leagueId], references: [id], onDelete: Cascade, onUpdate: Cascade)
// manager Manager?
// players Player[]
// awayFixtures Fixture[] @relation("homeTeam")
// homeFixtures Fixture[] @relation("awayTeam")

function TeamCard({
  id,
  name,
  stadium,
  yearFormed,
  badgeUrl,
  leagueId,
  league,
  manager,
  players,
}: TeamCardProps) {
  // const leagues = useStore((store) => store.leagues);
  const teams = useStore((store) => store.teams);
  // const managers = useStore((store) => store.managers);

  const team = teams.find((team) => {
    return team.id === id;
  });

  // const league = leagues.find((league) => {
  //   return league.id === leagueId;
  // });
  console.log(manager);

  if (team) {
    return (
      // <Link to={`/teams/${team.id}`}>
      <div className="card">
        <div className="imageContainer">
          <img src={badgeUrl} alt={name} />
        </div>
        <h3>Team Name: {name}</h3>
        <h3>Stadium: {stadium}</h3>
        <h3>Year Formed: {yearFormed}</h3>
        <div>
          <h3>
            Playing in:
            {league ? (
              <Link to={`/leagues/${leagueId}`}>{league.name}</Link>
            ) : null}
          </h3>
        </div>
        <h3>
          Managed by:
          {manager ? (
            <Link to={`/managers/${manager.id}`}>
              {" "}
              {`${manager.firstName} ${manager.firstName}`}
            </Link>
          ) : null}
        </h3>

        <ul>
          <h3>Players</h3>
          {players.map((player) => {
            return (
              <li>
                <Link to={`/players/${player.id}`}>
                  {player.firstName} {player.lastName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      // </Link>
    );
  }
  return <h3>Could not find the league of this team!Sorry!</h3>;
}

export default TeamCard;
