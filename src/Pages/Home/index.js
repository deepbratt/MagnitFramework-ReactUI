
import Grid from "@material-ui/core/Grid";
import Slider from "../../Components/Slider/Slider";
import { connect } from "react-redux";
import Services from "../Section/Header/ServicesContext/Services"
import Slide from "../../Components/Slider/Container"
import Solutions from "../SolutionsContext/Solutions";
import PartnerContext from "../PartnerWithUsContext/Maincontainer"
import GlanceSection from "../GlanceAtWorkContext/Container"
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
import QuoteCard from "../../Components/QuoteCard";
import { cards } from "./cardData";


const images = [Image1, Image2, Image3, Image4, Image5];

const Home = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      <Grid  item md={12} xs={12}>
          <Solutions/>
        </Grid>
        <Grid  item md={12} xs={12}>
          <PartnerContext/>
        </Grid>
        <Grid  item md={12} xs={12}>
          <GlanceSection/>
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
