import React from "react";
import { Grid,} from "@material-ui/core";
import ServicesSectionStyles from "../../Pages/Services/style"
import Banner from "../../Sections/AppSolutionsSections/Banner";
import FeaturesSection from "../../Sections/AppSolutionsSections/FeaturesSection"
import WhyUsContainer from "../SolutionsPage/WhyUsContainer"
import Facts from "../../Sections/AppSolutionsSections/FactsSection/FactsContainer"
import StairCaseContext from "../../Sections/AppSolutionsSections/StairCaseSection/HowItWorksContext"
import AdminContext from "../../Sections/AppSolutionsSections/AdminContext"
import CommentSection from "../../Components/CommentSection";
const Solutions = () => {
 const {root} = ServicesSectionStyles()
  return (
    <>
      <Grid container >
        <Grid item lg={12} md={12} xs={12} className={root}>
          <Banner />
        </Grid>
        <Grid item >
        <FeaturesSection/>
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
        <AdminContext/>
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
        <StairCaseContext/>
        </Grid>
        <Grid item lg={12}>
        <Facts/>
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
        <WhyUsContainer/>
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
        <CommentSection/>
        </Grid>
        </Grid>
   
    </>
  );
};

export default Solutions;
