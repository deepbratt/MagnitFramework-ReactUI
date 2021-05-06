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

const Container = ({backColor}) => {
  const classes = useStyles();
  const {image1,image2,image3} = Images
  const {
    serviceHeading,
    root,
    card,
    dev,
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
            <Typography variant="h4" color="white">
              A Glance at Our Work
            </Typography>
          </MuiThemeProvider>
        </section>
        <section className={cardSec}>
          <Card className={card}>
            <CardContent>
              <section className={devSec}>
                <section>
                  <img width="83%" height="100%" src={image1} alt=""/>
                </section>
              </section>
              <section >
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5" color="inherit">
                    Alife App
                  </Typography>
                </MuiThemeProvider>
              </section>
            </CardContent>
          </Card>
          <Card className={card}>
            <CardContent>
              <section className={cardContent}>
                <section>
                  <img width="83%" height="100%" src={image2} alt="" />
                </section>
              </section>
              <section>
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5" color="inherit">
                    Alife App
                  </Typography>
                </MuiThemeProvider>
              </section>
            </CardContent>
          </Card>
          <Card className={card}>
            <CardContent>
              <section className={dev}>
                <section>
                  <img width="83%" height="100%" src={image3} alt=""/>
                </section>
              </section>
              <section>
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5" color="inherit">
                    Alife App
                  </Typography>
                </MuiThemeProvider>
              </section>
            </CardContent>
          </Card>
        </section>
        <section>
          <Button
          className={seeMore}
            variant="contained"
            size={Breakpoints()}
            color="white"
          >
            See More
          </Button>
        </section>
      </Paper>
    </>
  );
};

export default Container;
