import React from "react";
import { Grid,} from "@material-ui/core";
import ServicesSectionStyles from "../../Pages/Services/style"
import Banner from "../../Sections/AppSolutionsSections/Banner";
import FeaturesSection from "../../Sections/AppSolutionsSections/FeaturesSection"
import WhyUsContainer from "../SolutionsPage/WhyUsContainer"
import StairCaseContext from "../../Sections/AppSolutionsSections/StairCaseSection/HowItWorksContext"
import AdminContext from "../../Sections/AppSolutionsSections/AdminContext"
import CommentSection from "../../Components/CommentSection";
import Section from "../../Pages/Section"
import PointList from "../../Components/PointBadge/PointList";
import { benefitsHeading, benefitsData } from "../../Utils/Constants/Language/en/SolutionsPageData";
const Solutions = () => {
 const {root} = ServicesSectionStyles()
  return (
    <>

      <Grid container >
        <Grid item lg={12} md={12} xs={12} className={root}>
          <Banner />
        </Grid>
        <Section>
        <Grid item >
        <FeaturesSection/>
        </Grid>
        </Section>
        <Grid item lg={12} md={12} xs={12}>
        <AdminContext/>
        </Grid>
        <Section>
        <Grid item lg={12} md={12} xs={12}>
        <StairCaseContext/>
        </Grid>
        </Section>
        <Section title={benefitsHeading}>
        <Grid item lg={12} md={12} xs={12}>
          <PointList data={benefitsData} horizontal={true} lgBreakpoint={6}/>
        </Grid>
        </Section>
        <Grid item lg={12} md={12} xs={12}>
        <CommentSection/>
        </Grid>
   
        </Grid>
    
    </>
  );
};

export default Solutions;
