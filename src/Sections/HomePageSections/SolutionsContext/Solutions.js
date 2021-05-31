import React from "react";
import { Grid } from "@material-ui/core";
import SolutionsSection from "./SolutionsSection";
import { Colors } from "../../../Theme/color.constants";
import { Data } from "../../../Utils/Constants/Language/en/SolutionsText";
import CustomButton from "../../../Components/CustomButton";
import { SolutionsContent } from "../../../Utils/Constants/Language/en/SolutionsText";
import CustomTitle from "../../../Pages/Section/CustomTitle";
import BackGroudnPatternLeft from "../../../assets/OurBlogs/LatestBlogPattern.png";
import BackGroudnPatternRight from "../../../assets/OurBlogs/LatestBlogPatternRight.png";
import Section from "../../../Pages/Section";

const Solutions = () => {
  const { heading, subHeading } = Data;
  const { whiteColor } = Colors;
  return (
    <Section backColor={BlueRibbon} patterns={ourWorkSectionPatterns}>
      <Grid container>
        <Grid style={{ color: whiteColor }} item lg={12} md={12} xs={12}>
          <CustomTitle
            style={{ marginBottom: "20px" }}
            underlined={false}
            subTitle={subHeading}
            color={whiteColor}
            text={heading}
            subTitleColor={whiteColor}
          />
        </Grid>
        <Grid style={{ marginBottom: "20px" }} container spacing={2}>
          <Grid item xs={12}>
            <SolutionsSection data={SolutionsContent} />
          </Grid>
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <CustomButton color="secondary">See More</CustomButton>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Solutions;
