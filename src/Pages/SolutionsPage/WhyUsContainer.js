import React from "react";
import { useStyles, THEME } from "../PartnerWithUsContext/containerStyles";
import { Typography, Paper, Grid } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import PrimarySection from "../PartnerWithUsContext/PrimarySection";
import SecondarySection from "../PartnerWithUsContext/SecondarySection";
import {
    benefitsData,
    benefitsHeading,
    benefitsSubheading,
    benefitsSecondaryData
  } from "../../Utils/Constants/Language/en/SolutionsPageData";


const WhyUsContainer = () => {
    const classes = useStyles();
  const { root,underlined,grid } = classes;
  
  return (
    <>
      <Grid container >
        <Grid item md={12} xs={12}>
          <Paper className={root} elevation={0}>
            <section>
              <MuiThemeProvider theme={THEME}>
                <Typography variant="h4" color="inherit">
                  {benefitsHeading} <span className={underlined}>
                  {benefitsSubheading}
                  </span>
                </Typography>
              </MuiThemeProvider>
            </section>
          </Paper>
        </Grid>
        <Grid className={grid} item md={5} xs={12}>
          <PrimarySection
          data={benefitsData}
          />
        </Grid>
        <Grid className={grid} item md={5} xs={12}>
          <SecondarySection
            data={benefitsSecondaryData}
          />
        </Grid>
      </Grid>
    </>
  );

}

export default WhyUsContainer
