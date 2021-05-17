import PointList from "../../Components/PointBadge/PointList";
import Section from "../Section";
import { Avatar, Button, Typography } from "@material-ui/core";
import GlanceSection from "../GlanceAtWorkContext/Container";
import { webDevServicesData as servicesData } from "./webDevServicesData";
import { whyHireData as hireUsData } from "./whyHireData";
import { Colors } from "../../Theme/color.constants";
import Banner from "../../Components/Banner";
import {
  HiringSectionTitle,
  ServicesSectionTitle,
  WhyHireSectionTitle,
} from "./constants";
import OptionsTab from "../../Components/OptionsTab";
import StarFishPattern from "../../assets/patterns/starfishBlue.png";
import StarFishPinkPattern from "../../assets/patterns/leftStarfish.png";
import DottedPattern from "../../assets/patterns/circleDot.png";
import TopDottedPattern from "../../assets/patterns/topCircle.png";
import yellowComma from "../../assets/patterns/yellowComma.png";
import comma from "../../assets/patterns/comma.png";
import miniYellow from "../../assets/patterns/miniYellow.png";
import pinkDot from "../../assets/patterns/pinkDot.png";
import yellowDot from "../../assets/patterns/yellowDot.png";
import smallDot from "../../assets/patterns/smalldot.png";
import SquareDottedPattern from "../../assets/patterns/dotsPattern.png";
import ReviewSlider from "../../Components/ReviewSlider";
import ServicesSectionStyles from "./style";
import BannerImage from "../../assets/services/BannerImage.png";
import Avatar1 from "../../assets/services/Avatar1.png";
import Avatar2 from "../../assets/services/Avatar2.png";
import Avatar3 from "../../assets/services/Avatar3.png";
import Avatar4 from "../../assets/services/Avatar4.png";
import Avatar5 from "../../assets/services/Avatar5.png";
import Avatar6 from "../../assets/services/Avatar6.png";
import BreadCrumb from "../../Components/BreadCrumb";
import CustomImage from "../../Components/CustomImage";

const Services = () => {
  const { skyBlue, aliceBlue, linearBackground } = Colors;

  const breadCrumData = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/Services",
      text: "Web Development Services",
    },
  ];

  const {
    root,
    // background,
    bannerBtn,
    reviewSlider,
    leftPattern,
    rightPattern,
    leftStarFishPattern,
    pinkDotPattern,
    yellowDotPattern,
    miniYellowPattern,
    smallDotPattern,
    rightStarFishPattern,
    leftDottedPattern,
    rightDottedPattern,
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    squareDotsPattern,
    commaPattern,
    yellowCommaPattern,
  } = ServicesSectionStyles();
  return (
    <div className={root}>
      <Banner
        image={BannerImage}
        backColor={linearBackground}
        breadCrumb={<BreadCrumb links={breadCrumData} />}
      >
        <Typography variant="h1" gutterBottom>
          We Hire Best <br /> Web Developers & Save 50%
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          We have a talent pool of qualified & well-experienced web developers.
        </Typography>
        <Button
          className={bannerBtn}
          variant="contained"
          size="small"
          color="secondary"
        >
          <Typography variant="buttom">Get Started</Typography>
        </Button>
      </Banner>
      <Section title={ServicesSectionTitle} highlightWords={1}>
        <PointList data={servicesData} />
      </Section>
      <CustomImage className={leftPattern} src={StarFishPattern} alt="" srcset="" />
      <Section title={HiringSectionTitle} highlightWords={2}>
        <OptionsTab />
      </Section>
      <CustomImage className={rightPattern} src={StarFishPattern} alt="" srcset="" />
      <Section title={WhyHireSectionTitle} highlightWords={3}>
        <PointList data={hireUsData} horizontal={true} />
      </Section>
      <Section backColor={skyBlue}>
        <GlanceSection backColor={skyBlue} />
      </Section>
      <Section backColor={aliceBlue}>
        <div className={reviewSlider}>
          <Avatar alt="" src={Avatar1} className={avatar1} />
          <Avatar alt="" src={Avatar2} className={avatar2} />
          <Avatar alt="" src={Avatar3} className={avatar3} />
          <Avatar alt="" src={Avatar4} className={avatar4} />
          <Avatar alt="" src={Avatar5} className={avatar5} />
          <Avatar alt="" src={Avatar6} className={avatar6} />
          <CustomImage
            className={squareDotsPattern}
            src={SquareDottedPattern}
            alt=""
            srcset=""
          />
          <CustomImage
            className={yellowCommaPattern}
            src={yellowComma}
            alt=""
            srcset=""
          />
          <CustomImage className={commaPattern} src={comma} alt="" srcset="" />
          <CustomImage className={pinkDotPattern} src={pinkDot} alt="" srcset="" />
          <CustomImage className={yellowDotPattern} src={yellowDot} alt="" srcset="" />
          <CustomImage
            className={miniYellowPattern}
            src={miniYellow}
            alt=""
            srcset=""
          />
          <CustomImage className={smallDotPattern} src={smallDot} alt="" srcset="" />
          <CustomImage
            className={leftStarFishPattern}
            src={StarFishPinkPattern}
            alt=""
            srcset=""
          />
          <CustomImage
            className={rightStarFishPattern}
            src={StarFishPattern}
            alt=""
            srcset=""
          />
          <CustomImage
            className={leftDottedPattern}
            src={DottedPattern}
            alt=""
            srcset=""
          />
          <CustomImage
            className={rightDottedPattern}
            src={TopDottedPattern}
            alt=""
            srcset=""
          />
          <ReviewSlider />
        </div>
      </Section>
    </div>
  );
};

export default Services;
