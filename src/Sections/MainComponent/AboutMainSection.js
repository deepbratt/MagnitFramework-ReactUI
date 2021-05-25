import React from "react";
import { useStyles } from "./mainStyles";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import Heading from "../../ContainerStructure/Headings/Heading4";
import { MainData } from "../../Utils/Constants/Language/AboutUsData";
import BreadCrumb from "../../Components/BreadCrumb";
import CustomImage from "../../Components/CustomImage";

const AboutMainSection = (props) => {
  const { title, paragraph } = MainData;

  const classes = useStyles();
  const { root, cardSec, breadCrumbStyles, paragraphStyle, hero, card, underlined } =
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
              <CustomImage className={hero} alt="hero" src={props.hero} />
            </CardContent>
          </Card>
          {props.card === true ? (
            <Card>
              <CardContent className={cardSec}>
                <section className={underlined}>
                  <Heading title={title} />
                </section>
                <section className={paragraphStyle}>
                  {paragraph &&
                    paragraph.map((text, index) => (
                      <Typography key={index} color="textSecondary" variant="body1">
                        {text}
                      </Typography>
                    ))}
                </section>
              </CardContent>
            </Card>
          ) : null}
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMainSection;
