import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";
// import LeaguesSearch from "./pages/LeaguesSearch"

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/leagues">
          <LeaguesSearch/>
        </Route>
        <Route path="/leagues/:id">
          <LeaguesSearch />
        </Route>
        {/* <Route path="/">
          <BaseTemplate />
        </Route> */}
      </Switch>
    </>
  );
}
