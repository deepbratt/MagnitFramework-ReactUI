import React from "react";
import { useStyles } from "../../Sections/MainComponent/mainStyles";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import Heading4 from "../../ContainerStructure/Headings/Heading4";
import Paragraph from "../../ContainerStructure/Headings/Paragraphs/Paragraph";
import Heading5 from "../../ContainerStructure/Headings/Heading5";
import {MainData} from "../../Utils/Constants/Language/en/CareersData"
import Breakpoints from "../../Theme/theme.breakpoints"
import {Colors} from "../../Theme/color.constants"
import CustomImage from "../../Components/CustomImage"
import CustomButton from "../../Components/CustomButton";
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
      <Grid xs={12} style={{marginBottom: "80px"}} className={root} elevation={0}>
        <section >
          <Card className={card}>
            <CardContent className={cardSec}>
                <CustomImage className={hero} alt="hero" src={props.hero} />
            </CardContent>
          </Card>
          <Card>
            <CardContent className={cardSec}>
              <Grid xs={12} className={textUnderlined}>
                <Heading4 title={heading} />
              </Grid>
              <Grid xs={12} style={{margin: "20px"}}>
              <Heading5 subTitle={subHeading} />
              </Grid>
              <Grid xs={12} md={6} className={paragraph}>
                <Typography variant="h6" className={paragraph}>
                {para}
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </section>
        <section>
          <CustomButton
            style={{ textTransform: "none", backgroundColor: Harlequin , color: whiteColor}}
            variant="contained"
            size={Breakpoints()}
          >
            {buttonText}
          </CustomButton>
        </section>
      </Grid>
    </>
  );
};

export default Main;
