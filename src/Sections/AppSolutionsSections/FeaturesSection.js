import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {useStyles} from "./useStyles"
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
  const { Images, img } = SolutionsStyles();
  const {underlined} = useStyles()
  return (
    <>
      <Grid justify="center" container>
        <Grid style={{ margin: "5% 0%" }} item lg={12} md={12} xs={12}>
            <Typography variant="h2" color="inherit">
              <span className={underlined}>{heading}</span>
            </Typography>
        </Grid>
        <Grid  item lg={3} md={5} xs={8}>
          {featuresDataOne.map((data, index) => {
            return (
              <section className={Images}>
                <img index={index} className={img} src={data.image} />
              </section>
            );
          })}
        </Grid>
        <Grid style={{ zIndex: "2" }} item lg={7} md={7} xs={8}>
          <FeaturesRow data={featuresDataOne} />
        </Grid>
          <Grid   item lg={7} md={7} xs={8}>
          <FeaturesRow data={featuresDataTwo} />
        </Grid>
           <Grid item lg={3} md={4} xs={12}>
          {featuresDataTwo.map((data, index) => {
            return (
              <section className={Images}>
                <img index={index} className={img} src={data.image} />
              </section>
            );
          })}
        </Grid>
      
        <Grid item lg={3} md={5} xs={8}>
          {featuresDataThree.map((data, index) => {
            return (
              <section className={Images}>
                <img index={index} className={img} src={data.image} />
              </section>
            );
          })}
        </Grid>
        <Grid item lg={7} md={7} xs={8}>
          <FeaturesRow data={featuresDataThree} />
        </Grid>
      </Grid>
    </>
  );
};

export default FeaturesSection;
