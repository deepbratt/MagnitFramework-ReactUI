import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import Section from "../Section";
import Banner from "../../Components/Banner";
import useStyles from "./styles";
import BreadCrumb from "../../Components/BreadCrumb";
import CustomButton from "../../Components/CustomButton";
import CommentSection from "../../Components/CommentSection";
import banner from "../../assets/Testimonials/banner.png";
import CustomTitle from "../../Pages/Section/CustomTitle";
import MetaTags from "../../Components/MetaTags";
import VideoCard from "./TestimonialVideo";
import {
  subTitle,
  Testmonial,
} from "../../Utils/Constants/Language/en/TestimonialVideos";
import { Colors } from "../../Theme/color.constants";
import { getPageDataApi } from "../../Utils/APIs/pagesApi";
import { Loader } from "../../Components/loader";
import ReviewCard from "../../Components/ReviewSlider/ReviewCard";
import { DoYouWant } from "../WebServices/constants";

function Testimonials() {
  const { linearBackground } = Colors;
  const { textColor, flex } = useStyles();
  const [metaData, setMetaData] = useState({});
  const [sections, setSections] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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

  const getPageData = useCallback(async () => {
    setIsLoading(true);
    await getPageDataApi("testimonials")
      .then((response) => {
        if (response.status === "success") {
          console.log("response", response);
          setMetaData(response.data.result.metaData);
          setSections(response.data.result.sections);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  useEffect(() => {
    getPageData();
    console.log("useEffect");
  }, [getPageData]);

  const getSlides = () => {
    const slideArr = sections.reviews.dataArray.map((review, index) => (
      <ReviewCard key={index} cardData={review} />
    ));
    return slideArr;
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Grid container>
          <MetaTags
            title={metaData.title}
            description={metaData.description}
            canonical={metaData.canonical}
            keywords={metaData.keywords}
          />
          <Grid style={{ order: sections.banner.order }} item xs={12}>
            <Banner
              image={sections.banner.dataArray[0].image}
              backColor={linearBackground}
              breadCrumb={<BreadCrumb links={breadCrumData} />}
            >
              <>
                <Typography variant="h1" gutterBottom className={textColor}>
                  {sections.banner.dataArray[0].heading}
                </Typography>
                <Typography variant="h5" gutterBottom className={textColor}>
                  {sections.banner.dataArray[0].subHeading}
                </Typography>
              </>
            </Banner>
          </Grid>
          <Grid style={{ order: sections.reviews.order }} item xs={12}>
            <Section>
              <CustomTitle
                style={{ marginBottom: "20px" }}
                text={sections.reviews.title}
                underlined={true}
              />
              <CustomTitle subTitle={sections.reviews.subTitle} />

              <VideoCard data={sections.reviews.dataArray} />
              {/* <Grid xs={12} className={flex}>
                <CustomButton type="submit">See More</CustomButton>
              </Grid> */}
            </Section>
          </Grid>

          <Grid style={{ order: sections.reviews.order }} item xs={12}>
          <Section>
            <CustomTitle underlined={true} text={DoYouWant} />
            <span>
              <CustomButton component={Link} to="/request-a-quote">
                Request a Quote
              </CustomButton>
            </span>
          </Section>
            <CommentSection data={sections.reviews ? getSlides() : []} />
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default Testimonials;
