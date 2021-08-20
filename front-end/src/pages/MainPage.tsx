import React from "react";
import useStore from "../store";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const cardContainerStyle = makeStyles({
  container: {
    backgroundColor: "#fabc3c",
    padding: "4rem 0",
    margin: "0",
  },
});

function ContainerStyled() {
  const fixtures = useStore((store) => store.fixtures);

  const classes = cardContainerStyle();

  return (
    <Grid container spacing={10} justify="center" className={classes.container}>
      <Grid item>
        <img
          src="https://www.worcester.gov.uk/images/easyblog_shared/2019/b2ap3_large_Football---carousel.jpg"
          alt="Football"
        />
      </Grid>
    </Grid>
  );
}

function MainPage() {
  return (
    <main>
      <ContainerStyled />
    </main>
  );
}

export default MainPage;
