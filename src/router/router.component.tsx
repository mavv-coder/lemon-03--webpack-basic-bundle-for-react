import React from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import { HomeComponent } from "../components/home.component";
import { switchRoutes } from "./routes";

export const RouterComponent: React.FC = () => {
  const { root, home } = switchRoutes;

  return (
    <Router>
      <Switch>
        <Route exact={true} path={root} component={HomeComponent} />
        <Route exact={true} path={home} component={HomeComponent} />
      </Switch>
    </Router>
  );
};
