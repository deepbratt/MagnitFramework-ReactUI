import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import React from "react";
import LayoutStyle from "./style";

const Layout = ({ children }) => {
  const { root, paper } = LayoutStyle();
  return (
    <div className={root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={paper}></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={paper}>{children}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={paper}></Paper>
        </Grid>
      </Grid>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
