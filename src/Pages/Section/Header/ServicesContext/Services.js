import React from "react";
import { useStyles, THEME } from "./servicesStyles";
import { Typography, Paper, Hidden } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";

import {
  Data,
  ServicesData,
} from "../../../../Utils/Constants/Language/en/ServicesText";
import Content from "../../../../Components/Card";
const Services = () => {
  const classes = useStyles();
  const { title, subTitle, subheading } = Data;
  const { root, serviceHeading, cardSec, underlined } = classes;

  return (
    <>
      <Paper className={root} elevation={0}>
        <section className={serviceHeading}>
          <MuiThemeProvider theme={THEME}>
            <Typography variant="h4" >
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
          <Content data={ServicesData} />
        </section>
      </Paper>
    </>
  );
};

export default Services;
