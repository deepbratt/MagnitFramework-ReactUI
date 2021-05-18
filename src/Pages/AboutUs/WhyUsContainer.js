import React from "react";
import { useStyles } from "../PartnerWithUsContext/containerStyles";
import { Grid, Typography } from "@material-ui/core";
import PrimarySection from "../PartnerWithUsContext/PrimarySection";
import SecondarySection from "../PartnerWithUsContext/SecondarySection";
import {
  PrimaryArray,
  SecondaryArray,
} from "../../Utils/Constants/Language/en/PartnerWithUsData";

const WhyUsContainer = () => {
  const { grid, underlinedText } = useStyles();
  return (
    <>
      <Grid container>
        <Grid item md={12} xs={12}>
          <Typography variant="h4" color="inherit">
            <span className={underlinedText}>Why Us?</span>
          </Typography>
        </Grid>
        <Grid className={grid} item lg={5} md={5} xs={12}>
          <PrimarySection data={PrimaryArray} />
        </Grid>
        <Grid className={grid} item lg={5} md={5} xs={12}>
          <SecondarySection data={SecondaryArray} />
        </Grid>
      </Grid>
    </>
  );
};

export default WhyUsContainer;
