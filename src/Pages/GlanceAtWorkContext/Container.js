import React from "react";
import { useStyles, THEME } from "./containerStyles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardContent,
  Button,
  Paper,
} from "@material-ui/core";
import Breakpoints from "../../Theme/theme.breakpoints";
import * as Images from "../../Components/Hero/Images"
import {Colors} from "../../Theme/color.constants"
import {Data} from "../../Utils/Constants/Language/en/GlanceAtWorkData"
import CustomImage from "../../Components/CustomImage"
const Container = ({backColor}) => {
  const classes = useStyles();
  const {image1,image2,image3} = Images
  const {title,subtitle,buttonText} = Data
  const {whiteColor} = Colors
  const {
    serviceHeading,
    root,
    card,
    devSec,
    cardSec,
    cardContent,
    seeMore
  } = classes;
  return (
    <>
      <Paper style={{backgroundColor: backColor}} className={root} elevation={0}>
        <section className={serviceHeading}>
          <MuiThemeProvider theme={THEME}>
            <Typography variant="h4" >
            {title}
            </Typography>
          </MuiThemeProvider>
        </section>
        <section className={cardSec}>
          <Card className={card}>
            <CardContent>
              <section >
                <section className={devSec}>
                  <CustomImage width="250px" src={image1} alt=""/>
                  <section className={cardContent}>
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5">
                   {subtitle}
                  </Typography>
                </MuiThemeProvider>
              </section>
                </section>
              </section>
            
            </CardContent>
          </Card>
          <Card className={card}>
            <CardContent>
              <section >
                <section className={devSec}>
                  <CustomImage width="300px" src={image2} alt=""/>
                  <section className={cardContent}>
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5" >
                  {subtitle}
                  </Typography>
                </MuiThemeProvider>
              </section>
                </section>
                
              </section>
             
            </CardContent>
          </Card>
          <Card className={card}>
            <CardContent>
              <section >
                <section className={devSec}>
                  <CustomImage width="317px"  src={image3} alt=""/>
                  <section className={cardContent}>
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5">
                  {subtitle}
                  </Typography>
                </MuiThemeProvider>
              </section>
                </section>
              </section>
            </CardContent>
          </Card>
        </section>
        <section>
        <MuiThemeProvider theme={THEME}>
          <Button
           
            variant="contained"
            size={Breakpoints()}
            className={seeMore}
            color="white"
          >
            {buttonText}
          </Button>
          </MuiThemeProvider>
        </section>
      </Paper>
    </>
  );
};

export default Container;
