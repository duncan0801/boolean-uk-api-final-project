import React from "react";
import "../App.css";
import useStore from "../store";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Grid,
} from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import PlayerCardSmall from "./PlayerCardSmall";

// const theme = createTheme({
//   typography: {
//     h2: {
//       fontSize: 40,
//     },
//   },
//   palette: {
//     primary: {
//       main: "#FABC3C",
//     },
//     secondary: {
//       main: "#E55812",
//     },
//   },
// });

// const useStyles = makeStyles({
//   root: {
//     background: "linear-gradient(45deg, #333, #999)",
//     border: 0,
//     borderRadius: 15,
//     color: "white",
//     padding: "0 30px",
//     marginRight: "10px",
//   },
// });
// function ButtonStyled() {
//   const classes = useStyles();
//   return <Button className={classes.root}>This is a button</Button>;
// }

function App() {
  const getSearchPlayers = useStore((store) => store.getSearchPlayers);

  return (
    <>
      <header>
        <h1>The Footy Oracle</h1>
      </header>
      <nav className="top-nav">
        <ul className="tab-list">
          <li>
            <a href="#">Leagues</a>
          </li>
          <li>
            <a href="#">Teams</a>
          </li>
          <li>
            <a href="#">Players</a>
          </li>
          <li>
            <a href="#">Managers</a>
          </li>
          <li>
            <a href="#">Fixtures</a>
          </li>
        </ul>
      </nav>
      <main>
        <div className="viewSection">
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            style={{ minWidth: "100vw" }}
          >
            <Grid item>
              <FormControl variant="outlined" className="form">
                <Select
                  placeholder="Select A Filter"
                  labelId="filterChoiceLabel"
                  id="filterChoice"
                  value={10}
                  label="Select A Filter"
                  style={{ width: 150 }}
                >
                  <MenuItem value="">
                    <em>Select A Filter</em>
                  </MenuItem>
                  <MenuItem value={"leagues"}>Leagues</MenuItem>
                  <MenuItem value={"players"}>Players</MenuItem>
                  <MenuItem value={"managers"}>Managers</MenuItem>
                  <MenuItem value={"teams"}>Teams</MenuItem>
                  <MenuItem value={"fixtures"}>Fixtures</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <SearchBar
                  onChange={() => console.log("onChange")}
                  onRequestSearch={() => console.log("onRequestSearch")}
                  style={{
                    margin: "0 auto",
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container className="infoSection">
            <Grid item>
              <PlayerCardSmall />
            </Grid>
          </Grid>
        </div>
      </main>
    </>
  );
}

export default App;
