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

const Services = () => {
  const { skyBlue, aliceBlue ,linearBackground} = Colors;
  const {
    root,
    // background,
    bannerBtn,
    reviewSlider,
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
    yellowCommaPattern
  } = ServicesSectionStyles();
  return (
    <div className={root} >
      <Banner image={BannerImage} backColor={linearBackground}>
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
      <Section title={ServicesSectionTitle}>
   
        <PointList data={servicesData} />
      </Section>
      <Section title={HiringSectionTitle}>
        <OptionsTab />
      </Section>
      <Section title={WhyHireSectionTitle}>
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
          <img
            className={squareDotsPattern}
            src={SquareDottedPattern}
            alt=""
            srcset=""
          />
            <img
            className={yellowCommaPattern}
            src={yellowComma}
            alt=""
            srcset=""
          />
              <img
            className={commaPattern}
            src={comma}
            alt=""
            srcset=""
          />
          <img
            className={pinkDotPattern}
            src={pinkDot}
            alt=""
            srcset=""
          />
           <img
            className={yellowDotPattern}
            src={yellowDot}
            alt=""
            srcset=""
          />
          <img
            className={miniYellowPattern}
            src={miniYellow}
            alt=""
            srcset=""
          /> 
          <img
            className={smallDotPattern}
            src={smallDot}
            alt=""
            srcset=""
          /> 
          <img
            className={leftStarFishPattern}
            src={StarFishPinkPattern}
            alt=""
            srcset=""
          />
          <img
            className={rightStarFishPattern}
            src={StarFishPattern}
            alt=""
            srcset=""
          />
          <img
            className={leftDottedPattern}
            src={DottedPattern}
            alt=""
            srcset=""
          />
          <img
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
