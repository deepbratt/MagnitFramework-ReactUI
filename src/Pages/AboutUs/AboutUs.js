import React from "react";
import { Grid } from "@material-ui/core";
import Main from "./MainComponent/AboutMainSection";
import AboutUsNumberContext from "./NumberContext/AboutUsNumberContext";
import MissionContext from "./Mission&Vision/MissionContext"
import WhyUsContainer from "./WhyUsContainer"
import Foundersy from "./Foundersy/FoundersySection"
import Slider from "../../Components/Slider/Container"
import { MainData} from "../../Utils/Constants/Language/AboutUsData"
const array = [
  <Foundersy/>,
  <Foundersy/>,
]
const AboutUs = () => {
  const {heroImgsrc} = MainData
  return (
    <>
      <Grid container>
        <Grid item lg={12} md={12} xs={12}>
          <Main hero={heroImgsrc}/>
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <MissionContext />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <AboutUsNumberContext />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <Slider slides={array} />
        </Grid>
        <Grid item  md={12} xs={12}>
          <WhyUsContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
