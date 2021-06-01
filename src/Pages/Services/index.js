import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
import {
  ServicesPageBanner,
  ServicesOfferedSection,
  BenifitsSection,
} from "../../Utils/Constants/Language/en/ServicesPageText";
import Section from "../Section";
import CustomButton from "../../Components/CustomButton";
import { Link } from "react-router-dom";
import { DoYouWant } from "../WebServices/constants";
import PointList from "../../Components/PointBadge/PointList";
import BreadCrumb from "../../Components/BreadCrumb";
import { BannerImage } from "../../Utils/Constants/Language/en/SolutionsPageData";
import Banner from "../../Components/Banner";
import CommentSection from "../../Components/CommentSection";
import ServicesOffered from "../../Sections/HomePageSections/ServicesContext/Services";
import GlanceSection from "../../Sections/HomePageSections/GlanceAtWorkContext/Container";
import CustomTitle from "../Section/CustomTitle"
import { ourWorkSectionPatterns } from "../../Components/OurWorkSectionPatteren/OurWorkSectionPattern";
import { Data } from "../../Utils/Constants/Language/en/GlanceAtWorkData";

const Services = () => {
  const { linearBackground, BlueRibbon,aliceBlue } = Colors;

  const breadCrumData = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/services",
      text: "Services",
    },
  ];
  return (
    <>
      <CommentSection>
        <Banner
          image={BannerImage}
          backColor={linearBackground}
          breadCrumb={<BreadCrumb links={breadCrumData} />}
        >
          <Typography color="textPrimary" variant="h1" gutterBottom>
            {ServicesPageBanner.title}
          </Typography>
          <Typography color="textPrimary" variant="h5" gutterBottom>
            {ServicesPageBanner.subtitle}
          </Typography>
          <span>
            <CustomButton>{ServicesPageBanner.buttonText}</CustomButton>
          </span>
        </Banner>

        <Grid item xs={12}>
          <Section>
          <ServicesOffered title={ServicesOfferedSection.title} servicesData={ServicesOfferedSection.values}/>
          </Section>
        </Grid>
        <Section patterns={ourWorkSectionPatterns} backColor={aliceBlue}>
          <Grid item xs={12}>
            <CustomTitle text={BenifitsSection.title} underlined={true}/>
            <PointList
              data={BenifitsSection.data}
              horizontal={true}
              lgBreakpoint={6}
            />
          </Grid>
        </Section>
        <Section backColor={BlueRibbon} patterns={ourWorkSectionPatterns}>
          <GlanceSection
              title={Data.title}
              data={Data.arr}
              buttonText={Data.buttonText}
            />
        </Section>
        <Section>
        <CustomTitle text={DoYouWant} underlined={true}/>
          <span>
            <CustomButton component={Link} to="/request-a-quote">
              Request a Quote
            </CustomButton>
          </span>
        </Section>
      </CommentSection>
    </>
  );
};

export default Services;
