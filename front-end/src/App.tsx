import React from "react";
import "./App.css";
import PlayerCard from "./components/PlayerCard";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Grid,
} from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import "./App.css";

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
  return (
    <>
      <header>
        <h1>The Footy Oracle</h1>
      </header>
      <main>
        <div className="viewSection">
          <FormControl variant="outlined" className="form">
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              style={{ minWidth: "100vw" }}
            >
              <InputLabel id="filterChoiceLabel">Search...</InputLabel>
              <Select
                labelId="filterChoiceLabel"
                id="filterChoice"
                value={10}
                label="filter"
                fullWidth
              >
                <MenuItem value={"leagues"}>Leagues</MenuItem>
                <MenuItem value={"players"}>Players</MenuItem>
                <MenuItem value={"managers"}>Managers</MenuItem>
                <MenuItem value={"teams"}>Teams</MenuItem>
                <MenuItem value={"fixtures"}>Fixtures</MenuItem>
              </Select>
              <SearchBar
                onChange={() => console.log("onChange")}
                onRequestSearch={() => console.log("onRequestSearch")}
                style={{
                  margin: "0 auto",
                }}
              />
            </Grid>
          </FormControl>
          <Grid container className="infoSection">
            <Grid item>
              <PlayerCard/>
            </Grid>
          </Grid>
        </div>
      </main>
    </>
  );
}

export default App;
