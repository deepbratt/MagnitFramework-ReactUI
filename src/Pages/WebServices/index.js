import PointList from "../../Components/PointBadge/PointList";
import Section from "../Section";
import CustomTitle from "../Section/CustomTitle";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import GlanceSection from "../../Sections/HomePageSections/GlanceAtWorkContext/Container";
import {
  OurExpertEngineers,
  webDevServicesData as servicesData,
  WeHireTheMost,
  WeProvideExceptional,
} from "./webDevServicesData";
import { whyHireData as hireUsData } from "./whyHireData";
import { Colors } from "../../Theme/color.constants";
import Banner from "../../Components/Banner";
import {
  DoYouWant,
  ServicesSectionTitle,
  WhyHireSectionTitle,
} from "./constants";

import StarFishPattern from "../../assets/patterns/starfishBlue.png";
import ServicesSectionStyles from "./style";
import BannerImage from "../../assets/services/BannerImage.png";
import PatternLeft from "../../assets/PatternLeft.png";
import BreadCrumb from "../../Components/BreadCrumb";
import CommentSection from "../../Components/CommentSection";
import CustomButton from "../../Components/CustomButton";
import CustomImage from "../../Components/CustomImage";
import { Data } from "../../Utils/Constants/Language/en/GlanceAtWorkData";
import { ourWorkSectionPatterns } from "../../Components/OurWorkSectionPatteren/OurWorkSectionPattern";
const Services = () => {
  const { Ash, linearBackground, BlueRibbon } = Colors;

  const breadCrumData = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/web-dev-services",
      text: "Web Development Services",
    },
  ];
  const { textColor, leftPattern, rightPattern, leftPatternGlance, rightPatternGlance  } = ServicesSectionStyles();

  return (
    <CommentSection>
      <Banner
        image={BannerImage}
        backColor={linearBackground}
        breadCrumb={<BreadCrumb links={breadCrumData} />}
      >
        <Typography variant="h1" gutterBottom className={textColor}>
          {WeHireTheMost}
        </Typography>
        <Typography variant="h5" gutterBottom className={textColor}>
          {WeProvideExceptional}
        </Typography>
        <span>
          <CustomButton>Get Started</CustomButton>
        </span>
      </Banner>
      <div style={{ position: "relative" }}>
        <CustomImage
          className={leftPattern}
          src={PatternLeft}
          alt=""
          srcSet=""
        />
        <CustomImage
          className={rightPattern}
          src={StarFishPattern}
          alt=""
          srcSet=""
        />
        <Section>
          <CustomTitle
            style={{ marginBottom: "20px" }}
            text={ServicesSectionTitle}
            underlined={true}
          />
          <CustomTitle subTitle={OurExpertEngineers} />
          <PointList data={servicesData} horizontal={false} />
        </Section>
      </div>
      <Section backColor={Ash}>
        <CustomTitle underlined={true} text={WhyHireSectionTitle} />
        <PointList data={hireUsData} horizontal={true} lgBreakpoint={6} />
      </Section>
      <Section backColor={BlueRibbon} patterns={ourWorkSectionPatterns}>
          <GlanceSection
          title={Data.title}
          data={Data.arr}
          buttonText={Data.buttonText}
          />
        </Section>
      <Section>
        <CustomTitle underlined={true} text={DoYouWant} />
        <span>
          <CustomButton component={Link} to="/request-a-quote">
            Request a Quote
          </CustomButton>
        </span>
      </Section>
    </CommentSection>
  );
};

export default Services;
