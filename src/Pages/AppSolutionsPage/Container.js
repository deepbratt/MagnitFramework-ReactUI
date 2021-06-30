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
import ReviewCard from "../../Components/ReviewSlider/ReviewCard";
import CustomButton from "../../Components/CustomButton";
import { Link } from "react-router-dom";
import { DoYouWant } from "../WebServices/constants";
import CustomTitle from "../../Pages/Section/CustomTitle";
import { Colors } from "../../Theme/color.constants";
import useApi from "../../Utils/appSolutionsApi";
import { ourWorkSectionPatterns } from "../../Components/OurWorkSectionPatteren/OurWorkSectionPattern";
import MetaTags from "../../Components/MetaTags";
const Solutions = () => {
  const { root } = ServicesSectionStyles();
  const { MoonWhite, aliceBlue } = Colors;
  const { data, review, banner, metaData, loading } = useApi();
  const payload = data.sections;
  const { title, description, canonical, keywords } = metaData;
  const slides = review.map((data, index) => (
    <Grid
      key={index}
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
      alignItems="center"
    >
      <ReviewCard cardData={data} />
    </Grid>
  ));

  if (loading) return <p>{loading}</p>;
  return (
    <>
          <MetaTags title={title} description={description} canonical={canonical} keywords={keywords}/>
        <CommentSection data={slides}>
          <Grid
            style={{ order: payload.banner.order }}
            item
            lg={12}
            md={12}
            xs={12}
            className={root}
          >
            <Banner data={banner} />
          </Grid>
          <Section>
            <Grid style={{ order: payload.appSolutions.order }} item xs={12}>
              <FeaturesSection
                title={payload.appSolutions.title}
                data={payload.appSolutions.dataArray}
              />
            </Grid>
          </Section>
          <Section backColor={MoonWhite}>
            <AdminContext
              order={payload.appAdminPanel.order}
              text={payload.appAdminPanel.title}
              data={payload.appAdminPanel.dataArray}
            />
          </Section>
          <Section>
            <Grid
              style={{ order: payload.howitWorks.order }}
              item
              lg={12}
              md={12}
              xs={12}
            >
              <StairCaseContext
                text={payload.howitWorks.title}
                data={payload.howitWorks.dataArray}
              />
            </Grid>
          </Section>
          <Section patterns={ourWorkSectionPatterns} backColor={aliceBlue}>
            <CustomTitle underlined={true} text={payload.benefits.title} />
            <PointList
              order={payload.benefits.order}
              data={payload.benefits.dataArray}
              horizontal={true}
              lgBreakpoint={6}
            />
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
        </CommentSection>
    </>
  );
};

export default Solutions;
