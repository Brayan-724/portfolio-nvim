import { Redirect, Route, Switch } from "wouter-preact";
import IndexPage from "./routes";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={IndexPage} />
      <Route path="/no-name">A</Route>
      <Route path="/:rest*">{() => <Redirect to="/no-name" />}</Route>
    </Switch>
  );
}
