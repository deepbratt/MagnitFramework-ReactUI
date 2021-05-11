import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import LayoutStyle from "./style";
import Footer from "../container/Footer";
import Container from "@material-ui/core/Container";
import Header from "../Pages/Section/Header/Header";
import { useLocation } from "react-router";
import { useEffect, useRef } from "react";

const Layout = ({ children }) => {
  const { root, paper } = LayoutStyle();
  const layoutType = useSelector((state) => state.layoutReducer.layoutType);

  const location = useLocation()
  const element = useRef()
  useEffect(()=>{
    element.current.scrollIntoView();
  },[location.pathname])
  return (
    <div className={root} ref={element}>
      <Header />
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={0} className={paper}>
            {children}
          </Paper>
        </Grid>
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
