import PointList from "../../Components/PointBadge/PointList";
import Section from "../Section";
import CustomTitle from "../Section/CustomTitle";
import { Link, NavLink } from "react-router-dom";
import { Typography } from "@material-ui/core";
import GlanceSection from "../../Sections/HomePageSections/GlanceAtWorkContext/Container";
import { Colors } from "../../Theme/color.constants";
import Banner from "../../Components/Banner";
import { DoYouWant } from "./constants";
import useApi from "../../Utils/webDevelopmentApi";
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
import { useEffect } from "react";
import RequestQuoteSection from "../../Sections/RequestQuoteSection";
const Services = () => {
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
      <ReviewCard alt="web development" cardData={data} />
    </Grid>
  ));

  useEffect(() => {
    console.log(data);
  }, [data]);

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
      <Grid container>
        <MetaTags
          title={title}
          description={description}
          canonical={canonical}
          keywords={keywords}
        />
        <Grid item xs={12} style={{ order: payload.banner.order }}>
          {banner.map((data) => {
            return (
              <>
                <Banner
                  image={data.image}
                  alt="web development"
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
                    <NavLink to={'/request-a-quote'} style={{textDecoration:"none"}}>
                      <CustomButton>{data.buttonLabel}</CustomButton>
                    </NavLink>
                  </span>
                </Banner>
              </>
            );
          })}

          <div style={{ position: "relative" }}>
            <CustomImage
              className={leftPattern}
              src={PatternLeft}
              alt="web development"
            />
            <CustomImage
              className={rightPattern}
              src={StarFishPattern}
              alt="web development"
            />
          </div>
        </Grid>
        <Grid
          item
          md={12}
          xs={12}
          style={{ order: payload.seoText.order, color: "black" }}
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
            <Typography variant="body1" color="textSecondary">
              {payload.seoText.dataArray[0].h2Detail}
            </Typography>
          </Section>
        </Grid>
        <Grid item xs={12} style={{ order: payload.services.order }}>
          <Section>
            <CustomTitle
              style={{ marginBottom: "20px" }}
              text={payload.services.title}
              underlined={true}
            />
            <CustomTitle subTitle={payload.services.subTitle} />
            <PointList
              alt="web development"
              data={payload.services.dataArray}
              horizontal={false}
            />
          </Section>
        </Grid>
        <Grid item={12} style={{ order: payload.benefits.order }}>
          <Section patterns={ourWorkSectionPatterns} backColor={aliceBlue}>
            <CustomTitle underlined={true} text={payload.benefits.title} />

            <PointList
              alt="web development"
              data={payload.benefits.dataArray}
              horizontal={true}
              lgBreakpoint={6}
            />
          </Section>
        </Grid>
        <Grid item xs={12} style={{ order: payload.ourWork.order }}>
          <Section backColor={BlueRibbon} patterns={ourWorkSectionPatterns}>
            <GlanceSection
              title={payload.ourWork.title}
              data={payload.ourWork.dataArray}
              buttonText={Data.buttonText}
              alt="web development"
            />
          </Section>
        </Grid>
        <Grid item xs={12} style={{ order: payload.reviews.order - 1 }}>
          <Section>
            <RequestQuoteSection/>
          </Section>
        </Grid>
        <Grid item xs={12} style={{ order: payload.reviews.order }}>
          <CommentSection alt="web development" data={slides} />
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
