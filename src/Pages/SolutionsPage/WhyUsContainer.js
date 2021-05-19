import React from "react";
import { useStyles } from "../../Sections/HomePageSections/PartnerWithUsContext/containerStyles";
import { Typography, Paper, Grid } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import PrimarySection from "../../Sections/HomePageSections/PartnerWithUsContext/PrimarySection";
import SecondarySection from "../../Sections/HomePageSections/PartnerWithUsContext/SecondarySection";
import {
    benefitsData,
    benefitsHeading,
    benefitsSubheading,
    benefitsSecondaryData
  } from "../../Utils/Constants/Language/en/SolutionsPageData";
  import {THEME} from "../../ContainerStructure/Headings/headingStyles"


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
        <Grid item md={6} xs={12}>
          <PrimarySection
          data={benefitsData}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <SecondarySection
            data={benefitsSecondaryData}
          />
        </Grid>
      </Grid>
    </>
  );

}

export default WhyUsContainer
