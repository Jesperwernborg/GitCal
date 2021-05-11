import React from "react";
import "./App.css";
import Profile from "./components/profile/Profile";
import Error from "./components/error/Error";
import Dashboard from "./components/dashboard/Dashboard";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
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
