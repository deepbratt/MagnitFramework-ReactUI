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

const FeaturesSection = ({data,title}) => {
  const { left, right , reversed,container} = SolutionsStyles();
  const item1 = data[0]
  const item2 = data[1]
  const item3 = data[2]
  return (
    <>
      <Grid className={container} container spacing={5}>
        <Grid item xs={12}>
          <CustomTitle
            style={{ marginBottom: "50px" }}
            underlined={true}
            text={title}
          />
        </Grid>

        <Grid className={left} item md={4} xs={12}>
          <img lg={4} md={8} xs={12} src={item1.image} alt="" />
        </Grid>
        <Grid style={{ display: "flex" }} item md={8} xs={12}>
          <FeaturesRow data={item1.dataArray} />
        </Grid>
        <Grid style={{ display: "flex" }} item md={8} xs={12}>
          <FeaturesRow
            data={item2.dataArray}
            flexDirection="row-reverse"
          />
        </Grid>
        <Grid className={right} item md={4} xs={12}>
          <img lg={4} md={8} xs={12} src={item2.image} alt="" />
        </Grid>
        <Grid item className={reversed}>
        <Grid className={left} item md={4} xs={12}>
          <img lg={4} md={8} xs={12} src={item3.image} alt="" />
        </Grid>
        <Grid style={{ display: "flex" }} item md={8} xs={12}>
          <FeaturesRow data={item3.dataArray} />
        </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FeaturesSection;
