import React from "react";
import { useStyles } from "./containerStyles";
import { Typography, Paper, Grid } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import PrimarySection from "./PrimarySection";
import SecondarySection from "./SecondarySection";
import {
  PrimaryArray,
  SecondaryArray,
} from "../../../Utils/Constants/Language/en/PartnerWithUsData";
import { THEME } from "../../../ContainerStructure/Headings/headingStyles";
import Section from "../../../Pages/Section";
import PointList from "../../../Components/PointBadge/PointList";
const Container = () => {
  const classes = useStyles();
  const { root, underlined } = classes;
  return (
    <>
      {/* <Grid container>
        <Grid item md={12} xs={12}>
          <Grid className={root} elevation={0}>
                <Typography variant="h2" color="inherit">
                  Why Partner <span className={underlined}>with Us?</span>
                </Typography>
          </Grid>
        </Grid>
        <Grid item md={6} xs={12}>
          <PrimarySection
          data={PrimaryArray}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <SecondarySection
            data={SecondaryArray}
          />
        </Grid>
      </Grid> */}
      <Section title={"Why Partner /with Us?"}>
        <PointList data={PrimaryArray} horizontal={true} lgBreakpoint={6}/>
      </Section>
    </>
  );
};

export default Container;
