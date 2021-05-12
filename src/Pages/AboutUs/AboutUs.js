import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Main from "./MainComponent/AboutMainSection";
import AboutUsNumberContext from "./NumberContext/AboutUsNumberContext";
import MissionContext from "./Mission&Vision/MissionContext";
import WhyUsContainer from "./WhyUsContainer";
import Foundersy from "./Foundersy/Container";
import Slider from "../../Components/Slider/Container";
import { MainData } from "../../Utils/Constants/Language/AboutUsData";
import { THEME } from "../../ContainerStructure/Headings/headingStyles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { FoundersyStyles } from "./Foundersy/foundersyStyles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const array = [<Foundersy />, <Foundersy />];
const AboutUs = () => {
  const { heroImgsrc, heading } = MainData;
  const { underlined, root, button } = FoundersyStyles();
  return (
    <>
      <Grid container>
        <Grid item lg={12} md={12} xs={12}>
          <Main hero={heroImgsrc} />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <MissionContext />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <AboutUsNumberContext />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <Paper className={root} elevation={0}>
            <MuiThemeProvider theme={THEME}>
              <Typography variant="h4" color="inherit">
                <span className={underlined}>{heading}</span>
              </Typography>
            </MuiThemeProvider>
            <Foundersy indicator={false} slides={array} />
            <button style={{ paddingLeft: "15px" }} className={button}>
              <ArrowBackIosIcon />
            </button>
            <button
              style={{ paddingRight: "10px", paddingLeft: "10px" }}
              className={button}
            >
              <ArrowForwardIosIcon />
            </button>
          </Paper>
        </Grid>
        <Grid item md={12} xs={12}>
          <WhyUsContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
