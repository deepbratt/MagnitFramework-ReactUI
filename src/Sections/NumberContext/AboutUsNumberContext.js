import React from "react";
import { useStyles } from "./numberStyles";
import { Card, CardContent, Grid } from "@material-ui/core";
import Heading5 from "../../ContainerStructure/Headings/Heading5";
import Heading4 from "../../ContainerStructure/Headings/Heading4";
import {
  titles,
  subTitles,
  MainData,
} from "../../Utils/Constants/Language/AboutUsData";
import CustomImage from "../../Components/CustomImage";

const AboutUsNumberContext = () => {
  const classes = useStyles();
  const { divOne, divTwo, divThree, divFour } = titles;
  const { foundedIcon, employeeIcon, projectsIcon, ratingIcon } = MainData;
  const {
    FOUNDEDINTHEYEAR,
    FULLTIMEEMPLOYEES,
    TOTALPROJECTSCOMPLETE,
    CUSTOMERRETENTIONRATE,
  } = subTitles;
  const { root, cardSec, card, card2, card3, card4, devSec, dev } = classes;
  return (
    <>
      <Grid container className={root}>
        <Grid item xs={12} md={4} lg={3} className={cardSec}>
          <Card className={card}>
            <CardContent>
              <section className={devSec}>
                <section className={dev}></section>
                <section>
                  <CustomImage width="40px" src={foundedIcon} />
                  <Heading4 title={divOne} />
                  <Heading5 subTitle={FOUNDEDINTHEYEAR} />
                </section>
              </section>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} lg={3} className={cardSec}>
          <Card className={card2}>
            <CardContent>
              <section className={devSec}>
                <section className={dev}></section>
                <section>
                  <CustomImage width="70px" src={employeeIcon} />
                  <Heading4 title={divTwo} />
                  <Heading5 subTitle={FULLTIMEEMPLOYEES} />
                </section>
              </section>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} lg={3} className={cardSec}>
          <Card className={card3}>
            <CardContent>
              <section className={devSec}>
                <section className={dev}></section>
                <section>
                  <CustomImage width="60px" src={projectsIcon} />
                  <Heading4 title={divThree} />
                  <Heading5 subTitle={TOTALPROJECTSCOMPLETE} />
                </section>
              </section>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} lg={3} className={cardSec}>
          <Card className={card4}>
            <CardContent>
              <section className={devSec}>
                <section className={dev}></section>
                <section>
                  <CustomImage width="60px" src={ratingIcon} />
                  <Heading4 title={divFour} />
                  <Heading5 subTitle={CUSTOMERRETENTIONRATE} />
                </section>
              </section>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUsNumberContext;
