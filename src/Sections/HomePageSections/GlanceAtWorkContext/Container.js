import React from "react";
import { useStyles } from "./containerStyles";
import { Typography, CardContent, Grid } from "@material-ui/core";
import { Colors } from "../../../Theme/color.constants";
import { Data } from "../../../Utils/Constants/Language/en/GlanceAtWorkData";
import CustomButton from "../../../Components/CustomButton";
import CustomImage from "../../../Components/CustomImage";
import CustomTitle from "../../../Pages/Section/CustomTitle";
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
  const { card, devSec, cardSec, cardContent } = classes;
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomTitle style={{marginBottom: "20px", color: "#fff"}} underlined={false} color={whiteColor} text={title} />
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
    </>
  );
};

export default Container;
