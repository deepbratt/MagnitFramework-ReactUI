import React from "react";
import WeOffer from "./WeOffer/WeOfferContext";
import { Grid } from "@material-ui/core";
import ServicesSectionStyles from "../../Pages/Services/style";
import { useStyles } from "./WeOffer/weOfferStyles";
import { Colors } from "../../Theme/color.constants";
import Banner from "./Banner";
import CommentSection from "../../Components/CommentSection";
import Main from "./WhyUsContainer"
import Section from "../Section";
import CustomButton from "../../Components/CustomButton";
import Breakpoints from "../../Theme/theme.breakpoints";
import { Link } from 'react-router-dom'
import { DoYouWant } from "../Services/constants";

const Solutions = () => {
  const { linearBackground } = Colors;
  const { root } = ServicesSectionStyles();
  return (
    <>
    <CommentSection>
        <Grid
          className={root}
          style={{ paddingBottom: "50px", background: linearBackground }}
          item
          lg={12}
          md={12}
          xs={12}
        >
          <Banner />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <WeOffer />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <Main />
        </Grid>
        <Section title={DoYouWant}>
    <span >
        <CustomButton
          variant="contained"
          size={Breakpoints()}
          color="secondary"
          component={Link}
          to="/request-a-quote"
          
        >
       Request a Quote
        </CustomButton>
        </span>
    </Section>
        </CommentSection>
      

    </>
  );
};

export default Solutions;
