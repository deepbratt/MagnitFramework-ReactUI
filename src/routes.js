import React from "react";
// import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./Layout";
import RequireAuth from "./container/RequireAuth";
import { pageRoutes } from "./Components/Path";
import Home from "./Pages/Home";

const Routes = () => {
  const routeArray = Object.values(pageRoutes);
  // const isLoggedIn = useSelector((state) => state.userReducer.isLoggedin);

  return (
    <Router>
      <Switch>
        <Layout>
          <RequireAuth path="/" exact component={Home} />
          {/* <RequireAuth path="/services" exact component={Services} /> */}
          {routeArray.map((prop, key) => {
            return (
              <RequireAuth
                path={prop.path}
                component={prop.component}
                exact
                key={`route-${key}`}
              />
            );
          })}
        </Layout>
      </Switch>
    </Router>
  );
};
export default Routes;
