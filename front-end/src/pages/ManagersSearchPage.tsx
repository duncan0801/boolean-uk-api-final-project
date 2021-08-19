import { useEffect } from "react";
import useStore from "../store";
import { Grid, FormControl } from "@material-ui/core";
import CardSmall from "../components/CardSmall";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";

function ManagersSearchPage() {
  const fetchManagers = useStore((state) => state.fetchManagers);
  const managers = useStore((state) => state.managers);

  const cardContainerStyle = makeStyles({
    container: {
      backgroundColor: "#fabc3c",
      padding: "4rem 0",
      margin: "0",
    },
  });

  const searchBarStyle = makeStyles({
    searchbar: {
      width: "100%",
    },
    container: {
      display: "grid",
      placeContent: "center",
      backgroundColor: "#fabc3c",
    },
  });

  function ContainerStyled() {
    const classes = cardContainerStyle();

    return (
      <Grid
        container
        justify="center"
        spacing={8}
        className={classes.container}
      >
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
    );
  }

  function SearchBarEdit() {
    const classes = searchBarStyle();

    return (
      <FormControl className={classes.container}>
        <SearchBar
          className={classes.searchbar}
          onChange={() => console.log("onChange")}
          onRequestSearch={() => console.log("onRequestSearch")}
        />
      </FormControl>
    );
  }

  useEffect(() => {
    fetchManagers();
  }, []);

  if (!managers) {
    return <h3>Loading...</h3>;
  }
  console.log(managers);
  return (
    <main>
      <SearchBarEdit />
      <ContainerStyled />
    </main>
  );
}

export default ManagersSearchPage;
