import React, { useEffect } from "react";
import useStore from "../store";
import { Grid } from "@material-ui/core";
import CardSmall from "../components/CardSmall";

function FixturesSearch() {
  const fetchFixtures = useStore((store) => store.fetchFixtures);
  const fixtures = useStore((store) => store.fixtures);

  useEffect(() => {
    fetchFixtures();
  }, []);

  if (fixtures) {
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
                {fixtures.map((fixture) => {
                  let name =
                    fixture.homeTeam.name + " vs " + fixture.awayTeam.name;
                  return (
                    <CardSmall
                      resource="fixtures"
                      id={fixture.id}
                      imageUrl="https://football-italia.net/wp-content/uploads/2021/07/Serie-A-2021-22.jpg"
                      name={name}
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

export default FixturesSearch;
