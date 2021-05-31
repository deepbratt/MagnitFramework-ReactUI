import React from "react";
import { Typography } from "@material-ui/core";
import Banner from "../../Components/Banner/index";
import { Colors } from "../../Theme/color.constants";
import {
  bannerHeading,
  bannerParagraph,
  bannerImage,
  bannerButtonText,
} from "../../Utils/Constants/Language/en/AppSolutionsData";
import BreadCrumb from "../../Components/BreadCrumb";
import CustomButton from "../../Components/CustomButton";
const BannerSection = () => {
  const { linearBackground} = Colors;
  const breadcrumbData = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/appSolutions",
      text: "App Solutions",
    },
  ];
  return (
    <>
      <Banner
        image={bannerImage}
        backColor={linearBackground}
        breadCrumb={<BreadCrumb links={breadcrumbData} />}
      >
        <Typography color="textPrimary" variant="h1" gutterBottom>
          {bannerHeading}
        </Typography>
        <Typography color="textPrimary" variant="h5" gutterBottom>
          {bannerParagraph}
        </Typography>
        <section style={{ marginTop: "15px" }}>
          <CustomButton>{bannerButtonText}</CustomButton>
        </section>
      </Banner>
    </>
  );
};

export default BannerSection;
