import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import Services from "../Section/Header/ServicesContext/Services";
import Slide from "../../Components/Slider/Container";
import Solutions from "../SolutionsContext/Solutions";
import PartnerContext from "../PartnerWithUsContext/Maincontainer";
import GlanceSection from "../GlanceAtWorkContext/Container";
import React, { useState } from "react";
import { Typography , Hidden} from "@material-ui/core";
import ContactUs from "../ContactUs";
import Section from "../Section";
import Image1 from "../../assets/images/awardAccredationSection/image 2.png";
import Image2 from "../../assets/images/awardAccredationSection/image 3.png";
import Image3 from "../../assets/images/awardAccredationSection/image 4.png";
import Image4 from "../../assets/images/awardAccredationSection/image 5.png";
import Image5 from "../../assets/images/awardAccredationSection/image 6.png";
// import CardComponent from "../../Components/CardComponent";
import { cards } from "./cardData";
// import CardSlyder from "../../Components/CardSlider";
import startQuote from "../../assets/images/cards/startQuote.png";
import endQuote from "../../assets/images/cards/EndingQuoteBlue.png";
import { Colors } from "../../Theme/color.constants";
import {
  AwardSectionTitle,
  TrainingAndCertificationSectionTitle,
  WhatDoClientSaySectionTitle,
} from "./constants";
// import ReviewSlider from "../../Components/ReviewSlider";
import { trainingAndCertificationText as TCData } from "../../Utils/Constants/Language";
import FirstColumn from "../../Components/QuoteCard/FirstColumn"
import CertificationList from "../../Components/certificationList";
import HomeStyles from "./style";
import QuoteCard from "../../Components/QuoteCard";
import CustomButton from "../../Components/CustomButton";
import CustomImage from "../../Components/CustomImage";

const images = [Image1, Image2, Image3, Image4, Image5];

const Home = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { leftRoot, rightRoot } = HomeStyles();
  // const {
  //   // sectionBackgroundColors,
  //   // factCards,
  //   glanceSectionBackground,
  // } = Colors;
  // const { peach, seaGreen, skyBlue, violet, purple, blue } = factCards;
  // const { trainingAndCertification } = sectionBackgroundColors;

  // prop for training and certification
  const rootClasses = [rightRoot, leftRoot, rightRoot, leftRoot];

  const {
    // sectionBackgroundColors, factCards,
    Mirage,
    BlueRibbon,
  } = Colors;
  // const { peach, seaGreen, skyBlue, violet, purple, blue } = factCards;
  // const { trainingAndCertification } = sectionBackgroundColors;


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
          <Services {...props} />
        </Section>
      </Grid>
      <Grid item md={12} xs={12}>
        <Solutions />
      </Grid>
      <Grid item md={12} xs={12}>
        <Section>
          <PartnerContext />
        </Section>
      </Grid>
      <Grid item md={12} xs={12}>
        <GlanceSection backColor={BlueRibbon} />
      </Grid>
      {/* SOME FACTS ABOUT US SECTION
      <Section title={FactsCardSectionTitle}>
        <Grid style={{ padding: "0 5%" }} container direction="row" spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={blue}
              title="10+ Years"
              subtitle="Experience"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard backColor={purple} title="200+" subtitle="Team" />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={violet}
              title="94%"
              subtitle="Happy Customers"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={skyBlue}
              title="35+ Countries"
              subtitle="Served"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={seaGreen}
              title="2000+"
              subtitle="Successful Projects"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={peach}
              title="ISO 9001:2015"
              subtitle="Certification"
            />
          </Grid>s
        </Grid>
      </Section> */}

      {/* TRAINING AND CERTIFICATION */}
      <Section title={TrainingAndCertificationSectionTitle}>
        <Grid container direction="row">
          {TCData &&
            TCData.filter((card, idx) => idx < 4).map((card, index) => (
              <Grid key={index} item xs={12}>
                <CertificationList root={rootClasses[index]} data={card} />
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
          <ContactUs submitForm={submitForm} />
        ) : (
          <Typography style={{ textAlign: "center" }} variant="button">
            Submitted
          </Typography>
        )}
      </Section>
      {/* What do our Client Say */}
      <Section
        title={WhatDoClientSaySectionTitle}
        startQuote={startQuote}
        endQuote={endQuote}
      >
        <Grid style={{ position: "sticky" }} container direction="row">
        <Hidden smDown>
        {cards &&
            cards.map((data, index) => (
              <Grid key={index} item xs={12} md={6} lg={4}>
                <QuoteCard cardData={data} />
              </Grid>
            ))}
        </Hidden>
            <Hidden mdUp>
            <Grid item >
          <FirstColumn/>
        </Grid>
            </Hidden>
        </Grid>
       
        <CustomButton>See More</CustomButton>
        {/* <ReviewSlider slides={cardArr} /> */}
      </Section>
      {/* AWARD AND ACCREDITATIONS SECTION */}
      <Section title={AwardSectionTitle}>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly"}}>
          {images &&
            images.map((image, index) => (
              <CustomImage
                key={index}
                style={{ margin: "10px 40px", width: "130px",color:Mirage }}
                src={image}
                alt={`client${index}`}
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
