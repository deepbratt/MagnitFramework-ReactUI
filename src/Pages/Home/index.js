import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Slide from "../../Components/Slider/Container";
import Solutions from "../../Sections/HomePageSections/SolutionsContext/Solutions";
import PartnerContext from "../../Sections/HomePageSections/PartnerWithUsContext/Maincontainer";
import GlanceSection from "../../Sections/HomePageSections/GlanceAtWorkContext/Container";
import React, { useEffect, useState } from "react";
import ContactUsAndFQA from "../../Sections/HomePageSections/ContactUsAndFQA";
import { Typography, Hidden } from "@material-ui/core";
import Section from "../Section";
import Image1 from "../../assets/images/awardAccredationSection/image 2.png";
import Image2 from "../../assets/images/awardAccredationSection/image 3.png";
import Image3 from "../../assets/images/awardAccredationSection/image 4.png";
import Image4 from "../../assets/images/awardAccredationSection/image 5.png";
import Image5 from "../../assets/images/awardAccredationSection/image 6.png";
import CustomTitle from "../../Pages/Section/CustomTitle";
import startQuote from "../../assets/images/cards/startQuote.png";
import endQuote from "../../assets/images/cards/EndingQuoteBlue.png";
import BackGroudnPatternLeft from "../../assets/OurBlogs/LatestBlogPattern.png";
import BackGroudnPatternRight from "../../assets/OurBlogs/LatestBlogPatternRight.png";
import { Colors } from "../../Theme/color.constants";
import { ContactUsTitle } from "./constants";
import CertificationList from "../../Components/certificationList";
import HomeStyles from "./style";
import QuoteCard from "../../Components/QuoteCard";
import CustomButton from "../../Components/CustomButton";
import CustomImage from "../../Components/CustomImage";
import ReviewSlider from "../../Components/ReviewSlider";
import { Data } from "../../Utils/Constants/Language/en/GlanceAtWorkData";
import CardData from "../../Components/Card";
import useApi from "../../Utils/homePageApi";
import { Loader } from "../../Components/loader/index";
import MetaTags from "../../Components/MetaTags";
export const AwardSectionImages = [Image1, Image2, Image3, Image4, Image5];

