import React from "react";
import { useStyles } from "./mainStyles";
import { Card, CardContent, Paper } from "@material-ui/core";
import Heading from "../../../ContainerStructure/Headings/Heading4";
import Paragraph from "../../../ContainerStructure/Headings/Paragraphs/Paragraph";
import { MainData } from "../../../Utils/Constants/Language/AboutUsData";

const AboutMainSection = () => {
  const {
    title,
    paragraphPrimary,
    paragraphSecondary,
    heroImgsrc,
    ellipseImgsrc,
    ellipse2Imgsrc,
    Vector,
  } = MainData;
  const classes = useStyles();
  const {
    root,
    cardSec,
    Img,
    paragraph,
    Ellipse,
    Ellipse2,
    hero,
    card,
    vector,
    underlined,
  } = classes;
  return (
    <>
      <Paper className={root} elevation={0}>
        <section>
          <Card className={card}>
            <CardContent className={cardSec}>
              <section className={Img}>
                <img width="200px" className={vector} alt="hero" src={Vector} />
                <img className={hero} alt="hero" src={heroImgsrc} />
                <img className={Ellipse} alt="ellipse" src={ellipseImgsrc} />
                <img className={Ellipse2} alt="ellipse" src={ellipse2Imgsrc} />
              </section>
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
