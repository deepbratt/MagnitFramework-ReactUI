import React from "react";
import { Grid } from "@material-ui/core";
import PrimarySection from "../../Sections/HomePageSections/PartnerWithUsContext/PrimarySection";
import SecondarySection from "../../Sections/HomePageSections/PartnerWithUsContext/SecondarySection";
import {THEME} from "../../ContainerStructure/Headings/headingStyles"
import { MuiThemeProvider } from "@material-ui/core/styles";
import {PatrnerWithUsSectionTitle,PrimaryArray,SecondaryArray} from "../../Utils/Constants/Language/en/PartnerWithUsData"
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
