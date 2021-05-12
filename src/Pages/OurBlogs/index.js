import { Typography } from "@material-ui/core";
import Banner from "../../Components/Banner";
import { Colors } from "../../Theme/color.constants";
import {
  BannerText,
  TrendingBlogsSectionText,
} from "../../Utils/Constants/Language/en/OurBlogsPageText";
import BannerImage from "../../assets/OurBlogs/BannerImage.png";
import BreadCrumb from "../../Components/BreadCrumb";
import Section from "../Section";

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
      <Section title={TrendingBlogsSectionText.title}></Section>
    </>
  );
};

export default OurBlogs;
