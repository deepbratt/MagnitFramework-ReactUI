import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import RequireAuth from "./container/RequireAuth";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
const Routes = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedin);

  return (
    <Router>
      <Switch>
        <Layout>
          <RequireAuth path="/" exact component={Home} />
          <RequireAuth path="/services" exact component={Services} />
        </Layout>
      </Switch>
    </Router>
  );
};
export default Routes;
