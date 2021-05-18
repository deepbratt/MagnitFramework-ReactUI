import React from "react";
import { Grid } from "@material-ui/core";
import Main from "./MainComponent/AboutMainSection";
import AboutUsNumberContext from "./NumberContext/AboutUsNumberContext";
import MissionContext from "./Mission&Vision/MissionContext";
import WhyUsContainer from "./WhyUsContainer";
import { MainData } from "../../Utils/Constants/Language/AboutUsData";
const AboutUs = () => {
  const { heroImgsrc } = MainData;
  // const { underlined, root, button } = FoundersyStyles();
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
        <Grid item lg={12} md={12} xs={12}>
          <Main hero={heroImgsrc} card={true} breadcrumbData={breadcrumbs} />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <MissionContext />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <AboutUsNumberContext />
        </Grid>
        <Grid item md={12} xs={12}>
          <WhyUsContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
