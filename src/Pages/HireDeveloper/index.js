import PointList from "../../Components/PointBadge/PointList";
import Section from "../Section";
import CustomTitle from "../Section/CustomTitle";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import GlanceSection from "../../Sections/HomePageSections/GlanceAtWorkContext/Container";
import { Colors } from "../../Theme/color.constants";
import Banner from "../../Components/Banner";
import OptionsTab from "../../Components/OptionsTab";
import { Loader } from "../../Components/loader";
import { DoYouWant } from "./constants";
import useApi from "../../Utils/hireDeveloperApi";
import StarFishPattern from "../../assets/patterns/starfishBlue.png";
import ServicesSectionStyles from "../WebServices/style";
import PatternLeft from "../../assets/PatternLeft.png";
import BreadCrumb from "../../Components/BreadCrumb";
import CommentSection from "../../Components/CommentSection";
import CustomButton from "../../Components/CustomButton";
import CustomImage from "../../Components/CustomImage";
import { Data } from "../../Utils/Constants/Language/en/GlanceAtWorkData";
import { ourWorkSectionPatterns } from "../../Components/OurWorkSectionPatteren/OurWorkSectionPattern";
import ReviewCard from "../../Components/ReviewSlider/ReviewCard";
import { Grid } from "@material-ui/core";
import MetaTags from "../../Components/MetaTags";
const HireDeveloper = () => {
  const { aliceBlue, linearBackground, BlueRibbon } = Colors;
  const { data, review, metaData, banner, loading } = useApi();
  const payload = data.sections;
  const { title, description, canonical, keywords } = metaData;
  const slides = review.map((data, index) => (
    <Grid
      key={index}
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
      alignItems="center"
    >
      <ReviewCard alt="hire developer" cardData={data} />
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

  if (loading) return <Loader />;
  return (
    <>
      <MetaTags
        title={title}
        description={description}
        canonical={canonical}
        keywords={keywords}
      />
      <CommentSection alt="hire developer" data={slides}>
        {banner.map((data) => {
          return (
            <>
              <Banner
                image={data.image}
                alt="hire developer"
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
            alt="hire developer"
          />
          <CustomImage
            className={rightPattern}
            src={StarFishPattern}
            alt="hire developer"
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
                h1h2Style={{marginTop:0}}
              />
              <Typography variant="body1" color="textSecondary">
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
              <Typography variant="body1" color="textSecondary" style={{marginBottom:"-60px"}}>
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
              alt="hire developer"
              data={payload.services.dataArray}
              horizontal={false}
            />
          </Section>
        </div>
        <Section backColor={aliceBlue}>
          <CustomTitle text={payload.hiringOptions.title} underlined={true} />
          <OptionsTab data={payload.hiringOptions.dataArray} />
        </Section>
        <Section patterns={ourWorkSectionPatterns} backColor={aliceBlue}>
          <CustomTitle underlined={true} text={payload.benefits.title} />

          <PointList
            alt="hire developer"
            data={payload.benefits.dataArray}
            horizontal={true}
            lgBreakpoint={6}
          />
        </Section>
        <Section backColor={BlueRibbon} patterns={ourWorkSectionPatterns}>
          <GlanceSection
            title={payload.ourWork.title}
            data={payload.ourWork.dataArray}
            buttonText={Data.buttonText}
            alt="hire developer"
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

export default HireDeveloper;
