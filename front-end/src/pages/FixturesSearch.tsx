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
  const fixtures = useStore((store) => store.fixtures);

  const classes = cardContainerStyle();

  return (
    <Grid container spacing={10} justify="center" className={classes.container}>
      {fixtures.map((fixture) => {
        let name = fixture.homeTeam.name + " vs " + fixture.awayTeam.name;
        return (
          <Grid item>
            <CardSmall
              resource="fixtures"
              id={fixture.id}
              imageUrl="https://football-italia.net/wp-content/uploads/2021/07/Serie-A-2021-22.jpg"
              name={name}
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

function FixturesSearch() {
  const fixtures = useStore((store) => store.fixtures);
  const fetchFixtures = useStore((store) => store.fetchFixtures);

  useEffect(() => {
    fetchFixtures();
  }, []);

  if (fixtures) {
    return (
      <main>
        <SearchBarEdit />
        <ContainerStyled />
      </main>
    );
  }
  return <h3>Loading...</h3>;
}

export default FixturesSearch;
