import React from "react";
import { useStyles} from "./containerStyles";
import {
  Typography,
  CardContent,
  Grid
} from "@material-ui/core";
import Breakpoints from "../../../Theme/theme.breakpoints";
import * as Images from "../../../Components/Hero/Images"
import {Colors} from "../../../Theme/color.constants"
import {Data} from "../../../Utils/Constants/Language/en/GlanceAtWorkData"
import CustomButton from "../../../Components/CustomButton";
import CustomImage from "../../../Components/CustomImage";
const Container = ({subtitleOne,subtitleTwo,subtitleThree,backColor}) => {
  const classes = useStyles();
  const {image1,image2,image3} = Images
  const {title,buttonText} = Data
  const {whiteColor} = Colors
  const {
    root,
    card,
    devSec,
    cardSec,
    cardContent,
    seeMore
  } = classes;
  return (
    <>
      <Grid container style={{backgroundColor: backColor}} className={root} elevation={0}>
        
      <Grid style={{color: whiteColor}} item lg={12} md={12} xs={12}>
            <Typography variant="h2" >
            {title}
            </Typography>

          </Grid>
        <Grid className={cardSec}>
          <Grid item  xs={12} sm={5} md={4} lg={3}  className={card}>
            <CardContent>
                <Grid item className={devSec}>
                  <CustomImage width="220px" src={image1} alt=""/>
                 
                </Grid>
              <Grid item className={cardContent}>
                  <Typography variant="h5" gutterBottom>
                   {subtitleOne}
                  </Typography>
                  </Grid>
            </CardContent>
          </Grid>
          <Grid item  xs={12} sm={5} md={4} lg={3}  className={card}>
            <CardContent>
                <Grid  className={devSec}>
                  <CustomImage width="270px" src={image2} alt=""/>
                 
                </Grid>
                <Grid item className={cardContent}>
                  <Typography variant="h5" gutterBottom>
                  {subtitleTwo}
                  </Typography>
              </Grid>
            </CardContent>
          </Grid>
          <Grid item  xs={12} sm={5} md={4} lg={3}  className={card}>
            <CardContent>
                <Grid className={devSec}>
                  <CustomImage width="275px"  src={image3} alt=""/>
                 
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
          <CustomButton
            variant="contained"
            size={Breakpoints()}
            className={seeMore}
          >
            {buttonText}
          </CustomButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Container;
