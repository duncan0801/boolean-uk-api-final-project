import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import LeaguesSearch from "./pages/LeaguesSearch"
import PlayerSearch from "./pages/PlayersSearch";
import LeagueInfo from "./pages/LeagueInfo";
import TeamsSearch from "./pages/TeamsSearch";
import TeamInfoPage from "./pages/TeamInfoPage";
import "./App.css";
import ManagersSearchPage from "./pages/ManagersSearchPage";
import ManagerInfoPage from "./pages/ManagerInfoPage";

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
          <TeamInfoPage />
        </Route>
        <Route exact path="/managers">
          <ManagersSearchPage />
        </Route>
        <Route exact path="/managers/:id">
          <ManagerInfoPage />
        </Route>
      </Switch>
    </>
  );
}
