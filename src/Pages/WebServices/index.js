import PointList from "../../Components/PointBadge/PointList";
import Section from "../Section";
import CustomTitle from "../Section/CustomTitle";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import GlanceSection from "../../Sections/HomePageSections/GlanceAtWorkContext/Container";
import { Colors } from "../../Theme/color.constants";
import Banner from "../../Components/Banner";
import {
  DoYouWant,
} from "./constants";
import useApi from "../../Utils/webDevelopmentApi"
import StarFishPattern from "../../assets/patterns/starfishBlue.png";
import ServicesSectionStyles from "./style";
import PatternLeft from "../../assets/PatternLeft.png";
import BreadCrumb from "../../Components/BreadCrumb";
import CommentSection from "../../Components/CommentSection";
import CustomButton from "../../Components/CustomButton";
import CustomImage from "../../Components/CustomImage";
import { Data } from "../../Utils/Constants/Language/en/GlanceAtWorkData";
import { ourWorkSectionPatterns } from "../../Components/OurWorkSectionPatteren/OurWorkSectionPattern";
import ReviewCard from "../../Components/ReviewSlider/ReviewCard";
import { Grid } from "@material-ui/core";
import { Loader } from "../../Components/loader";
import MetaTags from "../../Components/MetaTags";
const Services = () => {
  const { aliceBlue, linearBackground, BlueRibbon } = Colors;
  const {data,review,metaData,banner,loading} = useApi()
  const payload = data.sections
  const { title, description, canonical, keywords } = metaData;

  const slides = review.map((data, index) => (
    <Grid
      key={index}
      style={{ display: "flex", flexDirection: "column", height: "100%"}}
      alignItems="center"
    >
      <ReviewCard cardData={data} />
    </Grid>
  ));

  const breadCrumData = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/web-dev-services",
      text: "Web Development Services",
    },
  ];

  const { textColor, leftPattern, rightPattern } = ServicesSectionStyles();

 
 if(loading) return <Loader/>
  return (
    <>
    <MetaTags title={title} description={description} canonical={canonical} keywords={keywords}/>
    <CommentSection data={slides}>
      {banner.map((data)=>{
        return(
          <>
          <Banner
        image={data.image}
        backColor={linearBackground}
        breadCrumb={<BreadCrumb links={breadCrumData} />}
      >
          <Typography variant="h1" gutterBottom className={textColor}>
          {data.heading}
        </Typography>
        <Typography variant="h5" gutterBottom className={textColor}>
          {data.subHeading}
        </Typography>
        <span>
          <CustomButton>{data.buttonLabel}</CustomButton>
        </span>
        </Banner>
          </>
        )
      })}
   
      <div style={{ position: "relative" }}>
        <CustomImage
          className={leftPattern}
          src={PatternLeft}
          alt=""
          
        />
        <CustomImage
          className={rightPattern}
          src={StarFishPattern}
          alt=""
          
        />
        <Section>
          <CustomTitle
            style={{ marginBottom: "20px" }}
            text={payload.services.title}
            underlined={true}
          />
          <CustomTitle subTitle={payload.services.subTitle} />
          <PointList data={payload.services.dataArray} horizontal={false} />
        </Section>
      </div>
      <Section patterns={ourWorkSectionPatterns} backColor={aliceBlue}>
        <CustomTitle underlined={true} text={payload.benefits.title} />

        <PointList data={payload.benefits.dataArray} horizontal={true} lgBreakpoint={6} />
      </Section>
      <Section backColor={BlueRibbon} patterns={ourWorkSectionPatterns}>
        <GlanceSection
          title={payload.ourWork.title}
          data={payload.ourWork.dataArray}
          buttonText={Data.buttonText}
        />
      </Section>
      <Section>
        <CustomTitle underlined={true} text={DoYouWant} />
        <span>
          <CustomButton component={Link} to="/request-a-quote">
            Request a Quote
          </CustomButton>
        </span>
      </Section>
    </CommentSection>
    </>
  );
};

export default Services;
