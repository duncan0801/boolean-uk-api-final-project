import { useEffect } from "react";
import useStore from "../store";
import { Grid } from "@material-ui/core";
import CardSmall from "../components/CardSmall";

function PlayerSearch() {
  const fetchPlayers = useStore((store) => store.fetchPlayers);
  const players = useStore((store) => store.players);

  useEffect(() => {
    fetchPlayers();
  }, []);

  if (players) {
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
                {players.map((player) => {
                  return (
                    <CardSmall
                      key={`${player.firstName} ${player.lastName}`}
                      id={player.id}
                      imageUrl={player.imageUrl}
                      name={`${player.firstName} ${player.lastName}`}
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

export default PlayerSearch;
