import React from "react";
import { useStyles } from "../../Sections/MainComponent/mainStyles";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import CustomImage from "../../Components/CustomImage";
import CustomButton from "../../Components/CustomButton";
import BreadCrumb from "../../Components/BreadCrumb";
import CustomTitle from "../../Pages/Section/CustomTitle";
import { splitString } from "../../Utils/globalFunctions";

const Main = ({ data, width }) => {
  const classes = useStyles();
  const { root, breadCrumbStyles, cardSec, hero, card, paragraph } = classes;

  const { dataArray } = data;
  const { heading, subHeading, buttonLabel, image } = dataArray[0];
  const bannerText = splitString(subHeading, "<br />");

  const breadcrumbs = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/careers",
      text: "Careers",
    },
  ];

  return (
    <>
      <Grid container className={root} style={{ marginBottom: "80px" }}>
        <Grid item xs={12}>
          <Card className={card}>
            <div className={breadCrumbStyles}>
              <BreadCrumb links={breadcrumbs} />
            </div>
            <CardContent className={cardSec}>
              <CustomImage
                width={width}
                className={hero}
                alt="hero"
                src={image}
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent className={cardSec}>
              <Grid item xs={12}>
                <CustomTitle
                  style={{ marginBottom: "10px" }}
                  text={heading}
                  underlined={true}
                />
              </Grid>
              <Grid item xs={12} style={{ margin: "20px" }}>
                <Typography variant="subtitle1" color="inherit">
                  {bannerText[0]}
                </Typography>
              </Grid>
              <Grid item xs={12} md={8} className={paragraph}>
                <Typography variant="body1" className={paragraph}>
                  {bannerText[1]}
                </Typography>
              </Grid>
            </CardContent>
          </Card>

          <Grid>
            <CustomButton>{buttonLabel}</CustomButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
