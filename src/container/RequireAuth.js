import React from "react";
import { Route } from "react-router";
import { connect } from "react-redux";

const AuthRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  console.log(isLoggedIn);
  return (
    <Route
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <h1>You need to login first</h1>
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.userReducer.isLoggedin,
});

export default connect(mapStateToProps)(AuthRoute);
