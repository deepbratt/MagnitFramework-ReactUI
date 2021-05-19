import React from "react";
import { useStyles } from "../NumberContext/numberStyles";
import { missionStyles } from "./missionStyles";
import { Card, CardContent, Grid } from "@material-ui/core";
import Heading6 from "../../ContainerStructure/Headings/Heading6";
import Paragraph from "../../ContainerStructure/Headings/Paragraphs/Paragraph";
import {
  MidSection,
  MainData,
} from "../../Utils/Constants/Language/AboutUsData";
import Patten1 from "../../assets/AboutUs/vision1.png";
import Patten2 from "../../assets/AboutUs/vision2.png";
import CustomImage from "../../Components/CustomImage";

const MissionContext = () => {
  const { cardSec, devSec, dev } = useStyles();
  const { card, card2, root, Icon, underlined, leftPattern, rightPattern } =
    missionStyles();
  const { firstTitle, secondTitle, missionText, visionText } = MidSection;
  const { mission, vision } = MainData;
  return (
    <>
      <Grid container className={root} justify="center" alignContent="center">
        <CustomImage className={leftPattern} src={Patten1} alt="" />
        <CustomImage className={rightPattern} src={Patten2} alt="" />
        <Grid
          item
          xs={12}
          md={5}
          lg={4}
          style={{ paddingBottom: "20px" }}
          className={cardSec}
        >
          <Card className={card2}>
            <CardContent>
              <section className={devSec}>
                <section className={dev}></section>
                <section className={underlined}>
                  <CustomImage className={Icon} src={mission} alt="Icon" />
                  <Heading6 title={firstTitle} />
                  <Paragraph para={missionText} />
                </section>
              </section>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          lg={4}
          style={{ paddingBottom: "20px" }}
          className={cardSec}
        >
            <Card className={card}>
            <CardContent>
              <section className={devSec}>
                <section className={dev}></section>
                <section className={underlined}>
                  <CustomImage className={Icon} src={vision} alt="Icon" />
                  <Heading6 title={secondTitle} />
                  <Paragraph para={visionText} />
                </section>
              </section>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default MissionContext;
