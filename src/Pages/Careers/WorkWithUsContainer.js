import React from "react";
import {
  useStyles,
} from "../../Sections/HomePageSections/ServicesContext/servicesStyles";
import { Typography, Paper, Hidden, Grid } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {THEME} from "../../ContainerStructure/Headings/headingStyles"
import { Array, Data } from "../../Utils/Constants/Language/en/CareersData";
import Content from "../../Components/Card";
import CustomTitle from "../Section/CustomTitle";
const Services = () => {
  const classes = useStyles();
  const { title, subTitle } = Data;
  const { root, serviceHeading, cardSec, underlined } = classes;

  return (
    <>
      <Grid className={root} elevation={0}>
        <section className={serviceHeading}>
        <CustomTitle style={{marginBottom: "20px"}} text={title} underlined={true}/>
        </section>
        <section className={cardSec}>
          <Content data={Array} />
        </section>
        
       
      </Grid>
    </>
  );
};

export default Services;
