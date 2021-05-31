import React from "react";
import { Grid, Typography , Hidden} from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
import ServicesSectionStyles from "../WebServices/style";
import {
  ServicesPageBanner,
  ServicesOfferedSection,
  BenifitsSection,
} from "../../Utils/Constants/Language/en/ServicesPageText";
import BackGroudnPatternLeft from "../../assets/OurBlogs/LatestBlogPattern.png";
import BackGroudnPatternRight from "../../assets/OurBlogs/LatestBlogPatternRight.png";
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
import ServicesOffered from "../../Sections/HomePageSections/ServicesContext/Services";
import { Data } from "../../Utils/Constants/Language/en/GlanceAtWorkData";
import GlanceSection from "../../Sections/HomePageSections/GlanceAtWorkContext/Container";
import CustomTitle from "../Section/CustomTitle"

const Services = () => {
  const { linearBackground, BlueRibbon } = Colors;

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

  const { textColor, leftPattern, rightPattern, leftPatternGlance, rightPatternGlance  } = ServicesSectionStyles();

  const ourWorkSectionPatterns = [
    {
      image: (
        <Hidden smDown>
          <Grid
            className={leftPatternGlance}
            style={{ position: "absolute" }}
            item
            xs={3}
          >
            <img
              width="100%"
              height="100%"
              src={BackGroudnPatternLeft}
              alt=""
            />
          </Grid>
        </Hidden>
      ),
      styles: leftPatternGlance,
    },
    {
      image: (
        <Hidden smDown>
          <Grid
            className={`${rightPatternGlance}`}
            style={{ position: "absolute" }}
            item
            xs={4}
          >
            <img
              width="100%"
              height="100%"
              src={BackGroudnPatternRight}
              alt=""
            />
          </Grid>
        </Hidden>
      ),
      styles: rightPatternGlance,
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
        <Section>
          <Grid item xs={12}>
            <CustomTitle text={BenifitsSection.title} underlined={true}/>
            <PointList
              data={BenifitsSection.data}
              horizontal={true}
              lgBreakpoint={6}
            />
          </Grid>
        </Section>
        <Grid item md={12} xs={12}>
        <Section backColor={BlueRibbon} patterns={ourWorkSectionPatterns}>
          <GlanceSection
          title={Data.title}
          data={Data.arr}
          buttonText={Data.buttonText}
          />
        </Section>
      </Grid>
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
