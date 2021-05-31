import React from "react";
import { useStyles } from "../../Sections/HomePageSections/GlanceAtWorkContext/containerStyles";
import { Typography, Card, CardContent, Grid } from "@material-ui/core";
import Breakpoints from "../../Theme/theme.breakpoints";
import { Colors } from "../../Theme/color.constants";
import { Data } from "./constants";
import CustomButton from "../../Components/CustomButton/index";
import CustomImage from "../../Components/CustomImage";
import CustomTitle from "../../Pages/Section/CustomTitle";

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
  const { whiteColor } = Colors;
  const { root, card, devSec, cardSec, cardContent, seeMore } = classes;
  return (
    <>
      <Grid
        container
        style={{ backgroundColor: backColor }}
        className={root}
        elevation={0}
      >
        <Grid item lg={12} md={12} xs={12}>
          <CustomTitle color={whiteColor} text={title} underlined={false} />
        </Grid>
        <Grid className={cardSec}>
          <Grid item xs={12} sm={5} md={4} lg={3} className={card}>
            <CardContent>
              <Grid item className={devSec}>
                <CustomImage width="290px" src={image1} alt="" />
              </Grid>
              <Grid item className={cardContent}>
                <Typography variant="h5" gutterBottom>
                  {subtitleOne}
                </Typography>
              </Grid>
            </CardContent>
          </Grid>
          <Grid item xs={12} sm={5} md={4} lg={3} className={card}>
            <CardContent>
              <Grid className={devSec}>
                <CustomImage width="290px" src={image2} alt="" />
              </Grid>
              <Grid item className={cardContent}>
                <Typography variant="h5" gutterBottom>
                  {subtitleTwo}
                </Typography>
              </Grid>
            </CardContent>
          </Grid>
          <Grid item xs={12} sm={5} md={4} lg={3} className={card}>
            <CardContent>
              <Grid className={devSec}>
                <CustomImage width="290px" src={image3} alt="" />
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
    </>
  );
};

export default Container;
