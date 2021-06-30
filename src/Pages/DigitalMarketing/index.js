import PointList from "../../Components/PointBadge/PointList";
import Section from "../Section";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
import Banner from "../../Components/Banner";
import { DoYouWant, Data } from "./constants";
import useApi from "../../Utils/digitalMarketingApi";
import StarFishPattern from "../../assets/patterns/starfishBlue.png";
import ServicesSectionStyles from "../WebServices/style";
import PatternLeft from "../../assets/PatternLeft.png";
import BreadCrumb from "../../Components/BreadCrumb";
import CommentSection from "../../Components/CommentSection";
import CustomButton from "../../Components/CustomButton";
import CustomImage from "../../Components/CustomImage";
import CustomTitle from "../../Pages/Section/CustomTitle";
import GlanceAtWork from "../../Sections/HomePageSections/GlanceAtWorkContext/Container";
import { ourWorkSectionPatterns } from "../../Components/OurWorkSectionPatteren/OurWorkSectionPattern";
import { Grid } from "@material-ui/core";
import ReviewCard from "../../Components/ReviewSlider/ReviewCard";
import MetaTags from "../../Components/MetaTags";
const DigitalMarketing = () => {
  const { linearBackground, BlueRibbon, aliceBlue } = Colors;
  const { data, review, banner, loading, metaData } = useApi();
  const payload = data.sections;

  const { title, description, canonical, keywords } = metaData;

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
  const slides = review.map((data, index) => (
    <Grid
      key={index}
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
      alignItems="center"
    >
      <ReviewCard cardData={data} />
    </Grid>
  ));

  if (loading) return <p>Loading</p>;
  return (
    <>
    <MetaTags title={title} description={description} canonical={canonical} keywords={keywords}/>
      <CommentSection data={slides}>
        {banner.map((data) => {
          return (
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
          );
        })}

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
          <CustomTitle text={payload.benefits.title} underlined={true} />

          <PointList
            data={payload.benefits.dataArray}
            horizontal={true}
            lgBreakpoint={6}
          />
        </Section>
        <Section backColor={BlueRibbon} patterns={ourWorkSectionPatterns}>
          <GlanceAtWork
            title={payload.ourWork.title}
            data={payload.ourWork.dataArray}
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
      </>
  );
};

export default DigitalMarketing;
