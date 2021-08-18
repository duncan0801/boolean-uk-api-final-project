import React, { useEffect } from "react";
import useStore from "../store";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Grid,
} from "@material-ui/core";
import LeagueCardBig from "../components/LeagueCardBig";
import { useParams } from "react-router-dom";

function LeaguesSearch() {
  const leagues = useStore((store) => store.leagues);
  const { id }: { id: string } = useParams();
  const leagueToView = leagues.find((league) => {
    return league.id === Number(id);
  });

  if (leagueToView) {
    return (
      <main>
        <div className="viewSection">
          <LeagueCardBig
            id={leagueToView.id}
            imageUrl={leagueToView.imageUrl}
            name={leagueToView.name}
            numberOfTeams={leagueToView.numberOfTeams}
            country={leagueToView.country}
            teams={leagueToView.teams}
          />
        </div>
      </main>
    );
  }
  return <h3>Loading...</h3>;
}

export default LeaguesSearch;
