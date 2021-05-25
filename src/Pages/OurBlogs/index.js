import { Grid, Typography } from "@material-ui/core";
import Banner from "../../Components/Banner";
import { Colors } from "../../Theme/color.constants";
import {
  BannerText,
  TrendingBlogsSectionText,
  LatestBlogsSectionText,
} from "../../Utils/Constants/Language/en/OurBlogsPageText";
import BannerImage from "../../assets/OurBlogs/BannerImage.png";
import TrendingBlogCard from "../../assets/OurBlogs/TrendingBlogCard.png";
import BackGroudnPatternLeft from "../../assets/OurBlogs/LatestBlogPattern.png";
import BackGroudnPatternRight from "../../assets/OurBlogs/LatestBlogPatternRight.png";
import BreadCrumb from "../../Components/BreadCrumb";
import Section from "../Section";
import TrendingBlogs from "./TrendingBlogs";
import LatestBlogs from "./LatestBlogs";
import ReviewSlider from "../../Components/ReviewSlider";
import { Pagination } from "@material-ui/lab";
import OurBlogsStyles from "./style";

const OurBlogs = () => {
  const { title, subtitle } = BannerText;
  const { linearBackground, BlueRibbon } = Colors;
  const { leftPattern, rightPattern } = OurBlogsStyles;

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
  const { header, card } = TrendingBlogsSectionText;

  const slideArr = [
    <TrendingBlogs featureImage={TrendingBlogCard} cardData={card} />,
    <TrendingBlogs featureImage={TrendingBlogCard} cardData={card} />,
    <TrendingBlogs featureImage={TrendingBlogCard} cardData={card} />,
  ];

  const latestBlogsSectionPatterns = [
    {
      image: (
        <img width="100%" height="100%" src={BackGroudnPatternLeft} alt="" />
      ),
      styles: leftPattern,
    },
    // {
    //   image: (
    //     <img width="100%" height="100%" src={BackGroudnPatternRight} alt="" />
    //   ),
    //   styles: rightPattern,
    // },
  ];
  return (
    <>
      <Banner
        breadCrumb={<BreadCrumb links={breadCrumData} />}
        image={BannerImage}
        backColor={linearBackground}
      >
        <Typography variant="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {subtitle}
        </Typography>
      </Banner>
      <Section title={header}>
        <ReviewSlider slides={slideArr} showArrows={false} />
      </Section>
      <Section
        title={LatestBlogsSectionText.header}
        backColor={BlueRibbon}
        titleColor="white"
        patterns={latestBlogsSectionPatterns}
      >
        <Grid
          container
          justify="center"
          alignItems="center"
          alignContent="center"
          spacing={2}
        >
          {LatestBlogsSectionText.cards &&
            LatestBlogsSectionText.cards.map((card, index) => (
              <Grid key={index} item xs={12} md={4}>
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
    </>
  );
};

export default OurBlogs;
