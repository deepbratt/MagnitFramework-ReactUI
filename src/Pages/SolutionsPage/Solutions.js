import React from "react";
import WeOffer from "./WeOffer/WeOfferContext";
import { Grid, Typography } from "@material-ui/core";
import ServicesSectionStyles from "../../Pages/Services/style";
import { useStyles } from "./WeOffer/weOfferStyles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { THEME } from "../../ContainerStructure/Headings/headingStyles";
import { Colors } from "../../Theme/color.constants";
import Banner from "./Banner";
import CommentSection from "../../Components/CommentSection";
import Main from "./WhyUsContainer"

const Solutions = () => {
  const { linearBackground } = Colors;
  const { root } = ServicesSectionStyles();
  const { underlined } = useStyles();
  return (
    <>
      <Grid container>
        <Grid
          className={root}
          style={{ paddingBottom: "50px", background: linearBackground }}
          item
          lg={12}
          md={12}
          xs={12}
        >
          <Banner />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <WeOffer />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <Main />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <CommentSection />
        </Grid>
      </Grid>
    </>
  );
};

export default Solutions;
