import React from "react";
import WeOffer from "./WeOffer/WeOfferContext";
import { Grid, Typography } from "@material-ui/core";
import ServicesSectionStyles from "../../Pages/Services/style";
import { useStyles } from "./WeOffer/weOfferStyles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { THEME } from "../../ContainerStructure/Headings/headingStyles";
import { Colors } from "../../Theme/color.constants";
import Banner from "./Banner";
import Slider from "./ReviewSlider";
import Main from "./WhyUsContainer"
import CommentSection from "../../Components/CommentSection";

const Solutions = () => {
  const { linearBackground } = Colors;
  const { root } = ServicesSectionStyles();
  const { underlined } = useStyles();
  return (
    <>
    <CommentSection>
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
        </CommentSection>
      
    </>
  );
};

export default Solutions;
