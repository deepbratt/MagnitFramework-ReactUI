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
];

const images = [Image1, Image2, Image3, Image4, Image5];

const Home = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="App">
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
      {!isSubmitted ? (
        <ContactUs submitForm={submitForm} />
      ) : (
        <Typography style={{ textAlign: "center" }} variant="button">
          Submitted
        </Typography>
      )}
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

export default Home;
