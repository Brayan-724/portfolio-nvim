import { Redirect, Route, Switch } from "wouter-preact";
import IndexPage from "./routes";
import NasgarProyectPage from "./routes/proyects/nasgar";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={IndexPage} />
      <Route path="/proyect/nasgar" component={NasgarProyectPage} />
      <Route path="/no-name">A</Route>
      <Route path="/:rest*">{() => <Redirect to="/no-name" />}</Route>
    </Switch>
  );
}
