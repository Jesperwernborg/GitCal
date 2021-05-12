import React from "react";
import "./App.css";
import Profile from "./pages/profile/Profile";
import Error from "./components/error/Error";
import Dashboard from "./pages/dashboard/Dashboard";
import Logo from "./components/logo/Logo";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Logo></Logo>
        <Switch>
          <Route exact={true} path="/">
            <Dashboard />
          </Route>
          <Route
            exact={true}
            path={`/:id`}
            render={(props) => <Profile {...props} />}
          ></Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
