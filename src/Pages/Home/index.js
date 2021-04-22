import React from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "../../Components/Slider/Slider";
import { connect } from "react-redux";
import Services from "../Section/Header/ServicesContext/Services"
import Slide from "../../Components/Slider/Container"
import Solutions from "../SolutionsContext/Solutions";
import PartnerContext from "../PartnerWithUsContext/Maincontainer"
import GlanceSection from "../GlanceAtWorkContext/Container"

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
        <Grid  item md={12} xs={12}>
          <PartnerContext/>
        </Grid>
        <Grid  item md={12} xs={12}>
          <GlanceSection/>
        </Grid>
      </Grid>
     
    </>
  );
};

const mapStateToProps = (state) => ({
  value: state.themeReducer.lightThemeEnabled,
});

export default connect(mapStateToProps)(Home);
