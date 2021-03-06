import React, { lazy, Suspense } from "react";
// import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./Layout";
import RequireAuth from "./container/RequireAuth";
import { pageRoutes } from "./Components/Path";
import { Loader } from "./Components/loader";
import { Colors } from "./Theme/color.constants";
// import { GA_ID } from "./Utils/Constants/Language";
// import RouteChangeTracker from "./Components/RouteChangeTracker";
import Home from "./Pages/Home"
import Error from "./Pages/Error/Index"

// ReactGA.initialize(GA_ID);

const Routes = () => {
  const routeArray = Object.values(pageRoutes);
  // const isLoggedIn = useSelector((state) => state.userReducer.isLoggedin);
  const { Harlequin } = Colors;
  return (
    // <Suspense fallback={<Loader color={Harlequin} styles="h4" />}>
      <Router>
        {/* <RouteChangeTracker/> */}
        <Layout>
          <Switch>
            <RequireAuth path="/" exact component={Home} />
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

            <RequireAuth path="" component={Error} />
          </Switch>
        </Layout>
      </Router>
    // </Suspense>
  );
};
export default Routes;
