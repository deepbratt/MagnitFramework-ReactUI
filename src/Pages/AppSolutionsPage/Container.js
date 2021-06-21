import React from "react";
import { Grid } from "@material-ui/core";
import ServicesSectionStyles from "../WebServices/style";
import Banner from "../../Sections/AppSolutionsSections/Banner";
import FeaturesSection from "../../Sections/AppSolutionsSections/FeaturesSection";
import StairCaseContext from "../../Sections/AppSolutionsSections/StairCaseSection/HowItWorksContext";
import AdminContext from "../../Sections/AppSolutionsSections/AdminContext";
import CommentSection from "../../Components/CommentSection";
import Section from "../../Pages/Section";
import PointList from "../../Components/PointBadge/PointList";
import {
  benefitsHeading,
  benefitsData,
} from "../../Utils/Constants/Language/en/SolutionsPageData";
import CustomButton from "../../Components/CustomButton";
import { Link } from "react-router-dom";
import { DoYouWant } from "../WebServices/constants";
import CustomTitle from "../../Pages/Section/CustomTitle";
import { Colors } from "../../Theme/color.constants";
import { ourWorkSectionPatterns } from "../../Components/OurWorkSectionPatteren/OurWorkSectionPattern";
import MetaTags from "../../Components/MetaTags";
import { metadata } from "../../Utils/Constants/Language";
const Solutions = () => {
  const { root } = ServicesSectionStyles();
  const { MoonWhite, aliceBlue } = Colors;
  const {title, canonical, description, keywords} = metadata.appDevelopment

  return (
    <>
      <CommentSection>
      <MetaTags title={title} description={description} canonical={canonical} keywords={keywords}/>
        <Grid container>
          <Grid item lg={12} md={12} xs={12} className={root}>
            <Banner />
          </Grid>
          <Section>
            <Grid item xs={12}>
              <FeaturesSection />
            </Grid>
          </Section>
          <Section backColor={MoonWhite}>
            <AdminContext />
          </Section>
          <Section>
            <Grid item lg={12} md={12} xs={12}>
              <StairCaseContext />
            </Grid>
          </Section>
          <Section patterns={ourWorkSectionPatterns} backColor={aliceBlue}>
            <CustomTitle underlined={true} text={benefitsHeading} />
            <PointList data={benefitsData} horizontal={true} lgBreakpoint={6} />
          </Section>
          <Grid item lg={12} md={12} xs={12}>
            <Section>
              <CustomTitle underlined={true} text={DoYouWant} />
              <span>
                <CustomButton component={Link} to="/request-a-quote">
                  Request a Quote
                </CustomButton>
              </span>
            </Section>
          </Grid>
        </Grid>
      </CommentSection>
    </>
  );
};

export default Solutions;
