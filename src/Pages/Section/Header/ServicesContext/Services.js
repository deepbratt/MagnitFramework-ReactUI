import React from "react";
import { useStyles, THEME } from "./servicesStyles";
import {
  Typography,
  Card,
  CardContent,
  Paper,
  Hidden,
} from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import * as Icons from "../../../../assets/icons/icon.constants";
import { Data } from "../../../../Utils/Constants/Language/en/ServicesText";
const Services = (props) => {
  const { value } = props;
  const classes = useStyles();
  const {
    title,
    subTitle,
    subheading,
    devTitle,
    devParagraph,
    appTitle,
    appParagraph,
    webTitle,
    webParagraph,
    digitalTitle,
    digitalParagraph,
  } = Data;
  const {
    root,
    serviceHeading,
    cardSec,
    card,
    devSec,
    devSub,
    dev,
    appSec,
    appSub,
    app,
    webSub,
    webSec,
    web,
    digital,
    digitalSec,
    digitalSub,
    underlined,
  } = classes;
  const { App, Profile, Web, Digital } = Icons;
  return (
    <>
      <Paper className={root} elevation={0}>
        <section className={serviceHeading}>
          <MuiThemeProvider theme={THEME}>
            <Typography variant="h4" color="inherit">
              <Hidden smDown>
                {title}
                <span className={underlined}>{subTitle}</span>
              </Hidden>
              <Hidden mdUp>
                {title} <br />
                <span className={underlined}>{subTitle}</span>
              </Hidden>
            </Typography>
            <Typography paragraph={true} color="inherit">
              {subheading}
            </Typography>
          </MuiThemeProvider>
        </section>
        <section className={cardSec}>
          <Card className={card}>
            <CardContent>
              <section className={devSec}>
                <section className={value === "LIGHT" ? devSub : dev}>
                  <img
                    alt="icon"
                    className={classes.profileIcon}
                    src={Profile}
                  />
                </section>
              </section>
              <section>
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5" color="inherit">
                    {devTitle}
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    {devParagraph}
                  </Typography>
                </MuiThemeProvider>
              </section>
            </CardContent>
          </Card>
          <Card className={card}>
            <CardContent>
              <section className={appSec}>
                <section className={value === "LIGHT" ? appSub : app}>
                  <img alt="icon" className={classes.appIcon} src={App} />
                </section>
              </section>
              <section>
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5" color="inherit">
                    {appTitle}
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    {appParagraph}
                  </Typography>
                </MuiThemeProvider>
              </section>
            </CardContent>
          </Card>
          <Card className={card}>
            <CardContent>
              <section className={webSec}>
                <section className={value === "LIGHT" ? webSub : web}>
                  <img alt="icon" className={classes.webIcon} src={Web} />
                </section>
              </section>
              <section>
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5" color="inherit">
                    {webTitle}
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    {webParagraph}
                  </Typography>
                </MuiThemeProvider>
              </section>
            </CardContent>
          </Card>
          <Card className={card}>
            <CardContent>
              <section className={digitalSec}>
                <section className={value === "LIGHT" ? digitalSub : digital}>
                  <img
                    alt="icon"
                    className={classes.digitalIcon}
                    src={Digital}
                  />
                </section>
              </section>
              <section>
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5" color="inherit">
                    {digitalTitle}
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    {digitalParagraph}
                  </Typography>
                </MuiThemeProvider>
              </section>
            </CardContent>
          </Card>
        </section>
      </Paper>
    </>
  );
};

export default Services;
