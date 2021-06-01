import PointList from "../../Components/PointBadge/PointList";
import Section from "../Section";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import GlanceSection from "./OurWork";
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
import CustomTitle from "../../Pages/Section/CustomTitle"

const DigitalMarketing = () => {
  const { skyBlue, linearBackground ,Ash} = Colors;

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
          srcset=""
        />
        <CustomImage
          className={rightPattern}
          src={StarFishPattern}
          alt=""
          srcset=""
        />
        <Section >
        <CustomTitle style={{marginBottom: "20px"}} text={ServicesSectionTitle} underlined={true}/>
          <CustomTitle subTitle={ourExpert}/>
          <PointList data={marketingServicesData} horizontal={false} />
        </Section>
      </div>

      <Section highlightWords={3}  backColor={Ash}>
      <CustomTitle text={WhyHireSectionTitle} underlined={true}/>
        <PointList data={hireUsData} horizontal={true} lgBreakpoint={6} />
      </Section>
        <GlanceSection image1={Data.image1} image2={Data.image2} image3={Data.image3} subtitleOne={Data.subtitleOne} subtitleTwo={Data.subtitleTwo} subtitleThree={Data.subtitleThree}  backColor={skyBlue} />
      <Section>
      <CustomTitle text={DoYouWant} underlined={true}/>
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
