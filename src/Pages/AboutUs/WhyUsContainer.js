import React from "react";
import { Grid } from "@material-ui/core";
import PrimarySection from "../PartnerWithUsContext/PrimarySection";
import SecondarySection from "../PartnerWithUsContext/SecondarySection";
import {
  PrimaryArray,
  SecondaryArray,
  PatrnerWithUsSectionTitle,
} from "../../Utils/Constants/Language/en/PartnerWithUsData";
import Section from "../Section";

const WhyUsContainer = () => {
  return (
    <Section title={PatrnerWithUsSectionTitle}>
      <Grid container>
        <Grid item md={6} xs={12}>
          <PrimarySection data={PrimaryArray} />
        </Grid>
        <Grid item md={6} xs={12}>
          <SecondarySection data={SecondaryArray} />
        </Grid>
      </Grid>
    </Section>
  );
};

export default WhyUsContainer;
