import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import LayoutStyle from "./style";
import Footer from "../container/Footer";
import Container from "@material-ui/core/Container";
import Header from "../Pages/Section/Header/Header";
import { useLocation } from "react-router";
import { useEffect, useRef, useState } from "react";

const Layout = ({ children }) => {
  const { root, paper } = LayoutStyle();
  const layoutType = useSelector((state) => state.layoutReducer.layoutType);
  const [scrollProgress, setScrollProgress] = useState(0)
  const location = useLocation()
  const element = useRef()
  const childRef = useRef()

  useEffect(()=>{
    element.current.scrollIntoView();
  },[location.pathname])

  useEffect(()=>{
    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  },[])

  const handleScroll = () => {
    let scrollTop = document.body.scrollTop
    let clientHeight = document.body.clientHeight
  let scrollHeight = element.current.scrollHeight 
  let totalScroll = scrollHeight - clientHeight
  let progressed = Math.round((scrollTop/totalScroll)*100)
  setScrollProgress(progressed)
  };

  return (
    <div className={root} ref={element}>
      <Header scroll={scrollProgress}/>
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={0} className={paper} ref={childRef}>
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
