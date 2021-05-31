import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import ServicesOffered from "../../Sections/HomePageSections/ServicesContext/Services";
import Slide from "../../Components/Slider/Container";
import Solutions from "../../Sections/HomePageSections/SolutionsContext/Solutions";
import PartnerContext from "../../Sections/HomePageSections/PartnerWithUsContext/Maincontainer";
import GlanceSection from "../../Sections/HomePageSections/GlanceAtWorkContext/Container";
import React, { useState } from "react";
import ContactUsAndFQA from "../../Sections/HomePageSections/ContactUsAndFQA";
import { Typography, Hidden } from "@material-ui/core";
import Section from "../Section";
import Image1 from "../../assets/images/awardAccredationSection/image 2.png";
import Image2 from "../../assets/images/awardAccredationSection/image 3.png";
import Image3 from "../../assets/images/awardAccredationSection/image 4.png";
import Image4 from "../../assets/images/awardAccredationSection/image 5.png";
import Image5 from "../../assets/images/awardAccredationSection/image 6.png";
import { cards } from "./cardData";
import CustomTitle from "../../Pages/Section/CustomTitle";
import startQuote from "../../assets/images/cards/startQuote.png";
import endQuote from "../../assets/images/cards/EndingQuoteBlue.png";
import BackGroudnPatternLeft from "../../assets/OurBlogs/LatestBlogPattern.png";
import BackGroudnPatternRight from "../../assets/OurBlogs/LatestBlogPatternRight.png";
import { Colors } from "../../Theme/color.constants";
import {
  ServicesSectionTitle,
  AwardSectionTitle,
  ContactUsTitle,
  TrainingAndCertificationSectionTitle,
  WhatDoClientSaySectionTitle,
} from "./constants";
import { trainingAndCertificationText as TCData } from "../../Utils/Constants/Language";
import FirstColumn from "../../Components/QuoteCard/FirstColumn";
import SecondColumn from "../../Components/QuoteCard/SecondColumn";
import ThirdColumn from "../../Components/QuoteCard/ThirdColumn";
import CertificationList from "../../Components/certificationList";
import HomeStyles from "./style";
import QuoteCard from "../../Components/QuoteCard";
import CustomButton from "../../Components/CustomButton";
import CustomImage from "../../Components/CustomImage";
import ReviewSlider from "../../Components/ReviewSlider";
import { ServicesData } from "../../Utils/Constants/Language/en/ServicesText";
import { Data } from "../../Utils/Constants/Language/en/GlanceAtWorkData";
export const AwardSectionImages = [Image1, Image2, Image3, Image4, Image5];

const Home = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { leftRoot, rightRoot, leftPattern, rightPattern } = HomeStyles();
  const rootClasses = [rightRoot, leftRoot, rightRoot, leftRoot];

  const {
    Mirage,
    BlueRibbon,
  } = Colors;
  const WhyUsSlides = [
    <>
      <Hidden mdDown>
        {cards &&
          cards.map((data, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={6}
              lg={4}
              style={{ display: "flex" }}
            >
              <QuoteCard cardData={data} />
            </Grid>
          ))}
      </Hidden>
      <Hidden lgUp>
        <Grid item>
          <SecondColumn />
        </Grid>
      </Hidden>
    </>,
    <>
      <Hidden mdDown>
        {cards &&
          cards.map((data, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={6}
              lg={4}
              style={{ display: "flex" }}
            >
              <QuoteCard cardData={data} />
            </Grid>
          ))}
      </Hidden>
      <Hidden lgUp>
        <Grid item>
          <ThirdColumn />
        </Grid>
      </Hidden>
    </>,
    <>
      <Hidden mdDown>
        {cards &&
          cards.map((data, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={6}
              lg={4}
              style={{ display: "flex" }}
            >
              <QuoteCard cardData={data} />
            </Grid>
          ))}
      </Hidden>
      <Hidden lgUp>
        <Grid item>
          <FirstColumn />
        </Grid>
      </Hidden>
    </>,
  ];

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
              alt=""
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
              alt=""
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

  return (
    <div className="App">
      <Grid item md={12} xs={12}>
        <Slide />
      </Grid>
      <Grid item md={12} xs={12}>
        <Section>
          <ServicesOffered
            title={ServicesSectionTitle}
            servicesData={ServicesData}
          />
        </Section>
      </Grid>
      <Grid item md={12} xs={12}>
        <Section backColor={BlueRibbon} patterns={ourWorkSectionPatterns}>
          <Solutions />
        </Section>
      </Grid>
      <Grid item md={12} xs={12}>
        <PartnerContext />
      </Grid>
      <Grid item md={12} xs={12}>
        <Section backColor={BlueRibbon} patterns={ourWorkSectionPatterns}>
          <GlanceSection
            image1={Data.image1}
            image2={Data.image2}
            image3={Data.image3}
            subtitleOne={Data.subtitleOne}
            subtitleTwo={Data.subtitleTwo}
            subtitleThree={Data.subtitleThree}
          />
        </Section>
      </Grid>
      {/* TRAINING AND CERTIFICATION */}
      <Section>
        <Grid container direction="row">
          <Grid item lg={12} md={12} xs={12}>
            <CustomTitle
              underlined={true}
              text={TrainingAndCertificationSectionTitle}
            />
          </Grid>
          {TCData &&
            TCData.filter((card, idx) => idx < 4).map((card, index) => (
              <Grid key={index} item xs={12}>
                <CertificationList
                  toRight={index % 2 === 0 ? false : true}
                  root={rootClasses[index]}
                  data={card}
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
          <ContactUsAndFQA submitForm={submitForm} heading={ContactUsTitle} />
        ) : (
          <Typography style={{ textAlign: "center" }} variant="button">
            Submitted
          </Typography>
        )}
      </Section>
      {/* What do our Client Say */}
      <Section startQuote={startQuote} endQuote={endQuote}>
        <Grid item lg={12} md={12} xs={12}>
          <CustomTitle underlined={true} text={WhatDoClientSaySectionTitle} />
        </Grid>
        <ReviewSlider
          showArrows={false}
          showDots={false}
          slides={WhyUsSlides}
        />

        <CustomButton>See More</CustomButton>
        {/* <ReviewSlider slides={cardArr} /> */}
      </Section>
      {/* AWARD AND ACCREDITATIONS SECTION */}
      <Section>
        <CustomTitle underlined={true} text={AwardSectionTitle} />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {AwardSectionImages &&
            AwardSectionImages.map((image, index) => (
              <CustomImage
                style={{ margin: "10px 40px", width: "130px", color: Mirage }}
                src={image}
                alt={`client${index}`}
                key={`awards-accred-${index}`}
              />
            ))}
        </div>
      </Section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.themeReducer.lightThemeEnabled,
});

export default connect(mapStateToProps)(Home);
