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
import StarFishPattern from "../../assets/patterns/starfish.png";
// import StarFishPinkPattern from "../../assets/patterns/starfish-pink.png";
import DottedPattern from "../../assets/patterns/dots.png";
import SquareDottedPattern from "../../assets/patterns/dots-squar.png";
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
  const { aliceBlue, prussianBlue } = Colors;
  const {
    root,
    bannerBtn,
    reviewSlider,
    leftPattern,
    rightPattern,
    leftStarFishPattern,
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
  } = ServicesSectionStyles();
  return (
    <div className={root}>
      <Banner image={BannerImage}>
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
          color="primary"
        >
          <Typography variant="buttom">Get Started</Typography>
        </Button>
      </Banner>
      <Section title={ServicesSectionTitle}>
        <PointList data={servicesData} />
      </Section>
      <img className={leftPattern} src={StarFishPattern} alt="" srcset="" />
      <Section title={HiringSectionTitle}>
        <OptionsTab />
      </Section>
      <img className={rightPattern} src={StarFishPattern} alt="" srcset="" />
      <Section title={WhyHireSectionTitle}>
        <PointList data={hireUsData} horizontal={true} />
      </Section>
      <Section backColor={aliceBlue}>
        <GlanceSection backColor = {aliceBlue} />
      </Section>
      <Section backColor={prussianBlue}>
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
            className={leftStarFishPattern}
            src={StarFishPattern}
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
            src={DottedPattern}
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
