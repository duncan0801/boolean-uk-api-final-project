import React, { useEffect } from "react";
import useStore from "../store";
import { FormControl, Grid } from "@material-ui/core";
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
  const leagues = useStore((store) => store.leagues);

  const classes = cardContainerStyle();

  return (
    <Grid container spacing={10} justify="center" className={classes.container}>
      {leagues.map((league) => {
        return (
          <Grid item>
            <CardSmall
              resource="leagues"
              id={league.id}
              imageUrl={league.imageUrl}
              name={league.name}
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

function LeaguesSearch() {
  const fetchLeagues = useStore((store) => store.fetchLeagues);
  const leagues = useStore((store) => store.leagues);

  useEffect(() => {
    fetchLeagues();
  }, []);

  console.log(leagues);

  if (leagues) {
    return (
      <main>
        <SearchBarEdit />
        <ContainerStyled />
      </main>
    );
  }
  return <h3>Loading...</h3>;
}

export default LeaguesSearch;
