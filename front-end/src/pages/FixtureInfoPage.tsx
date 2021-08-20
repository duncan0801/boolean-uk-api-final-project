import React, { useEffect } from "react";
import useStore from "../store";
import { useParams } from "react-router-dom";
import FixtureCard from "../components/FixtureCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function FixtureInfoPage() {
  const cardContainerStyle = makeStyles({
    container: {
      backgroundColor: "#fabc3c",
      padding: "4rem 0",
      margin: "0",
    },
  });

  function ContainerStyled() {
    const currentFixture = useStore((store) => store.currentFixture);

    const classes = cardContainerStyle();

    return currentFixture ? (
      <Grid
        container
        spacing={6}
        justify="center"
        className={classes.container}
      >
        <Grid item>
          <FixtureCard
            id={currentFixture.id}
            date={currentFixture.date}
            result={currentFixture.result}
            homeTeamId={currentFixture.homeTeamId}
            awayTeamId={currentFixture.awayTeamId}
            homeTeam={currentFixture.homeTeam}
            awayTeam={currentFixture.awayTeam}
          />
        </Grid>
      </Grid>
    ) : (
      <h3 className="loading">Loading...</h3>
    );
  }

  const { id }: { id: string } = useParams();
  const currentFixture = useStore((store) => store.currentFixture);
  const fetchFixtureById = useStore((store) => store.fetchFixtureById);

  useEffect(() => {
    fetchFixtureById(id);
  }, []);

  if (currentFixture) {
    return (
      <main>
        <ContainerStyled />
      </main>
    );
  }
  return <h3>Loading...</h3>;
}

export default FixtureInfoPage;
