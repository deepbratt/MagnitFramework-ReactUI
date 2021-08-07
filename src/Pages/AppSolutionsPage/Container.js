import React from "react";
import { Grid, Typography } from "@material-ui/core";
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
import { Loader } from "../../Components/loader";
import RequestQuoteSection from "../../Sections/RequestQuoteSection";
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

  if (loading) return <Loader />;
  return (
    <>
      <MetaTags
        title={title}
        description={description}
        canonical={canonical}
        keywords={keywords}
      />
      <Grid container>
        <Grid
          style={{ order: payload.banner.order }}
          item
          lg={12}
          md={12}
          xs={12}
          className={root}
        >
          <Banner alt="app solutions" data={banner} />
        </Grid>
        <Grid
          style={{ order: payload.seoText.order, color: "black" }}
          item
          md={12}
          xs={12}
        >
          <Section>
            <CustomTitle
              style={{ marginBottom: "20px" }}
              h1h2={payload.seoText.title}
              underlined={true}
              variant={"h1"}
              h1h2Style={{ marginTop: "0px" }}
            />
            <Typography variant="body1" color="textSecondary">
              {payload.seoText.dataArray[0].h1Detail}
            </Typography>
          </Section>
          <Section>
            <CustomTitle
              style={{ marginBottom: "20px" }}
              h1h2={payload.seoText.dataArray[1].title}
              underlined={true}
              variant={"h2"}
            />
            <Typography variant="body1" color="textSecondary">
              {payload.seoText.dataArray[1].h2Detail}
            </Typography>
          </Section>
          <Section>
            <CustomTitle
              style={{ marginBottom: "20px" }}
              h1h2={payload.seoText.dataArray[2].title}
              underlined={true}
              variant={"h2"}
            />
            <Typography variant="body1" color="textSecondary">
              {payload.seoText.dataArray[2].h2Detail}
            </Typography>
          </Section>
        </Grid>
        <Grid style={{ order: payload.appSolutions.order }} item xs={12}>
          <Section>
            <FeaturesSection
              title={payload.appSolutions.title}
              data={payload.appSolutions.dataArray}
              alt="app solutions"
            />
          </Section>
        </Grid>
        <Grid item xs={12} style={{ order: payload.appAdminPanel.order }}>
          <Section backColor={MoonWhite}>
            <AdminContext
              // order={payload.appAdminPanel.order}
              text={payload.appAdminPanel.title}
              alt="app solutions"
              data={payload.appAdminPanel.dataArray}
            />
          </Section>
        </Grid>
        <Grid
          style={{ order: payload.howitWorks.order }}
          item
          lg={12}
          md={12}
          xs={12}
        >
          <Section>
            <StairCaseContext
              text={payload.howitWorks.title}
              data={payload.howitWorks.dataArray}
              alt="app solutions"
            />
          </Section>
        </Grid>
        <Grid item xs={12} style={{ order: payload.benefits.order }}>
          <Section patterns={ourWorkSectionPatterns} backColor={aliceBlue}>
            <CustomTitle underlined={true} text={payload.benefits.title} />
            <PointList
              // order={payload.benefits.order}
              data={payload.benefits.dataArray}
              horizontal={true}
              lgBreakpoint={6}
              alt="app solutions"
            />
          </Section>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          xs={12}
          style={{ order: payload.reviews.order }}
        >
          <Section>
            <RequestQuoteSection/>
          </Section>
          <CommentSection data={slides} />
        </Grid>
      </Grid>
    </>
  );
};

export default Solutions;
