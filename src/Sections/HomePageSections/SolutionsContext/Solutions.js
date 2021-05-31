import React from "react";
import { useStyles } from "./solutionStyles";
import { Typography, Grid, Hidden } from "@material-ui/core";
import PrimarySection from "./SolutionsPrimarySection";
import MidSection from "./SolutionsMidSection";
import Breakpoints from "../../../Theme/theme.breakpoints";
import { Colors } from "../../../Theme/color.constants";
import { Data } from "../../../Utils/Constants/Language/en/SolutionsText";
import CustomButton from "../../../Components/CustomButton";
import CustomTitle from "../../../Pages/Section/CustomTitle";
import BackGroudnPatternLeft from "../../../assets/OurBlogs/LatestBlogPattern.png";
import BackGroudnPatternRight from "../../../assets/OurBlogs/LatestBlogPatternRight.png";
import Section from "../../../Pages/Section";

const Solutions = () => {
  const classes = useStyles();
  const { root, leftPattern, rightPattern } = classes;
  const { heading, subHeading } = Data;
  const { whiteColor, BlueRibbon } = Colors;

  const ourWorkSectionPatterns = [
    {
      image: (
        <Hidden smDown>
          <Grid
            className={leftPattern}
            style={{ position: "absolute" }}
            item
            xs={3}
          >
            <img
              width="100%"
              height="100%"
              src={BackGroudnPatternLeft}
              alt=""
            />
          </Grid>
        </Hidden>
      ),
      styles: leftPattern,
    },
    {
      image: (
        <Hidden smDown>
          <Grid
            className={`${rightPattern}`}
            style={{ position: "absolute" }}
            item
            xs={4}
          >
            <img
              width="100%"
              height="100%"
              src={BackGroudnPatternRight}
              alt=""
            />
          </Grid>
        </Hidden>
      ),
      styles: rightPattern,
    },
  ];

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
            <PrimarySection />
          </Grid>
          <Grid item xs={12}>
            <MidSection />
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
