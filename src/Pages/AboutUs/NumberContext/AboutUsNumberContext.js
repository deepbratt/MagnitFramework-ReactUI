import React from "react";
import { useStyles } from "./numberStyles";
import { Card, CardContent, Paper } from "@material-ui/core";
import Heading5 from "../../../ContainerStructure/Headings/Heading5";
import Heading4 from "../../../ContainerStructure/Headings/Heading4";
import { titles, subTitles } from "../../../Components/textConstants/AboutUsData";

const AboutUsNumberContext = () => {
  const classes = useStyles();
  const { divOne, divTwo, divThree, divFour } = titles;
  const {
    FOUNDEDINTHEYEAR,
    FULLTIMEEMPLOYEES,
    TOTALPROJECTSCOMPLETE,
    CUSTOMERRETENTIONRATE,
  } = subTitles;
  const { root, cardSec, card, card2, card3, card4, devSec, dev } = classes;
  return (
    <>
      <Paper className={root} elevation={0}>
        <section className={cardSec}>
          <Card className={card}>
            <CardContent>
              <section className={devSec}>
                <section className={dev}></section>
                <section>
                  <Heading5 subTitle={FOUNDEDINTHEYEAR} />
                  <Heading4 title={divOne} />
                </section>
              </section>
            </CardContent>
          </Card>
          <Card className={card2}>
            <CardContent>
              <section className={devSec}>
                <section className={dev}></section>
                <section>
                  <Heading5 subTitle={FULLTIMEEMPLOYEES} />
                  <Heading4 title={divTwo} />
                </section>
              </section>
            </CardContent>
          </Card>
          <Card className={card3}>
            <CardContent>
              <section className={devSec}>
                <section className={dev}></section>
                <section>
                  <Heading5 subTitle={TOTALPROJECTSCOMPLETE} />
                  <Heading4 title={divThree} />
                </section>
              </section>
            </CardContent>
          </Card>
          <Card className={card4}>
            <CardContent>
              <section className={devSec}>
                <section className={dev}></section>
                <section>
                  <Heading5 subTitle={CUSTOMERRETENTIONRATE} />
                  <Heading4 title={divFour} />
                </section>
              </section>
            </CardContent>
          </Card>
        </section>
      </Paper>
    </>
  );
};

export default AboutUsNumberContext;
