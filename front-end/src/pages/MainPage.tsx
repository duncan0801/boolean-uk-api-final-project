import React from "react";
import useStore from "../store";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/mainPage.css";

const cardContainerStyle = makeStyles({
  container: {
    backgroundColor: "#fabc3c",
    padding: "0",
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
          className="mainMenu-image"
          src="https://c.tenor.com/rR0kkA0THW8AAAAC/mbapp%C3%A9om-kylian-mbapp%C3%A9.gif"
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
