import React from "react";
import { useStyles } from "./mainStyles";
import { Card, CardContent, Paper } from "@material-ui/core";
import Heading from "../../../ContainerStructure/Headings/Heading4";
import Paragraph from "../../../ContainerStructure/Headings/Paragraphs/Paragraph";
import { MainData } from "../../../Utils/Constants/Language/AboutUsData";
import BreadCrumb from "../../../Components/BreadCrumb";
import { Colors } from "../../../Theme/color.constants";
import CustomImage from "../../../Components/CustomImage";
const {Mirage}=Colors;
const AboutMainSection = (props) => {
 
  const { title, paragraphPrimary, paragraphSecondary } = MainData;
  const breadcrumbData = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/about",
      text: "About Us",
    },
  ];
  const classes = useStyles();
  const { root, cardSec, breadCrumbStyles, paragraph, hero, card, underlined } =
    classes;
  return (
    <>
      <Paper className={root} elevation={0}>
        <section>
          <Card className={card}>
            <div className={breadCrumbStyles}>
              <BreadCrumb links={breadcrumbData} />
            </div>
            <CardContent className={cardSec}>
              <CustomImage className={hero} alt="hero" src={props.hero} />
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
