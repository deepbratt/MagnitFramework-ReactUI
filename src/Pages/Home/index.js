// <<<<<<< HEAD
import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Grid, Typography } from "@material-ui/core";
import MyAccordion from "../../Components/MyAccordion";
import Slider from "../../Components/Slider/Slider";
import Services from "../Section/Header/Services/Services";
import ContactUs from "../ContactUs";
import Section from "../Section";
import Image1 from "../../assets/images/awardAccredationSection/image 2.png";
import Image2 from "../../assets/images/awardAccredationSection/image 3.png";
import Image3 from "../../assets/images/awardAccredationSection/image 4.png";
import Image4 from "../../assets/images/awardAccredationSection/image 5.png";
import Image5 from "../../assets/images/awardAccredationSection/image 6.png";
import CardImage1 from "../../assets/images/cards/Rectangle 89.png";
import CardImage2 from "../../assets/images/cards/Rectangle 90.png";
import CardImage3 from "../../assets/images/cards/Rectangle 91.png";
import AuthImage1 from "../../assets/images/cards/author1.png";
import AuthImage2 from "../../assets/images/cards/author2.png";
import AuthImage3 from "../../assets/images/cards/author3.png";
import CardComponent from "../../Components/CardComponent";
import NewsletterForm from "../../Components/NewsletterForm";
import FactCard from "../../Components/FactCard";
import QuoteCard from "../../Components/QuoteCard";

const questions = [
  {
    summary:
      "1. Why should I outsource to India and choose Brainium for my project?",
    detail:
      "India is the hub of highly skilled software professionals. Brainium is one of the best Digital Agencies in India which offer cost effective services to its clients scattered all over the globe. We treat every client's project like our own and provide the best solution to improve their business. We see client success as our own success.",
  },
  {
    summary: "2. What makes you believe that you are the best?",
    detail:
      "India is the hub of highly skilled software professionals. Brainium is one of the best Digital Agencies in India which offer cost effective services to its clients scattered all over the globe. We treat every client's project like our own and provide the best solution to improve their business. We see client success as our own success.",
  },
  {
    summary: "3. Can you walk me through an example?",
    detail:
      "India is the hub of highly skilled software professionals. Brainium is one of the best Digital Agencies in India which offer cost effective services to its clients scattered all over the globe. We treat every client's project like our own and provide the best solution to improve their business. We see client success as our own success.",
  },
  {
    summary: "3. Can you walk me through an example?",
    detail:
      "India is the hub of highly skilled software professionals. Brainium is one of the best Digital Agencies in India which offer cost effective services to its clients scattered all over the globe. We treat every client's project like our own and provide the best solution to improve their business. We see client success as our own success.",
  },
  {
    summary: "3. Can you walk me through an example?",
    detail:
      "India is the hub of highly skilled software professionals. Brainium is one of the best Digital Agencies in India which offer cost effective services to its clients scattered all over the globe. We treat every client's project like our own and provide the best solution to improve their business. We see client success as our own success.",
  },
];

const cards = [
  {
    title: "Web Design",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud xercitation ullamco laboris nisi ut aliquip",
    authName: "Charls dolo",
    lesson: "13",
    coverImg: CardImage1,
    authImg: AuthImage1,
  },
  {
    title: "Graphic Design",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud xercitation ullamco laboris nisi ut aliquip",
    authName: "Jenny Tailor",
    lesson: "19",
    coverImg: CardImage2,
    authImg: AuthImage2,
  },
  {
    title: "Social Media Marketing",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud xercitation ullamco laboris nisi ut aliquip",
    authName: "Catrina Doe",
    lesson: "15",
    coverImg: CardImage3,
    authImg: AuthImage3,
  },
];

const images = [Image1, Image2, Image3, Image4, Image5];

const Home = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="App">
      <Grid item md={12} xs={12}>
        <Slider {...props} />
      </Grid>
      <Grid item md={12} xs={12}>
        <Section>
          <Services {...props} />
        </Section>
      </Grid>
      {/* SOME FACTS ABOUT US SECTION */}
      <Section title="Some Quick Facts About Us">
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor="#E9F7FF"
              title="10+ Years"
              subtitle="Experience"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard backColor="#FBE9FF" title="200+" subtitle="Team" />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor="#EEF2FC"
              title="94%"
              subtitle="Happy Customers"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor="#E4FFFD"
              title="35+ Countries"
              subtitle="Served"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor="#E9FFF0"
              title="2000+"
              subtitle="Successful Projects"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor="#FFF6E4"
              title="ISO 9001:2015"
              subtitle="Certification"
            />
          </Grid>
        </Grid>
      </Section>
      {/* What do our Client Say */}
      <Section title="What Do Our Client Say?">
        <Grid container direction="row" spacing={2}>
          {cards &&
            cards
              .filter((card, idx) => idx < 3)
              .map((card, index) => (
                <Grid item xs={12} md={6} lg={4}>
                  <QuoteCard key={index} cardData={card} />
                </Grid>
              ))}
        </Grid>
      </Section>
      {/* TRAINING AND CERTIFICATION */}
      <Section title="Training and Certification" backColor="#FAFBFD">
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
      <Section title="Awards & Accreditations">
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
      <Section title="Frequently Asked Question">
        <MyAccordion questions={questions} />
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
