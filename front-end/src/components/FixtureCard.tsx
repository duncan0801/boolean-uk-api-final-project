import "../styles/playerCard.css";
import useStore, { Team } from "../store";
import { Link } from "react-router-dom";
import { reduceEachLeadingCommentRange } from "typescript";

type FixtureCardProps = {
  id: Number;
  date: Date;
  result?: string;
  homeTeamId: Number;
  awayTeamId: Number;
  homeTeam?: Team;
  awayTeam?: Team;
};

// id  Int @id @default(autoincrement())
// date DateTime
// homeTeamId Int
// awayTeamId Int
// result String?
// homeTeam Team @relation("homeTeam", fields: [homeTeamId], references: [id], onDelete: Cascade, onUpdate: Cascade)
// awayTeam Team @relation("awayTeam", fields: [awayTeamId], references: [id], onDelete: Cascade, onUpdate: Cascade)

function FixtureCard({
  id,
  date,
  result,
  homeTeamId,
  awayTeamId,
  homeTeam,
  awayTeam,
}: FixtureCardProps) {
  const currentFixture = useStore((store) => store.currentFixture);

  // const fixture = fixtures.find((fixture) => {
  //   return fixture.id === id;
  // });

  console.log(currentFixture);

  if (currentFixture) {
    return (
      <div className="card">
        <div className="imageContainer">
          <img
            src="https://football-italia.net/wp-content/uploads/2021/07/Serie-A-2021-22.jpg"
            alt="Fixture"
          />
        </div>
        <h3>
          Fixture Between:
          {currentFixture.homeTeam && currentFixture.awayTeam ? (
            <>
              <Link
                to={`/teams/${currentFixture.homeTeamId}`}
              >{`${currentFixture.homeTeam.name} vs `}</Link>
              <Link
                to={`/teams/${currentFixture.awayTeamId}`}
              >{`${currentFixture.awayTeam.name}`}</Link>
            </>
          ) : null}
        </h3>
        <h3>Date: {currentFixture.date}</h3>
        <h3>
          Result:
          {currentFixture.result ? currentFixture.result : null}
        </h3>
      </div>
    );
  }
  return <h3>Could not find the league of this team!Sorry!</h3>;
}

export default FixtureCard;
