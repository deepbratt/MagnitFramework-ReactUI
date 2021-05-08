import React from "react";
import WeOffer from "./WeOffer/WeOfferContext";
import { Grid, Typography } from "@material-ui/core";
import ServicesSectionStyles from "../../Pages/Services/style";
import { useStyles } from "./WeOffer/weOfferStyles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { THEME } from "../../ContainerStructure/Headings/headingStyles";
import { Colors } from "../../Theme/color.constants";
import Banner from "./Banner";
import PointBage from "../../Components/PointBadge/PointList";
import {
  benefitsData,
  benefitsHeading,
  benefitsSubheading,
} from "../../Utils/Constants/Language/en/SolutionsPageData";
import Section from "../../Pages/Section";
import Slider from "./ReviewSlider";

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
        <Section>
          <MuiThemeProvider theme={THEME}>
            <section>
              <Typography variant="h4" color="inherit">
                {benefitsHeading}
                <span className={underlined}>{benefitsSubheading}</span>
              </Typography>
            </section>
          </MuiThemeProvider>
          <PointBage data={benefitsData} horizontal={true} />
        </Section>
        <Grid item lg={12} md={12} xs={12}>
          <Slider />
        </Grid>
      </Grid>
    </>
  );
};

export default Solutions;
