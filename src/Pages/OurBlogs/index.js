import React, { useState, useEffect, useCallback } from "react";
import { Grid, Hidden, Typography } from "@material-ui/core";
import Banner from "../../Components/Banner";
import { Colors } from "../../Theme/color.constants";
import MetaTags from "../../Components/MetaTags";
import BackGroudnPatternLeft from "../../assets/OurBlogs/LatestBlogPattern.png";
import BackGroudnPatternRight from "../../assets/OurBlogs/LatestBlogPatternRight.png";
import BreadCrumb from "../../Components/BreadCrumb";
import Section from "../Section";
import TrendingBlogs from "./TrendingBlogs";
import LatestBlogs from "./LatestBlogs";
import ReviewSlider from "../../Components/ReviewSlider";
import { Pagination } from "@material-ui/lab";
import OurBlogsStyles from "./style";
import CustomTitle from "../Section/CustomTitle";
import { getPageDataApi } from "../../Utils/APIs/pagesApi";
import { Loader } from "../../Components/loader";

const OurBlogs = () => {
  const { linearBackground, BlueRibbon, whiteColor } = Colors;
  const { leftPattern, rightPattern } = OurBlogsStyles();

  const [metaData, setMetaData] = useState({});
  const [sections, setSections] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPageData = useCallback(async () => {
    setIsLoading(true);
    await getPageDataApi("blogs")
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

  const breadCrumData = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/blogs",
      text: "Blog",
    },
  ];

  const getSlides = () => {
    const slideArr = sections.trendingBlogs.dataArray.map((blog, index) => (
      <TrendingBlogs key={index} cardData={blog} />
    ));
    return slideArr;
  };

  const latestBlogsSectionPatterns = [
    {
      image: (
        <Hidden smDown>
          <Grid
            className={leftPattern}
            style={{ position: "absolute" }}
            item
            xs={4}
          >
            <img
              width="100%"
              height="100%"
              src={BackGroudnPatternLeft}
              alt="magnit blogs"
            />
          </Grid>
        </Hidden>
      ),
      styles: leftPattern,
    },
    {
      image: (
        <Hidden smDown>
          <Grid
            className={`${rightPattern}`}
            style={{ position: "absolute" }}
            item
            xs={4}
          >
            <img
              width="100%"
              height="100%"
              src={BackGroudnPatternRight}
              alt="magnit blogs"
            />
          </Grid>
        </Hidden>
      ),
      styles: rightPattern,
    },
  ];
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
              breadCrumb={<BreadCrumb links={breadCrumData} />}
              image={sections.banner.dataArray[0].image}
              backColor={linearBackground}
            >
              <Typography color="textPrimary" variant="h1" gutterBottom>
                {sections.banner.title}
              </Typography>
              <Typography color="textPrimary" variant="h3" gutterBottom>
                {sections.banner.dataArray[0].heading}
              </Typography>
              <Typography color="textPrimary" variant="h5" gutterBottom>
                {sections.banner.dataArray[0].subHeading}
              </Typography>
            </Banner>
          </Grid>
          <Grid style={{ order: sections.trendingBlogs.order }} item xs={12}>
            <Section>
              <CustomTitle
                text={sections.trendingBlogs.title}
                underlined={true}
              />
              <ReviewSlider
                slides={sections.trendingBlogs ? getSlides() : []}
                showArrows={false}
                indicatorsPosition
              />
            </Section>
          </Grid>
          <Grid style={{ order: sections.trendingBlogs.order }} item xs={12}>
            <Section
              backColor={BlueRibbon}
              patterns={latestBlogsSectionPatterns}
            >
              <CustomTitle
                color={whiteColor}
                text={sections.latestBlogs.title}
                underlined={false}
              />
              <Grid container justify="center" spacing={2}>
                {sections.latestBlogs.dataArray &&
                  sections.latestBlogs.dataArray.map((card, index) => (
                    <Grid
                      key={index + "blogslatest"}
                      item
                      xs={12}
                      sm={6}
                      lg={4}
                      style={{ display: "flex" }}
                    >
                      <LatestBlogs cardData={card} />
                    </Grid>
                  ))}
                <Grid item xs={12}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "40px",
                    }}
                  >
                    <Pagination count={4} color="primary" />
                  </div>
                </Grid>
              </Grid>
            </Section>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default OurBlogs;
