import { Grid, Hidden, Typography } from "@material-ui/core";
import Banner from "../../Components/Banner";
import { Colors } from "../../Theme/color.constants";
import {
  BannerText,
  TrendingBlogsSectionText,
  LatestBlogsSectionText,
} from "../../Utils/Constants/Language/en/OurBlogsPageText";
import BannerImage from "../../assets/OurBlogs/BannerImage.png";
import BackGroudnPatternLeft from "../../assets/OurBlogs/LatestBlogPattern.png";
import BackGroudnPatternRight from "../../assets/OurBlogs/LatestBlogPatternRight.png";
import BreadCrumb from "../../Components/BreadCrumb";
import Section from "../Section";
import TrendingBlogs from "./TrendingBlogs";
import LatestBlogs from "./LatestBlogs";
import ReviewSlider from "../../Components/ReviewSlider";
import { Pagination } from "@material-ui/lab";
import OurBlogsStyles from "./style";
import CustomTitle from "../Section/CustomTitle"

const OurBlogs = () => {
  const { title, subtitle, subHeading } = BannerText;
  const { linearBackground, BlueRibbon, whiteColor } = Colors;
  const { leftPattern, rightPattern } = OurBlogsStyles();

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
  const { header, cards } = TrendingBlogsSectionText;

  const slideArr = [
    <TrendingBlogs featureImage={cards[0].coverImage} cardData={cards[0]} />,
    <TrendingBlogs featureImage={cards[0].coverImage} cardData={cards[1]} />,
    <TrendingBlogs featureImage={cards[0].coverImage} cardData={cards[2]} />,
  ];

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
              alt=""
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
              alt=""
            />
          </Grid>
        </Hidden>
      ),
      styles: rightPattern,
    },
  ];
  return (
    <>
      <Banner
        breadCrumb={<BreadCrumb links={breadCrumData} />}
        image={BannerImage}
        backColor={linearBackground}
      >
        <Typography color="textPrimary" variant="h1" gutterBottom>
          {title}
        </Typography>
        <Typography color="textPrimary" variant="h3" gutterBottom>
          {subHeading}
        </Typography>
        <Typography color="textPrimary" variant="h5" gutterBottom>
          {subtitle}
        </Typography>
      </Banner>
      <Section>
      <CustomTitle text={header} underlined={true}/>
        <ReviewSlider slides={slideArr} showArrows={false} indicatorsPosition />
      </Section>
      <Section
        backColor={BlueRibbon}
        patterns={latestBlogsSectionPatterns}
      >
          <CustomTitle color={whiteColor} text={LatestBlogsSectionText.header} underlined={false}/>
        <Grid container justify="center" spacing={2}>
          {LatestBlogsSectionText.cards &&
            LatestBlogsSectionText.cards.map((card, index) => (
              <Grid
                key={index}
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
    </>
  );
};

export default OurBlogs;
