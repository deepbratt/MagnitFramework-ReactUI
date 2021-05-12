import { Typography } from "@material-ui/core";
import Banner from "../../Components/Banner";
import { Colors } from "../../Theme/color.constants";
import {
  BannerText,
  TrendingBlogsSectionText,
} from "../../Utils/Constants/Language/en/OurBlogsPageText";
import BannerImage from "../../assets/OurBlogs/BannerImage.png";
import TrendingBlogCard from "../../assets/OurBlogs/TrendingBlogCard.png";
import BreadCrumb from "../../Components/BreadCrumb";
import Section from "../Section";
import TrendingBlogs from "./TrendingBlogs";

const OurBlogs = () => {
  const { title, subtitle } = BannerText;
  const { linearBackground } = Colors;

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
        <TrendingBlogs featureImage={TrendingBlogCard} cardData={card} />
      </Section>
    </>
  );
};

export default OurBlogs;
