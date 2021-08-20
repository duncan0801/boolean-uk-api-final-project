import React, { useEffect } from "react";
import useStore from "../store";
import { Grid, FormControl } from "@material-ui/core";
import CardSmall from "../components/CardSmall";
import SearchBar from "material-ui-search-bar";
import { makeStyles } from "@material-ui/core/styles";

const cardContainerStyle = makeStyles({
  container: {
    backgroundColor: "#fabc3c",
    padding: "4rem 0",
    margin: "0",
  },
});

const searchBarStyle = makeStyles({
  searchbar: {
    width: "100%",
  },
  container: {
    display: "grid",
    placeContent: "center",
    backgroundColor: "#fabc3c",
  },
});

function ContainerStyled() {
  const teams = useStore((store) => store.teams);

  const classes = cardContainerStyle();

  return (
    <Grid container justify="center" spacing={8} className={classes.container}>
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

function SearchBarEdit() {
  const classes = searchBarStyle();

  return (
    <FormControl className={classes.container}>
      <SearchBar
        className={classes.searchbar}
        onChange={() => console.log("onChange")}
        onRequestSearch={() => console.log("onRequestSearch")}
      />
    </FormControl>
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
        <SearchBarEdit />
        <ContainerStyled />
      </main>
    );
  }
  return <h3>Loading...</h3>;
}

export default TeamsSearch;
