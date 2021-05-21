import PointList from "../../Components/PointBadge/PointList";
import Section from "../Section";
import { Typography } from "@material-ui/core";
import GlanceSection from "../../Sections/HomePageSections/GlanceAtWorkContext/Container";
import { OurExpertEngineers, webDevServicesData as servicesData, WeHireTheMost, WeProvideExceptional } from "./webDevServicesData";
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
import Heading5 from "../../ContainerStructure/Headings/Heading5";
import Breakpoints from "../../Theme/theme.breakpoints";
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

  const { textColor, bannerBtn, leftPattern, rightPattern } =
    ServicesSectionStyles();
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
        <span >
        <CustomButton
          variant="contained"
          size={Breakpoints()}
          color="secondary"
        >
         Get Started
        </CustomButton>
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
        <Section title={ServicesSectionTitle} highlightWords={1}>
          <section style={{ marginBottom: "10px" }}>
            <Heading5 subTitle={OurExpertEngineers}/>
          </section>
          <PointList data={servicesData} horizontal={false} />
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
