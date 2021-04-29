import React from "react";
import { useStyles } from "./mainStyles";
import { Card, CardContent, Paper } from "@material-ui/core";
import Heading from "../../../ContainerStructure/Headings/Heading4";
import Paragraph from "../../../ContainerStructure/Headings/Paragraphs/Paragraph";
import { MainData } from "./MainData";

const AboutMainSection = () => {
  const {
    title,
    paragraphPrimary,
    paragraphSecondary,
    heroImgsrc,
    ellipseImgsrc,
    ellipse2Imgsrc,
  } = MainData;
  const classes = useStyles();
  const { root, cardSec, Img, paragraph, Ellipse, Ellipse2,hero, card} = classes;
  return (
    <>
      <Paper className={root} elevation={0}>
        <section>
          <Heading title={title} />
        </section>
        <section>
          <Card className={card} >
            <CardContent className={cardSec}>
              <section className={Img}>
                <img className={hero} alt="hero" src={heroImgsrc} />
                <img className={Ellipse} alt="ellipse" src={ellipseImgsrc} />
                <img className={Ellipse2} alt="ellipse" src={ellipse2Imgsrc} />
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
