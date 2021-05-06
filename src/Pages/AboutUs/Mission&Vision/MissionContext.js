import React from "react";
import { useStyles } from "../NumberContext/numberStyles";
import { missionStyles } from "./missionStyles";
import { Card, CardContent, Paper } from "@material-ui/core";
import Heading4 from "../../../ContainerStructure/Headings/Heading4";
import Heading6 from "../../../ContainerStructure/Headings/Heading6";
import Paragraph from "../../../ContainerStructure/Headings/Paragraphs/Paragraph";
import { MidSection } from "../../../Components/textConstants/AboutUsData";

const MissionContext = () => {
  const { root, cardSec, devSec, dev } = useStyles();
  const { card, card2 } = missionStyles();
  const { heading, firstTitle, secondTitle, paragraph } = MidSection;
  return (
    <>
      <Paper className={root} elevation={0}>
        <Heading4 title={heading} />
        <section style={{ paddingBottom: "20px" }} className={cardSec}>
          <Card className={card2}>
            <CardContent  >
              <section className={devSec}>
                <section className={dev}></section>
                <section>
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
                <section>
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
