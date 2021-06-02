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
import CustomTitle from "../../Pages/Section/CustomTitle";

const FeaturesSection = () => {
  const { left, right } = SolutionsStyles();
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <CustomTitle
            style={{ marginBottom: "50px" }}
            underlined={true}
            text={heading}
          />
        </Grid>

        <Grid className={left} item md={4} xs={12}>
          <img src={featuresDataOne.image} alt="" />
        </Grid>
        <Grid style={{ display: "flex" }} item md={8} xs={12}>
          <FeaturesRow data={featuresDataOne.content} />
        </Grid>
        <Grid style={{ display: "flex" }} item md={8} xs={12}>
          <FeaturesRow
            data={featuresDataTwo.content}
            flexDirection="row-reverse"
          />
        </Grid>
        <Grid className={right} item md={4} xs={12}>
          <img src={featuresDataTwo.image} alt="" />
        </Grid>

        <Grid className={left} item md={4} xs={12}>
          <img src={featuresDataThree.image} alt="" />
        </Grid>
        <Grid style={{ display: "flex" }} item md={8} xs={12}>
          <FeaturesRow data={featuresDataThree.content} />
        </Grid>
      </Grid>
    </>
  );
};

export default FeaturesSection;
