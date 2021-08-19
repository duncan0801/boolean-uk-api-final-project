import React, { useEffect } from "react";
import useStore from "../store";
import { useParams } from "react-router-dom";
import FixtureCard from "../components/FixtureCard";

function FixtureInfoPage() {
  const { id }: { id: string } = useParams();
  const currentFixture = useStore((store) => store.currentFixture);
  const fetchFixtureById = useStore((store) => store.fetchFixtureById);

  useEffect(() => {
    fetchFixtureById(id);
  }, []);

  if (currentFixture) {
    return (
      <main>
        <div className="viewSection">
          <FixtureCard
            id={currentFixture.id}
            date={currentFixture.date}
            result={currentFixture.result}
            homeTeamId={currentFixture.homeTeamId}
            awayTeamId={currentFixture.awayTeamId}
            homeTeam={currentFixture.homeTeam}
            awayTeam={currentFixture.awayTeam}
          />
        </div>
      </main>
    );
  }
  return <h3>Loading...</h3>;
}

export default FixtureInfoPage;
