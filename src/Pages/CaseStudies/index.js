import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router";
import Banner from "../../Components/Banner";
import Section from "../Section";
import InterActiveSection from "./InterActiveSection/InterActiveSection";
import useStyles from "./InterActiveSection/useStyles";
import businessPeople from "../../assets/CaseStudies/businessPeople.png";
import AboutMainSection from "../AboutUs/MainComponent/AboutMainSection";

const CaseStudies = () => {
  const classes = useStyles();
  const breadCrumbs = [
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
        <AboutMainSection hero={businessPeople} card={false} breadCrumbsData={breadCrumbs}/>
      </Grid>
      <Grid item xs={12}>
        <Section title={"Case /Studies"}>
          <Typography variant="h5" component="h5" style={{ width: "100%" }}>
            on How We Innovate, Implement, and Deliver
          </Typography>
        </Section>
      </Grid>
      <Grid container className={classes.root}>
        <InterActiveSection />
      </Grid>
    </Grid>
  );
};

export default withRouter(CaseStudies);
