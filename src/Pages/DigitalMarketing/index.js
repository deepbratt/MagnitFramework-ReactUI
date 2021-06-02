import PointList from "../../Components/PointBadge/PointList";
import Section from "../Section";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { hireUsData } from "./whyWorkwithUs";
import { Colors } from "../../Theme/color.constants";
import Banner from "../../Components/Banner";
import {
  combiningEngineering,
  DoYouWant,
  marketingServicesData,
  ourExpert,
  ServicesSectionTitle,
  weCutTo,
  WhyHireSectionTitle,
  Data,
} from "./constants";
import StarFishPattern from "../../assets/patterns/starfishBlue.png";
import ServicesSectionStyles from "../WebServices/style";
import BannerImage from "../../assets/services/BannerImage.png";
import PatternLeft from "../../assets/PatternLeft.png";
import BreadCrumb from "../../Components/BreadCrumb";
import CommentSection from "../../Components/CommentSection";
import CustomButton from "../../Components/CustomButton";
import CustomImage from "../../Components/CustomImage";
import CustomTitle from "../../Pages/Section/CustomTitle";
import GlanceAtWork from "../../Sections/HomePageSections/GlanceAtWorkContext/Container";
import { ourWorkSectionPatterns } from "../../Components/OurWorkSectionPatteren/OurWorkSectionPattern";

const DigitalMarketing = () => {
  const { linearBackground, BlueRibbon, aliceBlue } = Colors;

  const breadCrumData = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/digital-marketing",
      text: "Digital Marketing",
    },
  ];

  const { textColor, leftPattern, rightPattern } = ServicesSectionStyles();

  return (
    <CommentSection>
      <Banner
        image={BannerImage}
        backColor={linearBackground}
        breadCrumb={<BreadCrumb links={breadCrumData} />}
      >
        <Typography variant="h1" gutterBottom className={textColor}>
          {combiningEngineering}
        </Typography>
        <Typography variant="h5" gutterBottom className={textColor}>
          {weCutTo}
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
          <CustomTitle subTitle={ourExpert} />
          <PointList data={marketingServicesData} horizontal={false} />
        </Section>
      </div>

      <Section patterns={ourWorkSectionPatterns} backColor={aliceBlue}>
        <CustomTitle text={WhyHireSectionTitle} underlined={true} />

        <PointList data={hireUsData} horizontal={true} lgBreakpoint={6} />
      </Section>
      <Section backColor={BlueRibbon} patterns={ourWorkSectionPatterns}>
        <GlanceAtWork
          title={Data.title}
          data={Data.arr}
          buttonText={Data.buttonText}
        />
      </Section>
      <Section>
        <CustomTitle text={DoYouWant} underlined={true} />
        <span>
          <CustomButton component={Link} to="/request-a-quote">
            Request a Quote
          </CustomButton>
        </span>
      </Section>
    </CommentSection>
  );
};

export default DigitalMarketing;
