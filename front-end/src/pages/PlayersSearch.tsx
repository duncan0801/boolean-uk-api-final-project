import { useEffect } from "react";
import useStore from "../store";
import { Grid, FormControl } from "@material-ui/core";
import CardSmall from "../components/CardSmall";
import { makeStyles } from "@material-ui/core/styles"
import SearchBar from "material-ui-search-bar";

const cardContainerStyle = makeStyles({
  container: {
    backgroundColor: '#fabc3c',
    padding: '4rem 0',
    margin: '0'
  }
})

const searchBarStyle = makeStyles({
  searchbar: {
    width: '100%'
  },
  container: {
    display: 'grid',
    placeContent: 'center',
    backgroundColor: '#fabc3c'
  }
})
 
function ContainerStyled() {
  const players = useStore((store) => store.players);

  const classes = cardContainerStyle()

  return <Grid container spacing={8} justify="center" className={classes.container}>
          {players.map((player) => {
            return (
              <Grid item>
                <CardSmall
                  key={`${player.firstName} ${player.lastName}`}
                  id={player.id}
                  imageUrl={player.imageUrl}
                  name={`${player.firstName} ${player.lastName}`}
                />
              </Grid>
            );
          })}
        </Grid>
}

function SearchBarEdit() {
  const classes = searchBarStyle()

  return  <FormControl className={classes.container}>
            <SearchBar
              className={classes.searchbar}
              onChange={() => console.log("onChange")}
              onRequestSearch={() => console.log("onRequestSearch")}
            />
          </FormControl>
}

function PlayersSearch() {
  const fetchPlayers = useStore((store) => store.fetchPlayers);
  const players = useStore((store) => store.players);

  useEffect(() => {
    fetchPlayers();
  }, []);


 return players.length > 0 ?
     (
      <main>
        <SearchBarEdit/>
        <ContainerStyled/>
      </main>
    )
  
   : <h3>Loading...</h3>
}

export default PlayersSearch
