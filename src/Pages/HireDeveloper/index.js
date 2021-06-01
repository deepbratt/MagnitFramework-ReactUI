import PointList from "../../Components/PointBadge/PointList";
import Section from "../Section";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import GlanceSection from "../../Sections/HomePageSections/GlanceAtWorkContext/Container";
import { webDevServicesData as servicesData } from "../WebServices/webDevServicesData";
import { whyHireData as hireUsData } from "../WebServices/whyHireData";
import { Colors } from "../../Theme/color.constants";
import Banner from "../../Components/Banner";
import {
  DoYouWant,
  HiringSectionTitle,
  ServicesSectionTitle,
  WhyHireSectionTitle,
  Combining,
  WeProvideExceptional,
  hireDeveloper,
} from "./constants";
import OptionsTab from "../../Components/OptionsTab";
import StarFishPattern from "../../assets/patterns/starfishBlue.png";
import ServicesSectionStyles from "../WebServices/style";
import BannerImage from "../../assets/services/BannerImage.png";
import PatternLeft from "../../assets/PatternLeft.png";
import BreadCrumb from "../../Components/BreadCrumb";
import CommentSection from "../../Components/CommentSection";
import CustomButton from "../../Components/CustomButton";
import CustomImage from "../../Components/CustomImage";
import Breakpoints from "../../Theme/theme.breakpoints";
import CustomTitle from "../../Pages/Section/CustomTitle"
import { ourWorkSectionPatterns } from "../../Components/OurWorkSectionPatteren/OurWorkSectionPattern";
import { Data } fromhttps://github.com/themagnit/MagnitFramework-ReactUI/pull/192/conflict?name=src%252FPages%252FHireDeveloper%252Findex.js&ancestor_oid=d4b5e7f7fa80303c20dd3c25ab1aeffb274231fe&base_oid=5a0fbe2954076ed48e358779a4f27cf37c2c2c10&head_oid=a03f856d31d06490e11de588d7b3ee6c31f08911 "../../Utils/Constants/Language/en/GlanceAtWorkData";
const HireDeveloper = () => {

  const { skyBlue, linearBackground,Ash } = Colors;


  const breadCrumData = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/hire-developer",
      text: "Hire Developer",
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
          {Combining}
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
        <Section highlightWords={1}>
          <CustomTitle style={{marginBottom: "20px"}} text={ServicesSectionTitle} underlined={true}/>
          <CustomTitle subTitle={hireDeveloper}/>
          <PointList data={servicesData} horizontal={false} />
        </Section>
      </div>
      <Section backColor={Ash}>
      <CustomTitle text={HiringSectionTitle} underlined={true}/>
        <OptionsTab />
      </Section>
      <Section>
      <CustomTitle text={WhyHireSectionTitle} underlined={true}/>
        <PointList data={hireUsData} horizontal={true} lgBreakpoint={6}/>
      </Section>
      {/* <GlanceSection backColor={skyBlue} /> */}
      <Section backColor={BlueRibbon} patterns={ourWorkSectionPatterns}>
          <GlanceSection
              title={Data.title}
              data={Data.arr}
              buttonText={Data.buttonText}
            />
        </Section>
      <Section>
      <CustomTitle text={DoYouWant} underlined={true}/>
    <span >
    
        <CustomButton
          variant="contained"
          size={Breakpoints()}
          color="primary"
          component={Link}
          to="/request-a-quote"
          
        >
       Request a Quote
        </CustomButton>
        </span>
      </Section>
    </CommentSection>
  );
};

export default HireDeveloper;
