import React from "react";
import { useStyles } from "./infrastructureStyles";
import { Card, CardContent, Paper, Grid } from "@material-ui/core";
import Heading4 from "../../../ContainerStructure/Headings/Heading4";
import Heading5 from "../../../ContainerStructure/Headings/Heading5";
import Paragraph from "../../../ContainerStructure/Headings/Paragraphs/Paragraph";
import { Infrastructure } from "../MainComponent/MainData";

const InfrastructureContainer = () => {
  const {
    root,
    card,
    content,
    title,
    img1,
    img2,
    Images,
    image,
    img5,
    img6,
    img7,
    img8,
  } = useStyles();
  const {
    heading,
    subTitleOne,
    subTitleTwo,
    paragraphOne,
    Img1,
    Img2,
    Img3,
    Img4,
    subTitleThree,
    subTitleFour,
    Img5,
    Img6,
    Img7,
    Img8
  } = Infrastructure;
  return (
    <>
      <Paper elevation={0}>
        <Grid item lg={12} md={12} xs={12}>
          <Heading4 title={heading} />
        </Grid>
      </Paper>
      <Paper className={root} elevation={0}>
        <Grid container>
          <Grid item lg={6} md={6} xs={12}>
            <Card className={card}>
              <section className={content}>
                <CardContent>
                  <section className={title}>
                    <Heading5 subTitle={subTitleOne} />
                  </section>
                  <Paragraph para={paragraphOne} />
                  <section className={Images}>
                    <span className={img1}>
                      <img className={img1} src={Img1} alt="image" />
                      <img className={img2} src={Img2} alt="image" />
                    </span>
                  </section>
                    <section className={title}>
                      <Heading5 subTitle={subTitleTwo} />
                  
                  </section>
                  <Paragraph para={paragraphOne} />
                  <section className={Images}>
                    <span className={img1}>
                      <img className={img1} src={Img3} alt="image" />
                      <img className={img2} src={Img4} alt="image" />
                    </span>
                  </section>
                </CardContent>
              </section>
            </Card>
          </Grid>

          <Grid md={6} lg={6} sm={12} item>
            <Card className={card}>
              <section className={content}>
                <CardContent>
                <section className={Images}>
                    <span className={img5}>
                      <img className={img5} src={Img5} alt="image" />
                      <img className={img6} src={Img6} alt="image" />
                    </span>
                  </section>
                  <section className={title}>
                    <Heading5 subTitle={subTitleThree} />
                  </section>
                  <Paragraph para={paragraphOne} />
                  <section className={image}>
                    <span className={img7}>
                      <img className={img7} src={Img7} alt="image" />
                      <img className={img8} src={Img8} alt="image" />
                    </span>
                  </section>
                  <section className={title}>
                    <Heading5 subTitle={subTitleFour} />
                  </section>
                  <Paragraph para={paragraphOne} />
                
                </CardContent>
              </section>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default InfrastructureContainer;
