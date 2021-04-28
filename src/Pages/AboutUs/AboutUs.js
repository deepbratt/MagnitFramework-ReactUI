import React from "react";
import { Grid } from "@material-ui/core";
import Main from "./MainComponent/AboutMainSection";
import AboutUsNumberContext from "./NumberContext/AboutUsNumberContext";

const AboutUs = () => {
  return (
    <>
      <Grid container>
        <Grid item md={12} xs={12}>
          <Main />
        </Grid>
        <Grid item md={12} xs={12}>
          <AboutUsNumberContext />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
