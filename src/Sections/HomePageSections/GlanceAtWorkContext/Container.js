import React from "react";
import { useStyles} from "./containerStyles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardContent,
  Grid,
} from "@material-ui/core";
import Breakpoints from "../../../Theme/theme.breakpoints";
import * as Images from "../../../Components/Hero/Images"
import {Colors} from "../../../Theme/color.constants"
import {Data} from "../../../Utils/Constants/Language/en/GlanceAtWorkData"
import CustomButton from "../../../Components/CustomButton";
import CustomImage from "../../../Components/CustomImage";
import {THEME} from '../../../ContainerStructure/Headings/headingStyles'
const Container = ({backColor}) => {
  const classes = useStyles();
  const {image1,image2,image3} = Images
  const {title,subtitle,buttonText} = Data
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
          <MuiThemeProvider theme={THEME}>
            <Typography variant="h4" >
            {title}
            </Typography>
          </MuiThemeProvider>
          </Grid>
        <Grid item className={cardSec}>
          <Card className={card}>
            <CardContent>
                <Grid item className={devSec}>
                  <CustomImage width="250px" src={image1} alt=""/>
                  <Grid item className={cardContent}>
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5" >
                   {subtitle}
                  </Typography>
                </MuiThemeProvider>
              </Grid>
                </Grid>
            
            </CardContent>
          </Card>
          <Card className={card}>
            <CardContent>
                <Grid className={devSec}>
                  <CustomImage width="300px" src={image2} alt=""/>
                  <Grid item className={cardContent}>
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5" >
                  {subtitle}
                  </Typography>
                </MuiThemeProvider>
              </Grid>
                </Grid>

            </CardContent>
          </Card>
          <Card className={card}>
            <CardContent>
                <Grid className={devSec}>
                  <CustomImage width="317px"  src={image3} alt=""/>
                  <Grid item className={cardContent}>
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5">
                  {subtitle}
                  </Typography>
                </MuiThemeProvider>
              </Grid>
                </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
        <MuiThemeProvider theme={THEME}>
          <CustomButton
            variant="contained"
            size={Breakpoints()}
            className={seeMore}
            color="white"
          >
            {buttonText}
          </CustomButton>
          </MuiThemeProvider>
        </Grid>
      </Grid>
    </>
  );
};

export default Container;
