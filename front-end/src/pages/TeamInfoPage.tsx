import React, { useEffect } from "react";
import useStore from "../store";

import TeamCard from "../components/TeamCard";
import { useParams } from "react-router-dom";

function TeamInfoPage() {
  const { id }: { id: string } = useParams();
  const currentTeam = useStore((store) => store.currentTeam);
  const fetchTeamById = useStore((store) => store.fetchTeamById);

  useEffect(() => {
    fetchTeamById(id);
  }, []);

  console.log(currentTeam);
  console.log(id);

  if (currentTeam) {
    return (
      <main>
        <div className="viewSection">
          <TeamCard
            id={currentTeam.id}
            name={currentTeam.name}
            stadium={currentTeam.stadium}
            yearFormed={currentTeam.yearFormed}
            badgeUrl={currentTeam.badgeUrl}
            leagueId={currentTeam.leagueId}
            league={currentTeam.league}
            manager={currentTeam.manager}
            players={currentTeam.players}
          />
        </div>
      </main>
    );
  }
  return <h3>Loading...</h3>;
}

export default TeamInfoPage;
