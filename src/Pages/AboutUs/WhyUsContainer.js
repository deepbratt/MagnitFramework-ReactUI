import React from "react";
import { useStyles } from "../PartnerWithUsContext/containerStyles";
import { Paper, Grid } from "@material-ui/core";
import PrimarySection from "../PartnerWithUsContext/PrimarySection";
import SecondarySection from "../PartnerWithUsContext/SecondarySection";
import Heading4 from "../../ContainerStructure/Headings/Heading4";

const WhyUsContainer = () => {
  const { root, grid } = useStyles();
  return (
    <>
      <Grid container>
        <Grid item md={12} xs={12}>
          <Paper className={root} elevation={0}>
            <Heading4 title="Why Us?" />
          </Paper>
        </Grid>
        <Grid className={grid} item lg={5} md={5} xs={12}>
          <PrimarySection />
        </Grid>
        <Grid className={grid} item lg={5} md={5} xs={12}>
          <SecondarySection />
        </Grid>
      </Grid>
    </>
  );
};

export default WhyUsContainer;
