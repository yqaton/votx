import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/styled/header";
import WelcomePage from "./components/welcomePage";
import AdminPanel from "./components/adminPanel";
import Teams from "./components/teamsContainer";

export const RouteMap: React.SFC = () => (
  <div>
    <Route exact path="/" component={WelcomePage} />
    <Switch>
      <Route path="/admin" component={AdminPanel} />
      <Route path="/:id" component={Teams} />
    </Switch>
  </div>
);
