import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";
import LeaguesSearch from "./pages/LeaguesSearch"
import PlayerSearch from "./pages/PlayersSearch";
import LeagueInfo from "./pages/LeagueInfo";

import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/leagues">
          <LeaguesSearch />
        </Route>
        <Route exact path="/leagues/:id">
          <LeagueInfo/>
        </Route>
        <Route exact path="/players">
          <PlayerSearch/>
        </Route>
        {/* <Route path="/">
          <BaseTemplate />
        </Route> */}
      </Switch>
    </>
  );
}
