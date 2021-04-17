import React from "react";
import Grid from "@material-ui/core/Grid";
import Switch from "../../Components/themeToggle/Switch";
import Header from "../Section/Header/Header";
import Slider from "../../Components/Slider/Slider";
import { connect } from "react-redux";
import Services from "../Section/Header/Services/Services"

const Home = (props) => {
  return (
    <>
      <Grid  container >
        <Grid  item md={12} xs={12}>
          <Header {...props}/>
        </Grid>
        <Grid item md={12} xs={12}>
          <Slider {...props} />
        </Grid>
        <Grid  item md={12} xs={12}>
          <Services {...props}/>
          <Switch/>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => ({
  value: state.themeReducer.lightThemeEnabled,
});

export default connect(mapStateToProps)(Home);
