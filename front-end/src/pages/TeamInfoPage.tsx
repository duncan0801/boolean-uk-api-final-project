import React, { useEffect } from "react";
import useStore from "../store";
import { makeStyles } from "@material-ui/core/styles";
import TeamCard from "../components/TeamCard";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";

const cardContainerStyle = makeStyles({
  container: {
    backgroundColor: "#fabc3c",
    padding: "4rem 0",
    margin: "0",
  },
});

function ContainerStyled() {
  const currentTeam = useStore((store) => store.currentTeam);

  const classes = cardContainerStyle();

  if (currentTeam) {
    return (
      <Grid
        container
        spacing={6}
        justify="center"
        className={classes.container}
      >
        <Grid item>
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
        </Grid>
      </Grid>
    );
  }
  return <h3>Loading...</h3>;
}

function TeamInfoPage() {
  const { id }: { id: string } = useParams();
  const fetchTeamById = useStore((store) => store.fetchTeamById);
  const modal = useStore((store) => store.modal);
  useEffect(() => {
    fetchTeamById(id);
  }, [modal]);

  return <ContainerStyled />;
}

export default TeamInfoPage;
