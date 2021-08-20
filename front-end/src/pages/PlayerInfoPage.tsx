import { useEffect } from "react";
import useStore from "../store";
import { Grid, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";
import PlayerCardBig from "../components/PlayerCardBig";
import { useParams } from "react-router-dom";

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
  const currentPlayer = useStore((store) => store.currentPlayer);

  const classes = cardContainerStyle();

  return currentPlayer ? (
    <Grid container spacing={6} justify="center" className={classes.container}>
      <Grid item>
        <PlayerCardBig
          id={currentPlayer.id}
          firstName={currentPlayer.firstName}
          lastName={currentPlayer.lastName}
          height={currentPlayer.height}
          weight={currentPlayer.weight}
          shirtNo={currentPlayer.shirtNo}
          nationality={currentPlayer.nationality}
          position={currentPlayer.position}
          imageUrl={currentPlayer.imageUrl}
          teamId={currentPlayer.teamId}
          team={currentPlayer.team}
        />
      </Grid>
    </Grid>
  ) : (
    <h3 className="loading">Loading...</h3>
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

function PlayerInfoPage() {
  const fetchPlayerById = useStore((store) => store.fetchPlayerById);
  const { id }: { id: string } = useParams();

  useEffect(() => {
    fetchPlayerById(id);
  }, []);

  return (
    <main>
      <SearchBarEdit />
      <ContainerStyled />
    </main>
  );
}

export default PlayerInfoPage;
