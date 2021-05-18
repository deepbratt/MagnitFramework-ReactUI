import React from "react";
import { useStyles } from "../../Sections/HomePageSections/PartnerWithUsContext/containerStyles";
import { Paper, Grid , Typography} from "@material-ui/core";
import PrimarySection from "../../Sections/HomePageSections/PartnerWithUsContext/PrimarySection";
import SecondarySection from "../../Sections/HomePageSections/PartnerWithUsContext/SecondarySection";
import {THEME} from "../../ContainerStructure/Headings/headingStyles"
import { MuiThemeProvider } from "@material-ui/core/styles";
import {PrimaryArray,SecondaryArray} from "../../Utils/Constants/Language/en/PartnerWithUsData"


const WhyUsContainer = () => {
  const { grid, underlinedText } = useStyles();
  return (
    <>
      <Grid container>
        <Grid item md={12} xs={12}>
          <Typography variant="h4" color="inherit">
            <span className={underlinedText}>Why Us?</span>
          </Typography>
        </Grid>
        <Grid className={grid} item lg={5} md={5} xs={12}>
          <PrimarySection data={PrimaryArray} />
        </Grid>
        <Grid className={grid} item lg={5} md={5} xs={12}>
          <SecondarySection data={SecondaryArray} />
        </Grid>
      </Grid>
    </>
  );
};

export default WhyUsContainer;
