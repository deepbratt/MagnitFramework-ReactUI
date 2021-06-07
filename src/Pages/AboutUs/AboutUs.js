import React from "react";
import { Grid } from "@material-ui/core";
import Main from "../../Sections/MainComponent/AboutMainSection";
import MissionContext from "../../Sections/Mission&Vision/MissionContext";
import WhyUsContainer from "./WhyUsContainer";
import { MainData } from "../../Utils/Constants/Language/AboutUsData";
import { useStyles } from "../../Sections/MainComponent/mainStyles";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  const { heroImgsrc } = MainData;
  const { hero } = useStyles();
  const breadcrumbs = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/about",
      text: "About Us",
    },
  ];

  return (
    <>
      <Helmet>
      <meta property="og:url" content="https://magnit.com/"/>
    <meta property="og:title" content="About Us"/>
    {/* <meta property="og:image" content="https://abc.xyz/favicon-194x194.png"/> */}
    <meta property="og:site_name" content="Magnit"/>
    <meta property="og:description" content="Magnit Inc...."/>

    <meta itemprop="name" content="Magnit"/>
    <meta itemprop="description" content="Magnit Inc...."/>
    {/* <meta itemprop="image" content="https://abc.xyz/android-chrome-192x192.png"/> */}

    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:title" content="Magnit"/>
    <meta name="twitter:description" content="Magnit Inc...."/>
    {/* <meta name="twitter:image" content="https://abc.xyz/android-chrome-192x192.png"/> */}

    <meta name="description" content="Magnit Inc...."/>
    <meta name="keywords" content="Magnit, Technology investment, Investment group, ..."/>
    <title>About Us | The Magnit</title>
    <link rel="canonical" href="https://magnit.com/about-us"/>
      </Helmet>
      <Grid container>
        <Grid item lg={12} md={12} xs={12}>
          <Main
            width="650px"
            hero={heroImgsrc}
            class={hero}
            card={true}
            breadcrumbData={breadcrumbs}
          />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <MissionContext />
        </Grid>
        <Grid item md={12} xs={12}>
          <WhyUsContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
