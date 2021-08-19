import React, { useEffect } from "react";
import useStore from "../store";
import { Grid } from "@material-ui/core";
import CardSmall from "../components/CardSmall";

function TeamsSearch() {
  const fetchTeams = useStore((store) => store.fetchTeams);
  const teams = useStore((store) => store.teams);

  useEffect(() => {
    fetchTeams();
  }, []);

  if (teams) {
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
                {teams.map((team) => {
                  return (
                    <CardSmall
                      resource="teams"
                      id={team.id}
                      imageUrl={team.badgeUrl}
                      name={team.name}
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

export default TeamsSearch;
