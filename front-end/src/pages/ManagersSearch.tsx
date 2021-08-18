import { useEffect } from "react";
import useStore from "../store";
import { Grid } from "@material-ui/core";
import CardSmall from "../components/CardSmall";
function ManagersSearch() {
  const fetchManagers = useStore((state) => state.fetchManagers);
  const managers = useStore((state) => state.managers);

  useEffect(() => {
    fetchManagers();
  }, []);

  if (!managers) {
    return <h3>Loading...</h3>;
  }
  return (
    <main>
      <div className="viewSection">
        {/* <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          style={{ minWidth: "100vw" }}
        > */}
        <Grid container className="infoSection">
          {managers.map((manager) => {
            let name = manager.firstName + " " + manager.lastName;
            return (
              <Grid item>
                <CardSmall
                  resource="managers"
                  id={manager.id}
                  imageUrl={manager.imageUrl}
                  name={name}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </main>
  );
}

export default ManagersSearch;