const Home = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { leftRoot, rightRoot, leftPattern, rightPattern } = HomeStyles();
  const rootClasses = [rightRoot, leftRoot, rightRoot, leftRoot];
  const { data, loading, review, metaData } = useApi();
  const payload = data.sections;
  const { Mirage, BlueRibbon } = Colors;
  const { title, description, canonical, keywords } = metaData;

  const WhyUsSlides = review.map((data, index) => (
    <Grid
      key={index}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        order: payload.reviews.order,
      }}
      alignItems="center"
    >
      <QuoteCard alt="home" cardData={data} />
    </Grid>
  ));

  const [isMounted, setIsMounted] = useState(false);

  const ourWorkSectionPatterns = [
    {
      image: (
        <Hidden smDown>
          <Grid
            className={leftPattern}
            style={{ position: "absolute" }}
            item
            xs={3}
          >
            <img
              width="100%"
              height="100%"
              src={BackGroudnPatternLeft}
              alt="magnit home"
            />
          </Grid>
        </Hidden>
      ),
      styles: leftPattern,
    },
    {
      image: (
        <Hidden smDown>
          <Grid
            className={`${rightPattern}`}
            style={{ position: "absolute" }}
            item
            xs={4}
          >
            <img
              width="100%"
              height="100%"
              src={BackGroudnPatternRight}
              alt="magnit home"
            />
          </Grid>
        </Hidden>
      ),
      styles: rightPattern,
    },
  ];

  function submitForm() {
    setIsSubmitted(true);
  }

  useEffect(() => {
    // mounted = true
    setIsMounted(true);
    return () => {
      // mounted = false
      setIsMounted(false);
    };
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <MetaTags
        title={title}
        description={description}
        canonical={canonical}
        keywords={keywords}
      />
      <Grid container className="App">
        <Grid style={{ order: payload.homeSlider.order }} item md={12} xs={12}>
          <Slide alt="home" data={payload} />
        </Grid>
        <Grid
          style={{ order: payload.seoText.order, color: "black" , margin: payload.seoText.order===2 ? "60px 0 -60px 0" : 0}}
          item
          md={12}
          xs={12}
        >
          <Section>
            <CustomTitle
              h1h2={payload.seoText.title}
              underlined={true}
              variant={"h1"}
              // h1h2Style={{ marginTop: "0px" }}
            />
            <Typography variant="body1" color="textSecondary">
              {payload.seoText.dataArray[0].h1Detail}
            </Typography>
          </Section>
          {payload.seoText.dataArray[0].h2Detail && <Section>
            <CustomTitle
              h1h2={payload.seoText.subTitle}
              underlined={true}
              variant={"h2"}
            />
            <Typography
              variant="body1"
              color="textSecondary"
              // style={{ marginBottom: "0px" }}
            >
              {payload.seoText.dataArray[0].h2Detail}
            </Typography>
          </Section>}
        </Grid>
        <Grid style={{ order: payload.services.order }} item md={12} xs={12}>
          <Section>
            <CustomTitle underlined={true} text={payload.services.title} />
            <CardData alt="home" data={payload.services.dataArray} />
          </Section>
        </Grid>
        <Grid
          style={{ order: payload.ourSolutions.order }}
          item
          md={12}
          xs={12}
        >
          <Section backColor={BlueRibbon} patterns={ourWorkSectionPatterns}>
            <Solutions
              title={payload.ourSolutions.title}
              content={payload.ourSolutions.dataArray}
              subTitle={payload.ourSolutions.subTitle}
              alt="home"
            />
          </Section>
        </Grid>
        <Grid style={{ order: payload.benefits.order }} item xs={12}>
          <PartnerContext
            title={payload.benefits.title}
            alt="home"
            data={payload.benefits.dataArray}
          />
        </Grid>
        <Grid md={12} xs={12} item style={{ order: payload.ourWork.order }}>
          <Section backColor={BlueRibbon} patterns={ourWorkSectionPatterns}>
            <GlanceSection
              title={payload.ourWork.title}
              data={payload.ourWork.dataArray}
              buttonText={Data.buttonText}
              alt="home"
            />
          </Section>
        </Grid>
        {/* TRAINING AND CERTIFICATION */}
        <Grid
          style={{ order: payload.trainingCertification.order }}
          item
          md={12}
          xs={12}
          // direction="row"
        >
          <Section>
            <Grid container>
            <Grid item lg={12} md={12} xs={12}>
              <CustomTitle
                underlined={true}
                text={payload.trainingCertification.title}
              />
            </Grid>
            {isMounted &&
              payload.trainingCertification.dataArray &&
              payload.trainingCertification.dataArray
                .filter((card, idx) => idx < 4)
                .map((card, index) => (
                  <Grid key={index + "4th"} item xs={12}>
                    <CertificationList
                      toRight={index % 2 === 0 ? false : true}
                      root={rootClasses[index]}
                      data={card}
                      mounted={isMounted}
                    />
                  </Grid>
                ))}
                </Grid>
          </Section>
        </Grid>
        {/* <CustomButton>See More</CustomButton> */}
        {/* NEWSLETTER SECTION
      <Section>
        <NewsletterForm />
      </Section> */}
        {/* CONTACT US FORM SECTION */}
        <Grid item xs={12} md={12} style={{order: payload.FAQs.order}}>
          <Section>
            {!isSubmitted ? (
              <ContactUsAndFQA
                submitForm={submitForm}
                data={payload.FAQs.dataArray}
                faqHeading={payload.FAQs.title}
                heading={ContactUsTitle}
              />
            ) : (
              <Typography style={{ textAlign: "center" }} variant="button">
                Submitted
              </Typography>
            )}
          </Section>
          {/* What do our Client Say */}
          <Section startQuote={startQuote} endQuote={endQuote}>
            <Grid item lg={12} md={12} xs={12}>
              <CustomTitle underlined={true} text={payload.reviews.title} />
            </Grid>
            <ReviewSlider
              showArrows={false}
              showDots={false}
              slides={WhyUsSlides}
              itemsPerSlide={3}
            />

            <NavLink style={{ textDecoration: "none" }} to="/testimonial">
              <CustomButton>See More</CustomButton>
            </NavLink>
            {/* <ReviewSlider slides={cardArr} /> */}
          </Section>
        </Grid>
        {/* AWARD AND ACCREDITATIONS SECTION */}
        <Grid
          item
          style={{
            order: payload.awards.order,
          }}
          md={12}
          xs={12}
        >
          <Section>
            <CustomTitle underlined={true} text={payload.awards.title} />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {payload.awards.dataArray &&
                payload.awards.dataArray.map((data, index) => (
                  <CustomImage
                    style={{
                      margin: "10px 40px",
                      width: "130px",
                      color: Mirage,
                    }}
                    src={data.image}
                    alt="home"
                    key={`awards-accred-${index}`}
                  />
                ))}
            </div>
          </Section>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => ({
  value: state.themeReducer.lightThemeEnabled,
});

export default connect(mapStateToProps)(Home);
