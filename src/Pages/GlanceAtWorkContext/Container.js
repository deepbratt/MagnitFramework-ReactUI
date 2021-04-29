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

const Container = () => {
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
  } = classes;
  return (
    <>
      <Paper className={root} elevation={0}>
        <section className={serviceHeading}>
          <MuiThemeProvider theme={THEME}>
            <Typography variant="h4" color="inherit">
              A Glance at Our Work
            </Typography>
          </MuiThemeProvider>
        </section>
        <section className={cardSec}>
          <Card className={card}>
            <CardContent>
              <section className={devSec}>
                <section>
                  <img width="100%" height="100%" src={image1} alt=""/>
                </section>
              </section>
              <section>
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5" color="inherit">
                    Alife App
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elitse do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud xercitation ullamco
                    laboris nisi ut aliquip
                  </Typography>
                </MuiThemeProvider>
              </section>
            </CardContent>
          </Card>
          <Card className={card}>
            <CardContent>
              <section className={cardContent}>
                <section>
                  <img width="100%" height="100%" src={image2} alt=""/>
                </section>
              </section>
              <section>
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5" color="inherit">
                    Alife App
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elitse do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud xercitation ullamco
                    laboris nisi ut aliquip
                  </Typography>
                </MuiThemeProvider>
              </section>
            </CardContent>
          </Card>
          <Card className={card}>
            <CardContent>
              <section className={dev}>
                <section>
                  <img width="100%" height="100%" src={image3} alt=""/>
                </section>
              </section>
              <section>
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5" color="inherit">
                    Alife App
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elitse do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud xercitation ullamco
                    laboris nisi ut aliquip
                  </Typography>
                </MuiThemeProvider>
              </section>
            </CardContent>
          </Card>
        </section>
        <section>
          <Button
            style={{ textTransform: "none", marginLeft: "10px" }}
            variant="contained"
            size={Breakpoints()}
            color="secondary"
          >
            See More
          </Button>
        </section>
      </Paper>
    </>
  );
};

export default Container;
