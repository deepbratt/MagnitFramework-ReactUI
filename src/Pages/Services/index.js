import React from "react";
import WeOffer from "../../Sections/SolutionsPageSection/WeOfferContext";
import { Grid, Typography } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
import {
  ServicesPageBanner,
  ServicesOfferedSection,
  BenifitsSection,
} from "../../Utils/Constants/Language/en/ServicesPageText";
import Section from "../Section";
import CustomButton from "../../Components/CustomButton";
import Breakpoints from "../../Theme/theme.breakpoints";
import { Link } from "react-router-dom";
import { DoYouWant } from "../WebServices/constants";
import PointList from "../../Components/PointBadge/PointList";
import BreadCrumb from "../../Components/BreadCrumb";
import { BannerImage } from "../../Utils/Constants/Language/en/SolutionsPageData";
import Banner from "../../Components/Banner";
import CommentSection from "../../Components/CommentSection";

const Services = () => {
  const { linearBackground } = Colors;

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
        <Typography color="textPrimary" variant="h2" gutterBottom>
          {ServicesPageBanner.title}
        </Typography>
        <Typography color="textPrimary" variant="h6" gutterBottom>
          {ServicesPageBanner.subtitle}
        </Typography>
        <span>
          <CustomButton
            variant="contained"
            size={Breakpoints()}
            color="secondary"
          >
            {ServicesPageBanner.buttonText}
          </CustomButton>
        </span>
      </Banner>

      <Grid item lg={12} md={12} xs={12}>
        <WeOffer data={ServicesOfferedSection} />
      </Grid>
      <Section title={BenifitsSection.title}>
        <Grid item lg={12} md={12} xs={12}>
          <PointList
            data={BenifitsSection.data}
            horizontal={true}
            lgBreakpoint={6}
          />
        </Grid>
      </Section>
      <Section title={DoYouWant}>
        <span>
          <CustomButton
            variant="contained"
            size={Breakpoints()}
            color="secondary"
            component={Link}
            to="/request-a-quote"
          >
            Request a Quote
          </CustomButton>
        </span>
      </Section>
      </CommentSection>
    </>
  );
};

export default Services;
