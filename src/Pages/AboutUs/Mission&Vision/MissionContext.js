import React from "react";
import { useStyles } from "../NumberContext/numberStyles";
import { missionStyles } from "./missionStyles";
import { Card, CardContent, Paper } from "@material-ui/core";
import Heading6 from "../../../ContainerStructure/Headings/Heading6";
import Paragraph from "../../../ContainerStructure/Headings/Paragraphs/Paragraph";
import { MidSection,MainData } from "../../../Utils/Constants/Language/AboutUsData";

const MissionContext = () => {
  const {  cardSec, devSec, dev } = useStyles();
  const { card, card2 , root, Icon,underlined} = missionStyles();
  const { firstTitle, secondTitle, paragraph } = MidSection;
  const { mission,vision} = MainData;
  return (
    <>
      <Paper className={root} elevation={0}>
        <section style={{ paddingBottom: "20px" }} className={cardSec}>
          <Card className={card2}>
            <CardContent  >
              <section className={devSec}>
                <section className={dev}></section>
                <section className={underlined}>
                  <img className={Icon} src={mission} alt="Icon"/>
                  <Heading6 title={firstTitle} />
                  <Paragraph para={paragraph} />
                </section>
              </section>
            </CardContent>
          </Card>
          <Card className={card}>
            <CardContent  >
              <section  className={devSec}>
                <section className={dev}></section>
                <section className={underlined}>
                <img className={Icon} src={vision} alt="Icon"/>
                  <Heading6 title={secondTitle} />
                  <Paragraph para={paragraph} />
                </section>
              </section>
            </CardContent>
          </Card>
        </section>
      </Paper>
    </>
  );
};

export default MissionContext;
