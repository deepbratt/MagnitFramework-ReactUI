import React from "react";
import { useStyles } from "../../Sections/HomePageSections/ServicesContext/servicesStyles";
import { Array, Data } from "../../Utils/Constants/Language/en/CareersData";
import Content from "../../Components/Card";
import CustomTitle from "../Section/CustomTitle";
import { Grid } from "@material-ui/core";
const Services = () => {
  const classes = useStyles();
  const { title } = Data;
  const { root, serviceHeading, cardSec } = classes;

  return (
    <>
      <Grid className={root} elevation={0}>
        <section className={serviceHeading}>
          <CustomTitle
            style={{ marginBottom: "20px" }}
            text={title}
            underlined={true}
          />
        </section>
        <section className={cardSec}>
          <Content data={Array} />
        </section>
      </Grid>
    </>
  );
};

export default Services;
