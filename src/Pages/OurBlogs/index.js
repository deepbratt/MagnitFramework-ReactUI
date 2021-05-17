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
import BreadCrumb from "../../Components/BreadCrumb";
import Section from "../Section";
import TrendingBlogs from "./TrendingBlogs";
import LatestBlogs from "./LatestBlogs";
import ReviewSlider from "../../Components/ReviewSlider";
import { Pagination } from "@material-ui/lab";

const OurBlogs = () => {
  const { title, subtitle } = BannerText;
  const { linearBackground, BlueRibbon } = Colors;

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
      <Section title={LatestBlogsSectionText.header} backColor={BlueRibbon}>
        <Grid container>
          {LatestBlogsSectionText.cards &&
            LatestBlogsSectionText.cards.map((card, index) => (
              <Grid style={{ margin: "20px 0" }} key={index} item xs={12} lg={4}>
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
