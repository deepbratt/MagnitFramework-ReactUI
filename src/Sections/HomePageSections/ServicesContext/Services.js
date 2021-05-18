import React from "react";
import { useStyles } from "./servicesStyles";
import { Typography, Hidden, Grid } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";

import {
  Data,
  ServicesData,
} from "../../../Utils/Constants/Language/en/ServicesText";
import Content from "../../../Components/Card";
import { THEME } from "../../../ContainerStructure/Headings/headingStyles";
const Services = () => {
  const classes = useStyles();
  const { title, subTitle } = Data;
  const { root, cardSec, underlined, subheading } = classes;

  return (
    <>
      <Grid container className={root} elevation={0}>
        <Grid item lg={12} md={12} xs={12}>
          <MuiThemeProvider theme={THEME}>
            <Typography variant="h4">
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
        </Grid>
        <Grid item className={cardSec}>
          <Content data={ServicesData} />
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
