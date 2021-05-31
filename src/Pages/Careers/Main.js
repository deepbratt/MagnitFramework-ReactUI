import React from "react";
import { useStyles } from "../../Sections/MainComponent/mainStyles";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { MainData } from "../../Utils/Constants/Language/en/CareersData";
import CustomImage from "../../Components/CustomImage";
import CustomButton from "../../Components/CustomButton";
import BreadCrumb from "../../Components/BreadCrumb";
import CustomTitle from "../../Pages/Section/CustomTitle"
const Main = (props) => {
  const { heading, subHeading, para, buttonText } = MainData;
  const classes = useStyles();
  const {
    root,
    breadCrumbStyles,
    cardSec,
    hero,
    card,
    paragraph,
  } = classes;
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
                width={props.width}
                className={hero}
                alt="hero"
                src={props.hero}
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent className={cardSec}>
              <Grid xs={12}>
              <CustomTitle style={{marginBottom: "10px"}} text={heading} underlined={true}/>
              </Grid>
              <Grid xs={12} style={{ margin: "20px" }}>
                <Typography variant="subtitle1" color="inherit">
                  {subHeading}
                </Typography>
              </Grid>
              <Grid xs={12} md={8} className={paragraph}>
                <Typography variant="body1" className={paragraph}>
                  {para}
                </Typography>
              </Grid>
            </CardContent>
          </Card>

          <Grid>
            <CustomButton>{buttonText}</CustomButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
