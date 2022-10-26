import Layout from "./components/Layout";
import Loader from "./components/Loader"
import {Router} from "wouter-preact"
import Routes from "./router"

export function App() {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
      <Loader />
    </Router>
  );
}
