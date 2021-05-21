import React from "react";
import {
  useStyles,
} from "../../Sections/HomePageSections/ServicesContext/servicesStyles";
import { Typography, Paper, Hidden, Grid } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {THEME} from "../../ContainerStructure/Headings/headingStyles"
import { Array, Data } from "../../Utils/Constants/Language/en/CareersData";
import Content from "../../Components/Card";
import Section from "../Section";
const Services = () => {
  const classes = useStyles();
  const { title, subTitle } = Data;
  const { root, serviceHeading, cardSec, underlined } = classes;

  return (
    <>
      <Grid className={root} elevation={0}>
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
          </MuiThemeProvider>
        </section>
        
        <Grid container className={cardSec}>
          <Content data={Array} />
        </Grid>
       
       
      </Grid>
    </>
  );
};

export default Services;
