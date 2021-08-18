import { Switch, Route, Redirect } from "react-router-dom";
import BaseTemplate from "./components/BaseTemplate";

export default function App() {
  return (
    <Switch>
      <Route path="/">
        <BaseTemplate />
      </Route>
    </Switch>
  );
}
