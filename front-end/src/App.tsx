import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";
import LeaguesSearch from "./pages/LeaguesSearch";
import LeagueInfo from "./pages/LeagueInfo";
import TeamsSearch from "./pages/TeamsSearch";
import TeamInfo from "./pages/TeamInfo";

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
          <LeagueInfo />
        </Route>
        <Route exact path="/teams">
          <TeamsSearch />
        </Route>
        <Route exact path="/teams/:id">
          <TeamInfo />
        </Route>
        {/* <Route path="/">
          <BaseTemplate />
        </Route> */}
      </Switch>
    </>
  );
}
