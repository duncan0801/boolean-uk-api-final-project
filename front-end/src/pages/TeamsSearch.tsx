import React, { useEffect } from "react";
import useStore from "../store";
import { Grid } from "@material-ui/core";
import CardSmall from "../components/CardSmall";
import { makeStyles } from "@material-ui/core/styles";

const cardContainerStyle = makeStyles({
  container: {
    backgroundColor: "#fabc3c",
    padding: "4rem 0",
    margin: "0",
  },
});

function ContainerStyled() {
  const teams = useStore((store) => store.teams);

  const classes = cardContainerStyle();

  return (
    <Grid container justify="center" spacing={8} className="infoSection">
      {teams.map((team) => {
        return (
          <Grid item>
            <CardSmall
              resource="teams"
              id={team.id}
              imageUrl={team.badgeUrl}
              name={team.name}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

function TeamsSearch() {
  const fetchTeams = useStore((store) => store.fetchTeams);
  const teams = useStore((store) => store.teams);

  useEffect(() => {
    fetchTeams();
  }, []);

  if (teams) {
    return (
      <main>
        <ContainerStyled />
      </main>
    );
  }
  return <h3>Loading...</h3>;
}

export default TeamsSearch;
