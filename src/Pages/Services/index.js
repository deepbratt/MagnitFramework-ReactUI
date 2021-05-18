import PointList from "../../Components/PointBadge/PointList";
import Section from "../Section";
import {  Button, Typography } from "@material-ui/core";
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
import ServicesSectionStyles from "./style";
import BannerImage from "../../assets/services/BannerImage.png";
import PatternLeft from "../../assets/PatternLeft.png";
import BreadCrumb from "../../Components/BreadCrumb";
import CommentSection from "../../Components/CommentSection";
import CustomButton from "../../Components/CustomButton";
import CustomImage from "../../Components/CustomImage";

const Services = () => {
  const { skyBlue, linearBackground } = Colors;

  const breadCrumData = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/services",
      text: "Web Development Services",
    },
  ];

  const {
    textColor,
    bannerBtn,
    leftPattern,
    rightPattern,
  } = ServicesSectionStyles();
  return (
    <CommentSection >
 

 <Banner
        image={BannerImage}
        backColor={linearBackground}
        breadCrumb={<BreadCrumb links={breadCrumData} />}
      >
        <Typography variant="h1" gutterBottom className={textColor}>
          We Hire Best <br /> Web Developers & Save 50%
        </Typography>
        <Typography variant="subtitle1" gutterBottom  className={textColor}>
          We have a talent pool of qualified & well-experienced web developers.
        </Typography>
        <CustomButton
          className={bannerBtn}
          variant="contained"
          size="small"
          color="secondary"
        >
          <Typography variant="buttom">Get Started</Typography>
        </CustomButton>
      </Banner>


      <div style={{position:"relative"}}>
      <CustomImage className={leftPattern} src={PatternLeft} alt="" srcset="" />
      <CustomImage className={rightPattern} src={StarFishPattern} alt="" srcset="" />
      <Section title={ServicesSectionTitle} highlightWords={1}>
        <PointList data={servicesData} />
      </Section>
      </div>
      <Section title={HiringSectionTitle} highlightWords={2}>
        <OptionsTab />
      </Section>
      
      <Section title={WhyHireSectionTitle} highlightWords={3}>
        <PointList data={hireUsData} horizontal={true} />
      </Section>
      
      <Section backColor={skyBlue}>
        <GlanceSection backColor={skyBlue} />
      </Section>
      </CommentSection>

  );
};

export default Services;
