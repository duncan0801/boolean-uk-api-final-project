import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import LeaguesSearch from "./pages/LeaguesSearch";
import LeagueInfo from "./pages/LeagueInfo";
import TeamsSearch from "./pages/TeamsSearch";
import TeamInfo from "./pages/TeamInfo";
import "./App.css";
import ManagersSearch from "./pages/ManagersSearch";
import ManagerInfo from "./pages/ManagerInfo";

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
        <Route exact path="/managers">
            <ManagersSearch/>
        </Route>
        <Route exact path="/managers/:id">
            <ManagerInfo/>
        </Route>
      </Switch>
    </>
  );
}
