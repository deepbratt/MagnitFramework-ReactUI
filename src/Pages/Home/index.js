import React from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "../../Components/Slider/Slider";
import { connect } from "react-redux";
import Services from "../Section/Header/Services/Services"
import Slide from "../../Components/Slider/Container"
import Solutions from "../Solutions/Solutions";

const Home = (props) => {
  return (
    <>
      <Grid  container >
        <Grid item md={12} xs={12}>
          <Slide />
        </Grid>
        <Grid  item md={12} xs={12}>
          <Services {...props}/>
        </Grid>
        <Grid  item md={12} xs={12}>
          <Solutions/>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => ({
  value: state.themeReducer.lightThemeEnabled,
});

export default connect(mapStateToProps)(Home);
