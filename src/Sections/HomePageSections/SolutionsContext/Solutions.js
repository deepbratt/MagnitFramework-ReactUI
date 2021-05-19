import React from "react";
import { useStyles } from "./solutionStyles";
import { Typography, Grid } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import PrimarySection from "./SolutionsPrimarySection";
import MidSection from "./SolutionsMidSection";
import Breakpoints from "../../../Theme/theme.breakpoints";
import { Colors } from "../../../Theme/color.constants";
import { Data } from "../../../Utils/Constants/Language/en/SolutionsText";
import CustomButton from "../../../Components/CustomButton";
import {THEME} from "../../../ContainerStructure/Headings/headingStyles"

const Solutions = () => {
  const classes = useStyles();
  const { root } = classes;
  const { heading, subHeading } = Data;
  const { whiteColor, blackColor } = Colors;
  return (
    <>
      <Grid container className={root} elevation={0}>
        <Grid style={{color: whiteColor}} item lg={12} md={12} xs={12}>
        <MuiThemeProvider theme={THEME}>
            <Typography variant="h4">{heading}</Typography>
            <Typography paragraph={true}>{subHeading}</Typography>
          </MuiThemeProvider>
        </Grid>
        <PrimarySection />
        <MidSection />
        <Grid item lg={12} md={12} xs={12}>
        <MuiThemeProvider theme={THEME}>
          <CustomButton
            style={{
              backgroundColor: whiteColor,
              padding: ".3rem 1.9rem",
              color: blackColor,
              borderRadius: "0px"
            }}
            variant="contained"
            size={Breakpoints()}
          >
            See More
          </CustomButton>
        </MuiThemeProvider>
        </Grid>
      </Grid>
    </>
  );
};

export default Solutions;
