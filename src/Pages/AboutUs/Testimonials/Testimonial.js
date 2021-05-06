import React from "react";
import { useStyles } from "./testimonialStyles";
import { Card, CardContent, Paper, Grid } from "@material-ui/core";
import Paragraph from "../../../ContainerStructure/Headings/Paragraphs/Paragraph";
import Heading4 from "../../../ContainerStructure/Headings/Heading4";
import { Testimonials } from "../../../Components/textConstants/AboutUsData";

const Testimonial = () => {
  const {
    root,
    card,
    cardSec,
    Images,
    Ellipse1,
    Secretary,
    opacity,
  } = useStyles();
  const {
    testimonialsHeading,
    ellipse1,
    ellipse2,
    ellipse3,
    title,
    span,
    paragraphPrimary,
    paragraph,
    secretary,
    sales,
    edrece,
  } = Testimonials;
  return (
    <>
      <Paper className={root} elevation={0}>
        <Grid item md={12} xs={12}>
          <Heading4 title={testimonialsHeading} />
        </Grid>
        <section className={card}>
          <Grid item lg={4} md={4} xs={12}>
            <Card>
              <CardContent>
                <section className={Images}>
                  <span className={Ellipse1}>
                    <img alt="ellipse" src={ellipse1} />
                    <img className={opacity} alt="ellipse" src={secretary} />
                  </span>
                </section>
                <section className={Images}>
                  <span className={Ellipse1}>
                    <img alt="ellipse" src={ellipse3} />
                    <img className={Secretary} alt="ellipse" src={sales} />
                  </span>
                </section>
                <section className={Images}>
                  <span className={Ellipse1}>
                    <img alt="ellipse" src={ellipse2} />
                    <img className={Secretary} alt="ellipse" src={edrece} />
                  </span>
                </section>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={7} md={7} xs={12}>
            <section>
              <Card>
                <CardContent className={cardSec}>
                  <section>
                    <Heading4 title={title} />
                    <Paragraph para={span} />
                  </section>
                  <section>
                    <Paragraph para={paragraphPrimary} />
                    <Paragraph para={paragraphPrimary} />
                    <Paragraph para={paragraph} />
                  </section>
                </CardContent>
              </Card>
            </section>
          </Grid>
        </section>
      </Paper>
    </>
  );
};

export default Testimonial;
