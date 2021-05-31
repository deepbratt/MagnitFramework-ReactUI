import { CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import Banner from "../../Components/Banner";
import { Colors } from "../../Theme/color.constants";
import useStyles from "./styles";
import banner from "../../assets/Testimonials/banner.png";
import BreadCrumb from "../../Components/BreadCrumb";
import CommentSection from "../../Components/CommentSection";
import VideoCard from "./TestimonialVideo";
import {
  ClientsHaveToSay,
  subTitle,
  Testmonial,
} from "../../Utils/Constants/Language/en/TestimonialVideos";
import CustomButton from "../../Components/CustomButton";
import CustomTitle from "../../Pages/Section/CustomTitle"
import Section from "../Section";

// import Section from '../Section';
function Testimonials() {
  const { linearBackground } = Colors;
  const { textColor, cardSec, flex } =
    useStyles();

  const breadCrumData = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/testimonial",
      text: "Testimonials",
    },
  ];
  return (
    <CommentSection>
      <Banner
        image={banner}
        backColor={linearBackground}
        breadCrumb={<BreadCrumb links={breadCrumData} />}
      >
        <Typography variant="h1" gutterBottom className={textColor}>
          {Testmonial}
        </Typography>
        <Typography variant="h5" gutterBottom className={textColor}>
          {subTitle}
        </Typography>
      </Banner>
   
      <Grid xs={12}>
          <CardContent className={cardSec}>
          <CustomTitle style={{marginBottom: "20px"}} text={Testmonial} underlined={true}/>
          <CustomTitle subTitle={ClientsHaveToSay}/>
          </CardContent>
      </Grid>
     <Section  title={Testmonial} subTitle={ClientsHaveToSay}>
     </Section>

      <Grid container direction="row" justify="center">
        <VideoCard />
        <Grid
        xs={12}
        className={flex}
      >
        <CustomButton type="submit">See More</CustomButton>
      </Grid>
    
      </Grid>
    </CommentSection>
  );
}

export default Testimonials;
