import React from "react";
import { useStyles } from "./mainStyles";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import Heading from "../../ContainerStructure/Headings/Heading4";
import { MainData } from "../../Utils/Constants/Language/AboutUsData";
import BreadCrumb from "../../Components/BreadCrumb";
import CustomImage from "../../Components/CustomImage";
import CustomTitle from "../../Pages/Section/CustomTitle"
import Section from "../../Pages/Section";

const AboutMainSection = (props) => {
  const { title, paragraph } = MainData;

  const classes = useStyles();
  const { root, cardSec, breadCrumbStyles, paragraphStyle, hero, card } =
    classes;
  return (
    <>
      <Grid container className={root}>
        <Grid item xs={12}>
          <Card style={{padding: "0px"}} className={card}>
            <div className={breadCrumbStyles}>
              <BreadCrumb links={props.breadcrumbData} />
            </div>
            <CardContent className={cardSec}>
              <CustomImage width={props.width} className={hero} alt="hero" src={props.hero} />
            </CardContent>
          </Card>
          {props.card === true ? (
            <Card>
              <CardContent className={cardSec}>
              <CustomTitle style={{marginBottom: "20px"}} text={title} underlined={true}/>

                <section className={paragraphStyle}>
                  {paragraph &&
                    paragraph.map((text, index) => (
                      <Typography key={index} color="textSecondary" variant="h5">
                        {text}
                      </Typography>
                    ))}
                </section>
                </Section>
              </CardContent>
            </Card>
          ) : null}
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMainSection;
