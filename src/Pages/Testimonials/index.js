import { CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import Banner from "../../Components/Banner";
import { Colors } from "../../Theme/color.constants";
import useStyles from "./styles";
import banner from "../../assets/Testimonials/banner.png";
import Heading from "../../ContainerStructure/Headings/Heading4";
import Paragraph from "../../ContainerStructure/Headings/Paragraphs/Paragraph";
import BreadCrumb from "../../Components/BreadCrumb";
import CommentSection from "../../Components/CommentSection";
import VideoCard from "./TestimonialVideo";
import {
  ClientsHaveToSay,
  subTitle,
  Testmonial,
} from "../../Utils/Constants/Language/en/TestimonialVideos";
import CustomButton from "../../Components/CustomButton";

// import Section from '../Section';
function Testimonials() {
  const { linearBackground } = Colors;
  const { textColor, cardSec, underlined, paragraph, flex, seeMore } =
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
          <section className={underlined}>
            <Heading title={Testmonial} />
          </section>
          <section className={paragraph}>
            <Paragraph para={ClientsHaveToSay} />
          </section>
        </CardContent>
      </Grid>
      <Grid container direction="row" justify="center">
        <VideoCard />
      </Grid>

      <Grid
        xs={12}
        container
        alignItems="center"
        justify="center"
        className={flex}
      >
        <CustomButton type="submit">See More</CustomButton>
      </Grid>
    </CommentSection>
  );
}

export default Testimonials;
