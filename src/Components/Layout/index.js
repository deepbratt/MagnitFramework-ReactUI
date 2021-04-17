import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import LayoutStyle from "./style";
import Container from "@material-ui/core/Container";
import LayoutSwiper from "../LayoutSwiper";
import Switch from "../themeToggle/Switch";

const Layout = ({ children }) => {
  const { root, paper } = LayoutStyle();
  const layoutType = useSelector((state) => state.layoutReducer.layoutType);
  return (
    <div className={root}>
      <Container maxWidth={layoutType} disableGutters={true}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={paper}>Header</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={paper}>
              {children}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={paper}>Footer</Paper>
          </Grid>
          <Grid item xs={12}>
            <LayoutSwiper layoutType={layoutType} />
            <Switch />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
