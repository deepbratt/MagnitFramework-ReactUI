import React, { useState, useEffect, useCallback }  from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import Section from "../Section";
import { Grid, Typography } from "@material-ui/core";
import Banner from "../../Components/Banner";
import CardData from "../../Components/Card";
import CustomTitle from "../Section/CustomTitle";
import MetaTags from "../../Components/MetaTags";
import BreadCrumb from "../../Components/BreadCrumb";
import CustomButton from "../../Components/CustomButton";
import PointList from "../../Components/PointBadge/PointList";
import CommentSection from "../../Components/CommentSection";
import GlanceSection from "../../Sections/HomePageSections/GlanceAtWorkContext/Container";
import { ourWorkSectionPatterns } from "../../Components/OurWorkSectionPatteren/OurWorkSectionPattern";
import { Data } from "../../Utils/Constants/Language/en/GlanceAtWorkData";
import { DoYouWant } from "../WebServices/constants";
import { getPageDataApi } from "../../Utils/APIs/pagesApi";
import { Colors } from "../../Theme/color.constants";
import { Loader } from "../../Components/loader";
import ReviewCard from "../../Components/ReviewSlider/ReviewCard";
import RequestQuoteSection from "../../Sections/RequestQuoteSection";

const Services = () => {
  const { linearBackground, BlueRibbon, aliceBlue } = Colors;
  const [metaData, setMetaData] = useState({});
  const [sections, setSections] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory()

  const breadCrumData = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/services",
      text: "Services",
    },
  ];

  const getPageData = useCallback(async () => {
    setIsLoading(true);
    await getPageDataApi("services")
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
              <Typography color="textPrimary" variant="h1" gutterBottom>
                {sections.banner.dataArray[0].heading}
              </Typography>
              <Typography color="textPrimary" variant="h5" gutterBottom>
                {sections.banner.dataArray[0].subHeading}
              </Typography>
              <span>
                <NavLink to={'/request-a-quote'} style={{textDecoration:"none"}}>
                <CustomButton>
                  {sections.banner.dataArray[0].buttonLabel}
                </CustomButton>
                </NavLink>
              </span>
            </Banner>

            <Grid style={{ order: sections.services.order }} item xs={12}>
              <Section>
                <CustomTitle text={sections.services.title} underlined={true} />
                <CardData data={sections.services.dataArray} />
              </Section>
            </Grid>
          </Grid>
          <Grid style={{ order: sections.benefits.order }} item xs={12}>
            <Section patterns={ourWorkSectionPatterns} backColor={aliceBlue}>
              <Grid item xs={12}>
                <CustomTitle text={sections.benefits.title} underlined={true} />
                <PointList
                  data={sections.benefits.dataArray}
                  horizontal={true}
                  lgBreakpoint={6}
                />
              </Grid>
            </Section>
          </Grid>
          <Grid style={{ order: sections.ourWork.order }} item xs={12}>
            <Section backColor={BlueRibbon} patterns={ourWorkSectionPatterns}>
              <GlanceSection
                title={sections.ourWork.title}
                data={sections.ourWork.dataArray}
                buttonText={Data.buttonText}
              />
            </Section>
          </Grid>
          <Grid style={{ order: sections.reviews.order }} item xs={12}>
            <Section>
              <RequestQuoteSection/>
            </Section>
          </Grid>
          <Grid style={{ order: sections.reviews.order }} item xs={12}>
            <CommentSection data={sections.reviews ? getSlides() : []} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Services;
