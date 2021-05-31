import React from "react";
import { useStyles } from "./containerStyles";

import { Typography, CardContent, Grid, Hidden } from "@material-ui/core";

import { Colors } from "../../../Theme/color.constants";
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
        {props.data.map((item, index) => (
          <Grid item xs={12} lg={4} md={4} key={"ourWork-" + index}
          >
            <Card style={{height:"100%"}}>
              <CustomImage src={item.image} style={{width:"100%"}}/>
                <CardContent className={cardContent}>
                    <Typography variant="h5">
                      {item.subtitle}
                    </Typography>
                </CardContent>
          </Card>
            </Grid>
        ))}
        <Grid item lg={12} md={12} xs={12}>
          <CustomButton color="secondary">{props.buttonText}</CustomButton>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Container;
