import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import Header from "../components/ui/Header";
import HistorialPage from "../pages/HistorialPage";
import TareasPage from "../pages/TareasPage";

const AppRouter = () => {
  return (
    <Router>
      <Header />

      <div>
        <Switch>
          <Route exact path="/" component={TareasPage} />
          <Route exact path="/historial" component={HistorialPage} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
