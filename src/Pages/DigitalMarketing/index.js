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
import { Loader } from "../../Components/loader";

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
      <ReviewCard alt="digital marketing" cardData={data} />
    </Grid>
  ));

  if (loading) return <Loader />;
  return (
    <>
      <MetaTags
        title={title}
        description={description}
        canonical={canonical}
        keywords={keywords}
      />
      <CommentSection alt="digital marketing" data={slides}>
        {banner.map((data) => {
          return (
            <>
              <Banner
                image={data.image}
                alt="digital marketing"
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
            alt="digital marketing"
          />
          <CustomImage
            className={rightPattern}
            src={StarFishPattern}
            alt="digital marketing"
          />
          <Grid
            style={{ order: payload.seoText.order, color: "black" }}
            item
            md={12}
            xs={12}
          >
            <Section>
              <CustomTitle
                style={{ marginBottom: "20px" }}
                h1h2={payload.seoText.title}
                underlined={true}
                variant={"h1"}
              />
              <Typography variant="body1">
                {payload.seoText.dataArray[0].h1Detail}
              </Typography>
            </Section>
            <Section>
              <CustomTitle
                style={{ marginBottom: "20px" }}
                h1h2={payload.seoText.subTitle}
                underlined={true}
                variant={"h2"}
              />
              <Typography variant="body1">
                {payload.seoText.dataArray[0].h2Detail}
              </Typography>
            </Section>
          </Grid>
          <Section>
            <CustomTitle
              style={{ marginBottom: "20px" }}
              text={payload.services.title}
              underlined={true}
            />
            <CustomTitle subTitle={payload.services.subTitle} />
            <PointList
              alt="digital marketing"
              data={payload.services.dataArray}
              horizontal={false}
            />
          </Section>
        </div>

        <Section patterns={ourWorkSectionPatterns} backColor={aliceBlue}>
          <CustomTitle text={payload.benefits.title} underlined={true} />

          <PointList
            data={payload.benefits.dataArray}
            horizontal={true}
            lgBreakpoint={6}
            alt="digital marketing"
          />
        </Section>
        <Section backColor={BlueRibbon} patterns={ourWorkSectionPatterns}>
          <GlanceAtWork
            title={payload.ourWork.title}
            data={payload.ourWork.dataArray}
            buttonText={Data.buttonText}
            alt="digital marketing"
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
