import React from "react";
import { useStyles } from "../AboutUs/MainComponent/mainStyles";
import { Card, CardContent, Paper,Button } from "@material-ui/core";
import Heading4 from "../../ContainerStructure/Headings/Heading4";
import Paragraph from "../../ContainerStructure/Headings/Paragraphs/Paragraph";
import Heading5 from "../../ContainerStructure/Headings/Heading5";
import {MainData} from "../../Utils/Constants/Language/en/CareersData"
import Breakpoints from "../../Theme/theme.breakpoints"
import {Colors} from "../../Theme/color.constants"
const Main = (props) => {
  const {
    heading,
    subHeading,
    para,
    buttonText
  } = MainData;
  const classes = useStyles();
  const {
    root,
    cardSec,
    hero,
    card,
    paragraph,
    textUnderlined,
  } = classes;
  const {Harlequin,whiteColor} = Colors
  return (
    <>
      <Paper style={{marginBottom: "80px"}} className={root} elevation={0}>
        <section >
          <Card className={card}>
            <CardContent className={cardSec}>
                <img className={hero} alt="hero" src={props.hero} />
            </CardContent>
          </Card>
          <Card>
            <CardContent className={cardSec}>
              <section className={textUnderlined}>
                <Heading4 title={heading} />
              </section>
              <section style={{marginTop: "20px"}}>
              <Heading5 subTitle={subHeading} />
              </section>
              <section className={paragraph}>
                <Paragraph className={paragraph} para={para} />
              </section>
            </CardContent>
          </Card>
        </section>
        <section>
          <Button
            style={{ textTransform: "none", backgroundColor: Harlequin , color: whiteColor}}
            variant="contained"
            size={Breakpoints()}
          >
            {buttonText}
          </Button>
        </section>
      </Paper>
    </>
  );
};

export default Main;
