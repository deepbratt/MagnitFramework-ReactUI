import React from "react";
import { useStyles } from "./servicesStyles";
import { Grid } from "@material-ui/core";
import Content from "../../../Components/Card";

const ServicesOffered = ({ servicesData }) => {
  const classes = useStyles();

  const { root, cardSec } = classes;

  return (
    <>
      <Grid container className={root}>
        <Grid item className={cardSec}>
          <Content data={servicesData} />
        </Grid>
      </Grid>
    </>
  );
};

export default ServicesOffered;
