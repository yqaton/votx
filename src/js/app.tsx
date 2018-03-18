import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { injectGlobal } from "./theme";

import WelcomePage from "./components/welcomePage";
import Teams from "./components/teamsContainer";
import AdminPanel from "./components/adminPanel";

import Header from "./components/styled/header";

import { RouteMap } from "./routes";

// eslint-disable-next-line
injectGlobal`
  body {
    margin: 0;
    background-color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

const App: React.SFC = () => (
  <Router basename="/">
    <React.Fragment>
      <Header>
        <Link to="/">
          <b>VOTX</b>
        </Link>

        <p>Session: Game name</p>

        <Link to="/admin">ADM.</Link>
      </Header>

      <RouteMap />
    </React.Fragment>
  </Router>
);

render(<App />, document.getElementById("app") as HTMLElement);
