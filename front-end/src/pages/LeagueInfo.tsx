import React, { useEffect } from "react";
import useStore from "../store";
import { Grid } from "@material-ui/core";
import LeagueCardBig from "../components/LeagueCardBig";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

function LeagueInfo() {
  const cardContainerStyle = makeStyles({
    container: {
      backgroundColor: "#fabc3c",
      padding: "4rem 0",
      margin: "0",
    },
  });

  function ContainerStyled() {
    const currentLeague = useStore((store) => store.currentLeague);

    const classes = cardContainerStyle();

    return currentLeague ? (
      <Grid
        container
        spacing={6}
        justify="center"
        className={classes.container}
      >
        <Grid item>
          <LeagueCardBig
            id={currentLeague.id}
            imageUrl={currentLeague.imageUrl}
            name={currentLeague.name}
            numberOfTeams={currentLeague.numberOfTeams}
            country={currentLeague.country}
            teams={currentLeague.teams}
          />
        </Grid>
      </Grid>
    ) : (
      <h3 className="loading">Loading...</h3>
    );
  }

  const { id }: { id: string } = useParams();
  const currentLeague = useStore((store) => store.currentLeague);
  const fetchLeagueById = useStore((store) => store.fetchLeagueById);

  useEffect(() => {
    fetchLeagueById(id);
  }, []);

  if (currentLeague) {
    return (
      <main>
        <ContainerStyled />
      </main>
    );
  }
  return <h3>Loading...</h3>;
}

export default LeagueInfo;
