import React from "react";
import { useStyles } from "./mainStyles";
import { Card, CardContent, Paper } from "@material-ui/core";
import Heading from "../../../ContainerStructure/Headings/Heading4";
import Paragraph from "../../../ContainerStructure/Headings/Paragraphs/Paragraph";
import { MainData } from "../../../Utils/Constants/Language/AboutUsData";

const AboutMainSection = (props) => {
  const {
    title,
    paragraphPrimary,
    paragraphSecondary,
  } = MainData;
  const classes = useStyles();
  const {
    root,
    cardSec,
    paragraph,
    hero,
    card,
    underlined,
  } = classes;
  return (
    <>
      <Paper className={root} elevation={0}>
        <section>
          <Card className={card}>
            <CardContent className={cardSec}>
                <img className={hero} alt="hero" src={props.hero} />
          
            </CardContent>
          </Card>
          <Card>
            <CardContent className={cardSec}>
              <section className={underlined}>
                <Heading title={title} />
              </section>
              <section className={paragraph}>
                <Paragraph para={paragraphPrimary} />
                <Paragraph para={paragraphSecondary} />
              </section>
            </CardContent>
          </Card>
        </section>
      </Paper>
    </>
  );
};

export default AboutMainSection;
