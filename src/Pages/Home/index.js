import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import DocumentMeta from "react-document-meta";
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
import {Loader} from "../../Components/loader/index"
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
      style={{ display: "flex", flexDirection: "column", height: "100%" ,order: payload.reviews.order}}
      alignItems="center"
    >
      <QuoteCard alt="home" cardData={data} />
    </Grid>
  ));

  const [isMounted, setIsMounted] = useState(false)

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
              alt="home"
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
              alt="home"
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

  useEffect(()=>{
    // mounted = true
    setIsMounted(true)
    return ()=>{
      // mounted = false
      setIsMounted(false)
    }
  },[])


  if(loading) return <Loader/>

  return (
    <>
    <MetaTags title={title} description={description} canonical={canonical} keywords={keywords}/>
      <div className="App">
        <Grid style={{ order: payload.homeSlider.order }} item md={12} xs={12}>
          <Slide alt="home" data={payload} />
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
            data={payload.benefits.dataArray}/>
        </Grid>
        <Section backColor={BlueRibbon} patterns={ourWorkSectionPatterns}>
          <GlanceSection
            title={payload.ourWork.title}
            data={payload.ourWork.dataArray}
            buttonText={Data.buttonText}
            alt="home"
          />
        </Section>
        {/* TRAINING AND CERTIFICATION */}
        <Section>
          <Grid
            style={{ order: payload.trainingCertification.order }}
            container
            direction="row"
          >
            <Grid item lg={12} md={12} xs={12}>
              <CustomTitle
                underlined={true}
                text={payload.trainingCertification.title}
              />
            </Grid>
            {isMounted && payload.trainingCertification.dataArray &&
              payload.trainingCertification.dataArray
                .filter((card, idx) => idx < 4)
                .map((card, index) => (
                  <Grid key={index + "4th"} item xs={12}>
                    <CertificationList
                      toRight={index % 2 === 0 ? false : true}
                      root={rootClasses[index]}
                      data={card}
                      mounted = {isMounted}
                    />
                  </Grid>
                ))}
          </Grid>
          <CustomButton>See More</CustomButton>
        </Section>
        {/* NEWSLETTER SECTION
      <Section>
        <NewsletterForm />
      </Section> */}
        {/* CONTACT US FORM SECTION */}
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

          <CustomButton>See More</CustomButton>
          {/* <ReviewSlider slides={cardArr} /> */}
        </Section>
        {/* AWARD AND ACCREDITATIONS SECTION */}
        <Section>
          <CustomTitle underlined={true} text={payload.awards.title} />
          <Grid item
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              order: payload.awards.order,
            }}
          >
            {payload.awards.dataArray &&
              payload.awards.dataArray.map((data, index) => (
                <CustomImage
                  style={{ margin: "10px 40px", width: "130px", color: Mirage }}
                  src={data.image}
                  alt="home"
                  key={`awards-accred-${index}`}

                />
              ))}
          </Grid>
        </Section>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  value: state.themeReducer.lightThemeEnabled,
});

export default connect(mapStateToProps)(Home);
