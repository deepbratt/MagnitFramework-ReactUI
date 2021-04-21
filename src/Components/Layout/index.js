import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import LayoutStyle from "./style";
import Container from "@material-ui/core/Container";
import LayoutSwiper from "../LayoutSwiper";
import Switch from "../themeToggle/Switch";
import Footer from "../../container/Footer";

const Layout = ({ children }) => {
  const { root, paper } = LayoutStyle();
  const layoutType = useSelector((state) => state.layoutReducer.layoutType);
  return (
    <div className={root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={paper}>Header</Paper>
        </Grid>
        <Container maxWidth={layoutType} disableGutters={true}>
          <Grid item xs={12}>
            <Paper elevation={0} className={paper}>
              {children}
            </Paper>
          </Grid>
        </Container>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
