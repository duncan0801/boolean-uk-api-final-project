import React, { useEffect } from "react";
import useStore from "../store";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Grid,
} from "@material-ui/core";
import CardSmall from "../components/CardSmall";

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
        <div className="viewSection">
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            style={{ minWidth: "100vw" }}
          >
            <Grid container className="infoSection">
              <Grid item>
                {leagues.map((league) => {
                  console.log(league.imageUrl);
                  return (
                    <CardSmall
                      resource="leagues"
                      id={league.id}
                      imageUrl={league.imageUrl}
                      name={league.name}
                    />
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </main>
    );
  }
  return <h3>Loading...</h3>;
}

export default LeaguesSearch;
