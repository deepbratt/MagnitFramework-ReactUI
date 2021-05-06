import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import Services from "../Section/Header/ServicesContext/Services";
import Slide from "../../Components/Slider/Container";
import Solutions from "../SolutionsContext/Solutions";
import PartnerContext from "../PartnerWithUsContext/Maincontainer";
import GlanceSection from "../GlanceAtWorkContext/Container";
import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import MyAccordion from "../../Components/MyAccordion";
import ContactUs from "../ContactUs";
import Section from "../Section";
import Image1 from "../../assets/images/awardAccredationSection/image 2.png";
import Image2 from "../../assets/images/awardAccredationSection/image 3.png";
import Image3 from "../../assets/images/awardAccredationSection/image 4.png";
import Image4 from "../../assets/images/awardAccredationSection/image 5.png";
import Image5 from "../../assets/images/awardAccredationSection/image 6.png";
import CardComponent from "../../Components/CardComponent";
import NewsletterForm from "../../Components/NewsletterForm";
import QuestionData from "./questions.json";
import FactCard from "../../Components/FactCard";
import { cards } from "./cardData";
import CardSlyder from "../../Components/CardSlider";
import startQuote from "../../assets/images/cards/startQuote.png";
import endQuote from "../../assets/images/cards/EndingQuoteBlue.png";
import { Colors } from "../../Theme/color.constants";
import {
  AwardSectionTitle,
  FactsCardSectionTitle,
  FQASectionTitle,
  TrainingAndCertificationSectionTitle,
  WhatDoClientSaySectionTitle,
} from "./constants";
import ReviewSlider from "../../Components/ReviewSlider";

const images = [Image1, Image2, Image3, Image4, Image5];

const Home = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { sectionBackgroundColors, factCards,BlueRibbon,  } = Colors;
  const { peach, seaGreen, skyBlue, violet, purple, blue } = factCards;
  const { trainingAndCertification } = sectionBackgroundColors;
  const cardArr = [
    <CardSlyder cardData={cards} />,
    <CardSlyder cardData={cards} />,
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
      {/* SOME FACTS ABOUT US SECTION */}
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
          </Grid>
        </Grid>
      </Section>
      {/* What do our Client Say */}
      <Section
        title={WhatDoClientSaySectionTitle}
        startQuote={startQuote}
        endQuote={endQuote}
      >
        <ReviewSlider slides={cardArr} />
      </Section>
      {/* TRAINING AND CERTIFICATION */}
      <Section
        title={TrainingAndCertificationSectionTitle}
        backColor={trainingAndCertification}
      >
        <Grid container direction="row" spacing={2}>
          {cards &&
            cards
              .filter((card, idx) => idx < 3)
              .map((card, index) => (
                <Grid item xs={12} md={6} lg={4}>
                  <CardComponent key={index} cardData={card} />
                </Grid>
              ))}
        </Grid>
        <Button
          style={{ marginTop: "30px" }}
          color="primary"
          variant="contained"
        >
          <Typography
            style={{ textAlign: "center", color: "#fff" }}
            variant="button"
          >
            See more
          </Typography>
        </Button>
      </Section>
      {/* NEWSLETTER SECTION */}
      <Section>
        <NewsletterForm />
      </Section>

      {/* AWARD AND ACCREDITATIONS SECTION */}
      <Section title={AwardSectionTitle}>
        <div>
          {images &&
            images.map((image, index) => (
              <img
                style={{ margin: "10px 40px", width: "130px" }}
                src={image}
                alt={`client${index}`}
              />
            ))}
        </div>
      </Section>
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
      {/* FQA SECTION */}
      <Section title={FQASectionTitle}>
        <MyAccordion questions={QuestionData} />
        <Button color="primary" variant="contained">
          <Typography
            style={{ textAlign: "center", color: "#fff" }}
            variant="button"
          >
            See more
          </Typography>
        </Button>
      </Section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.themeReducer.lightThemeEnabled,
});

export default connect(mapStateToProps)(Home);
