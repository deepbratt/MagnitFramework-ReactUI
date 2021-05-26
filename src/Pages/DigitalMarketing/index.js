import PointList from "../../Components/PointBadge/PointList";
import Section from "../Section";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import GlanceSection from "../../Sections/HomePageSections/GlanceAtWorkContext/Container";
import {
  OurExpertEngineers,
  webDevServicesData as servicesData,
  WeHireTheMost,
  WeProvideExceptional,
} from "../WebServices/webDevServicesData";
import {  hireUsData } from "./whyWorkwithUs";
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
  Data
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


const DigitalMarketing = () => {
  const { skyBlue, linearBackground } = Colors;

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
            <Heading5 subTitle={ourExpert} />
          </section>
          <PointList data={marketingServicesData} horizontal={false} />
        </Section>
      </div>

      <Section title={WhyHireSectionTitle} highlightWords={3}>
        <PointList data={hireUsData} horizontal={true} lgBreakpoint={6} />
      </Section>
        <GlanceSection subtitleOne={Data.subtitleOne} subtitleTwo={Data.subtitleTwo} subtitleThree={Data.subtitleThree}  backColor={skyBlue} />
      <Section title={DoYouWant}>
        <span>
          <CustomButton
            variant="contained"
            size={Breakpoints()}
            color="secondary"
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

export default DigitalMarketing;
