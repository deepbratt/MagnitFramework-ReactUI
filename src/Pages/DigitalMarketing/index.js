import PointList from "../../Components/PointBadge/PointList";
import Section from "../Section";
import { Link } from "react-router-dom";
import { Grid, Hidden, Typography } from "@material-ui/core";
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
import Heading5 from "../../ContainerStructure/Headings/Heading5";
import Breakpoints from "../../Theme/theme.breakpoints";
import CustomTitle from "../../Pages/Section/CustomTitle";
import GlanceAtWork from "../../Sections/HomePageSections/GlanceAtWorkContext/Container";
import BackGroudnPatternLeft from "../../assets/OurBlogs/LatestBlogPattern.png";
import BackGroudnPatternRight from "../../assets/OurBlogs/LatestBlogPatternRight.png";

const DigitalMarketing = () => {
  const { skyBlue, linearBackground, BlueRibbon } = Colors;

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

  const ourWorkSectionPatterns = [
    {
      image: (
        <Hidden smDown>
          <Grid
            className={leftPattern}
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
      styles: leftPattern,
    },
    {
      image: (
        <Hidden smDown>
          <Grid
            className={`${rightPattern}`}
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
      styles: rightPattern,
    },
  ];

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
          srcset=""
        />
        <CustomImage
          className={rightPattern}
          src={StarFishPattern}
          alt=""
          srcset=""
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

      <Section highlightWords={3}>
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
