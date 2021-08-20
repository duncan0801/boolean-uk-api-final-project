import React, { useEffect } from "react";
import useStore from "../store";
import { useParams } from "react-router-dom";
import ManagerCardBig from "../components/ManagerCardBig";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function ManagerInfoPage() {
  const cardContainerStyle = makeStyles({
    container: {
      backgroundColor: "#fabc3c",
      padding: "4rem 0",
      margin: "0",
    },
  });

  function ContainerStyled() {
    const currentManager = useStore((store) => store.currentManager);

    const classes = cardContainerStyle();

    return currentManager ? (
      <Grid
        container
        spacing={6}
        justify="center"
        className={classes.container}
      >
        <Grid item>
          <ManagerCardBig
            id={currentManager.id}
            firstName={currentManager.firstName}
            lastName={currentManager.lastName}
            age={currentManager.age}
            previousTeams={currentManager.previousTeams}
            imageUrl={currentManager.imageUrl}
            teamId={currentManager.teamId}
            team={currentManager.team}
          />
        </Grid>
      </Grid>
    ) : (
      <h3 className="loading">Loading...</h3>
    );
  }

  const fetchManagerById = useStore((store) => store.fetchManagerById);
  const currentManager = useStore((store) => store.currentManager);
  const { id }: { id: string } = useParams();

  useEffect(() => {
    fetchManagerById(id);
  }, []);

  if (currentManager) {
    console.log(currentManager);
    return (
      <main>
        <ContainerStyled />
      </main>
    );
  }
  return <h3>Loading...</h3>;
}

export default ManagerInfoPage;
