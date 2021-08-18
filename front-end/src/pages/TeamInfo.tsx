import React, { useEffect } from "react";
import useStore from "../store";

import TeamCard from "../components/TeamCard";
import { useParams } from "react-router-dom";

function TeamInfo() {
  const teams = useStore((store) => store.teams);

  const { id }: { id: string } = useParams();
  const teamToView = teams.find((team) => {
    return team.id === Number(id);
  });

  if (teamToView) {
    return (
      <main>
        <div className="viewSection">
          <TeamCard
            id={teamToView.id}
            name={teamToView.name}
            stadium={teamToView.stadium}
            yearFormed={teamToView.yearFormed}
            badgeUrl={teamToView.badgeUrl}
            leagueId={teamToView.leagueId}
            manager={teamToView.manager}
            players={teamToView.players}
          />
        </div>
      </main>
    );
  }
  return <h3>Loading...</h3>;
}

export default TeamInfo;
