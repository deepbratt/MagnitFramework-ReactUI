import React from "react";
import { Grid } from "@material-ui/core";
import Main from "./MainComponent/AboutMainSection";
import AboutUsNumberContext from "./NumberContext/AboutUsNumberContext";
import Testimonial from "./Testimonials/Testimonial";
import MissionContext from "./Mission&Vision/MissionContext"
// import WhyUsContainer from "./WhyUsContainer"
import Infrastructure from "./InfrastructureSection/InfrastructureContainer"
const AboutUs = () => {
  return (
    <>
      <Grid container>
        <Grid item lg={12} md={12} xs={12}>
          <Main />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <AboutUsNumberContext />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <Testimonial />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <MissionContext />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <Infrastructure />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
