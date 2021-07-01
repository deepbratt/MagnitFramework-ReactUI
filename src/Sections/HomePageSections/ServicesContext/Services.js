import React from "react";
import { useStyles } from "./servicesStyles";
import { Grid } from "@material-ui/core";
import Content from "../../../Components/Card";
import CustomTitle from "../../../Pages/Section/CustomTitle";
const ServicesOffered = ({ servicesData, title , alt}) => {
  const classes = useStyles();

  const { root, cardSec } = classes;

  return (
    <>
      <CustomTitle underlined={true} text={title} />
      <Grid container className={root}>
        <Grid item className={cardSec}>
          <Content alt={alt} data={servicesData} />
        </Grid>
      </Grid>
    </>
  );
};

export default ServicesOffered;
