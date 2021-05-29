import React from "react";
// import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./Layout";
import RequireAuth from "./container/RequireAuth";
import { pageRoutes } from "./Components/Path";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Error from "./Pages/Error/Index";
import { Suspense } from "react";
import { Loader } from "./Components/loader";

const Routes = () => {
  const routeArray = Object.values(pageRoutes);
  // const isLoggedIn = useSelector((state) => state.userReducer.isLoggedin);

  return (
    <Suspense fallback={<Loader/>}>
    <Router>
      <Layout>
        <Switch>
          <RequireAuth path="/" exact component={Home} />
          <RequireAuth path="/contactUs" exact component={ContactUs} />
          {/* <RequireAuth exact component={Error} /> */}
         
          {routeArray.map((prop, key) => {
            return (
              <RequireAuth
                path={prop.path}
                component={prop.component}
                key={`route-${key}`}
              />
            );
          })}
         
          {/* <RequireAuth path="" component={Error} /> */}
        </Switch>
      </Layout>
    </Router>
    </Suspense>
  );
};
export default Routes;
