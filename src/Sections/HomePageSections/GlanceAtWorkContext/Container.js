import React from "react";
import { useStyles } from "./containerStyles";
import { Typography, CardContent, Grid, Hidden } from "@material-ui/core";
import { Colors } from "../../../Theme/color.constants";
import { Data } from "../../../Utils/Constants/Language/en/GlanceAtWorkData";
import CustomButton from "../../../Components/CustomButton";
import CustomImage from "../../../Components/CustomImage";
import CustomTitle from "../../../Pages/Section/CustomTitle";
import Section from "../../../Pages/Section";
import BackGroudnPatternLeft from "../../../assets/OurBlogs/LatestBlogPattern.png";
import BackGroudnPatternRight from "../../../assets/OurBlogs/LatestBlogPatternRight.png";

const Container = ({ backColor }) => {
  const classes = useStyles();
  const {
    title,
    subtitleOne,
    subtitleTwo,
    subtitleThree,
    image1,
    image2,
    image3,
    buttonText,
  } = Data;
  const { whiteColor, BlueRibbon } = Colors;
  const {
    root,
    card,
    devSec,
    cardSec,
    cardContent,
    leftPattern,
    rightPattern,
  } = classes;

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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomTitle
            style={{ marginBottom: "20px", color: "#fff" }}
            underlined={false}
            color={whiteColor}
            text={title}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={cardSec}>
          <Grid item xs={12} className={card}>
            <CardContent>
              <Grid item className={devSec}>
                <CustomImage width="220px" src={image1} alt="" />
              </Grid>
              <Grid item className={cardContent}>
                <Typography variant="h5" gutterBottom>
                  {subtitleOne}
                </Typography>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={cardSec}>
          <Grid item xs={12} className={card}>
            <CardContent>
              <Grid className={devSec}>
                <CustomImage width="270px" src={image2} alt="" />
              </Grid>
              <Grid item className={cardContent}>
                <Typography variant="h5" gutterBottom>
                  {subtitleTwo}
                </Typography>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={cardSec}>
          <Grid item xs={12} className={card}>
            <CardContent>
              <Grid className={devSec}>
                <CustomImage width="275px" src={image3} alt="" />
              </Grid>
              <Grid item className={cardContent}>
                <Typography variant="h5" gutterBottom>
                  {subtitleThree}
                </Typography>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>

        <Grid item lg={12} md={12} xs={12}>
          <CustomButton color="secondary">{buttonText}</CustomButton>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Container;
