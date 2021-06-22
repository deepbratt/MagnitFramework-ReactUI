import React from "react";
import { Grid } from "@material-ui/core";
import Main from "../../Sections/MainComponent/AboutMainSection";
import MissionContext from "../../Sections/Mission&Vision/MissionContext";
import WhyUsContainer from "./WhyUsContainer";
import { MainData } from "../../Utils/Constants/Language/AboutUsData";
import { useStyles } from "../../Sections/MainComponent/mainStyles";
import MetaTags from "../../Components/MetaTags";

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
      <Grid container>
      <MetaTags title="About us | Magnit" description="about us..." canonical="about" keywords="about, us, about"/>
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
