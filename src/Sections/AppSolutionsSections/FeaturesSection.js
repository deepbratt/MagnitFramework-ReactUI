import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  heading,
  featuresDataOne,
  featuresDataTwo,
  featuresDataThree,
} from "../../Utils/Constants/Language/en/AppSolutionsData";
import { MuiThemeProvider } from "@material-ui/core/styles";
import FeaturesRow from "./FeaturesRow";
import { SolutionsStyles } from "../../Pages/AppSolutionsPage/SolutionsStyles";
import { THEME } from "../../ContainerStructure/Headings/headingStyles";

const FeaturesSection = () => {
  const { Images, img, underlined } = SolutionsStyles();
  return (
    <>
      <Grid container>
        <Grid style={{ margin: "5% 0%" }} item lg={12} md={12} xs={12}>
          <MuiThemeProvider theme={THEME}>
            <Typography variant="h4" color="inherit">
              <span className={underlined}>{heading}</span>
            </Typography>
          </MuiThemeProvider>
        </Grid>
        <Grid style={{ margin: "0 8%" }} item lg={3} md={3} xs={12}>
          {featuresDataOne.map((data, index) => {
            return (
              <section className={Images}>
                <img index={index} className={img} src={data.image} />
              </section>
            );
          })}
        </Grid>
        <Grid style={{ zIndex: "2" }} item lg={6} md={7} xs={12}>
          <FeaturesRow data={featuresDataOne} />
        </Grid>
          <Grid style={{ margin: "0 11%" }}  item lg={5} md={5} xs={12}>
          <FeaturesRow data={featuresDataTwo} />
        </Grid>
           <Grid item lg={4} md={4} xs={12}>
          {featuresDataTwo.map((data, index) => {
            return (
              <section className={Images}>
                <img index={index} className={img} src={data.image} />
              </section>
            );
          })}
        </Grid>
      
        <Grid style={{ margin: "0 8%" }} item lg={3} md={3} xs={12}>
          {featuresDataThree.map((data, index) => {
            return (
              <section className={Images}>
                <img index={index} className={img} src={data.image} />
              </section>
            );
          })}
        </Grid>
        <Grid item lg={6} md={7} xs={12}>
          <FeaturesRow data={featuresDataThree} />
        </Grid>
      </Grid>
    </>
  );
};

export default FeaturesSection;