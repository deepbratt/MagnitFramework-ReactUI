import React from "react";
import { Grid } from "@material-ui/core";
import Main from "../../Sections/MainComponent/AboutMainSection";
import MissionContext from "../../Sections/Mission&Vision/MissionContext";
import WhyUsContainer from "./WhyUsContainer";
import { MainData } from "../../Utils/Constants/Language/AboutUsData";

import Section from "../Section";
import { Colors } from "../../Theme/color.constants";

const AboutUs = () => {
  const {skyBlue}=Colors;
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
          <Main width="650px" hero={heroImgsrc} card={true} breadcrumbData={breadcrumbs} />
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
