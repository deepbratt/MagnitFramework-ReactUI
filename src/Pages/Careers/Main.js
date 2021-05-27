import React from "react";
import { useStyles } from "../../Sections/MainComponent/mainStyles";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import Heading4 from "../../ContainerStructure/Headings/Heading4";
import { MainData } from "../../Utils/Constants/Language/en/CareersData";
import Breakpoints from "../../Theme/theme.breakpoints";
import { Colors } from "../../Theme/color.constants";
import CustomImage from "../../Components/CustomImage";
import CustomButton from "../../Components/CustomButton";
import BreadCrumb from "../../Components/BreadCrumb";
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
    textUnderlined,
  } = classes;
  const { Harlequin, whiteColor } = Colors;
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
              <CustomImage width={props.width} className={hero} alt="hero" src={props.hero} />
            </CardContent>
          </Card>
          <Card>
            <CardContent className={cardSec}>
              <Grid xs={12} className={textUnderlined}>
                <Heading4 title={heading} />
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
            <CustomButton
              style={{
                textTransform: "none",
                backgroundColor: Harlequin,
                color: whiteColor,
              }}
              variant="contained"
              size={Breakpoints()}
            >
              {buttonText}
            </CustomButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
