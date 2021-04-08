import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
const Routes = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedin);

  return (
    <Router>
      <Switch>
        <Layout>
          {/* <Route path="/" exact component={Home} /> */}
          <Route
            path="/"
            render={() =>
              isLoggedIn ? <Home /> : <h1>You need to login first</h1>
            }
          />
        </Layout>
      </Switch>
    </Router>
  );
};
export default Routes;
