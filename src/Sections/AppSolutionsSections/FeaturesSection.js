import React from "react";
import { Grid } from "@material-ui/core";
import {
  heading,
  featuresDataOne,
  featuresDataTwo,
  featuresDataThree,
} from "../../Utils/Constants/Language/en/AppSolutionsData";
import FeaturesRow from "./FeaturesRow";
import { SolutionsStyles } from "../../Pages/AppSolutionsPage/SolutionsStyles";
import CustomTitle from "../../Pages/Section/CustomTitle"

const FeaturesSection = () => {
  const { Images, img } = SolutionsStyles();
  return (
    <>
      <Grid justify="center" container>
        <Grid style={{ marginTop: 0 }} item lg={12} md={12} xs={12}>
        <CustomTitle style={{marginBottom: "50px"}} underlined={true} text={heading} />
        </Grid>
        <Grid style={{ zIndex: "2",margin: "5% 0" }} item lg={3} md={5} xs={8}>
          {featuresDataOne.map((data, index) => {
            return (
              <section key={'fs1-'+index}  className={Images}>
                <img index={index} className={img} src={data.image} alt=""/>
              </section>
            );
          })}
        </Grid>
        <Grid style={{ zIndex: "2",margin: "5% 0" }} item lg={7} md={7} xs={8}>
          <FeaturesRow data={featuresDataOne} />
        </Grid>
          <Grid  item lg={7} md={7} xs={8}>
          <FeaturesRow data={featuresDataTwo} />
        </Grid>
           <Grid item lg={3} md={4} xs={12}>
          {featuresDataTwo.map((data, index) => {
            return (
              <section key={'fs2-'+index}  className={Images}>
                <img index={index} className={img} src={data.image} alt=""/>
              </section>
            );
          })}
        </Grid>
      
        <Grid style={{ zIndex: "2",margin: "5% 0" }} item lg={3} md={5} xs={8}>
          {featuresDataThree.map((data, index) => {
            return (
              <section key={'fs3-'+index} className={Images}>
                <img index={index} className={img} src={data.image} alt=""/>
              </section>
            );
          })}
        </Grid>
        <Grid style={{ zIndex: "2",margin: "5% 0" }} item lg={7} md={7} xs={8}>
          <FeaturesRow data={featuresDataThree} />
        </Grid>
      </Grid>
    </>
  );
};

export default FeaturesSection;
