import { Grid, Hidden, Typography } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router";
import Banner from "../../Components/Banner";
import Section from "../Section";
import InterActiveSection from "./InterActiveSection/InterActiveSection";
import useStyles from "./InterActiveSection/useStyles";
import businessPeople from "../../assets/CaseStudies/businessPeople.png";
import AboutMainSection from "../AboutUs/MainComponent/AboutMainSection";
import { caseStudies } from "../../Utils/Constants/Language";
import ResponsiveInterActiveSection from "./ResponsiveInterActiveSection/ResponsiveInterActiveSection";

const CaseStudies = () => {
  const classes = useStyles();
  const breadcrumbData = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/caseStudies",
      text: "Case Studies",
    },
  ];
  return (
    <Grid container>
      <Grid item xs={12}>
        {/* <Banner breadCrumb="Home / Case Studies" image={businessPeople} /> */}
        <AboutMainSection
          hero={businessPeople}
          card={false}
          breadcrumbData={breadcrumbData}
        />
      </Grid>
      <Grid item xs={12}>
        <Section
          title={caseStudies.heading}
          subTitle={caseStudies.subHeading}
        ></Section>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ display: "flex", minHeight: "55vh" }}
        justify="center"
      >
        <Hidden lgUp>
          <span style={{marginTop:"-120px"}}>
            <ResponsiveInterActiveSection />
          </span>
        </Hidden>
        <Hidden mdDown>
          <Section>
            <InterActiveSection />
          </Section>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default withRouter(CaseStudies);
