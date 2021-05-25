import React from "react";
import { Typography, Button } from "@material-ui/core";
import Breakpoints from "../../Theme/theme.breakpoints";
import Banner from "../../Components/Banner/index";
import { Colors } from "../../Theme/color.constants";
import { BannerImage } from "../../Utils/Constants/Language/en/SolutionsPageData";
import {
  BannerHeading,
  Bannersubheading,
  paragraph,
} from "../../Utils/Constants/Language/en/SolutionsPageData";
import CustomButton from "../../Components/CustomButton";

const BannerSection = () => {
  const { linearBackground } = Colors;
  return (
    <>
      <Banner image={BannerImage} backColor={linearBackground}>
        <Typography color="textPrimary" variant="h1" gutterBottom>
          {BannerHeading} <br /> {Bannersubheading}
        </Typography>
        <Typography color="textPrimary" variant="h5" gutterBottom>
          {paragraph}
        </Typography>
        <section style={{ marginTop: "15px" }}>
          <CustomButton
            variant="contained"
            size={Breakpoints()}
            color="secondary"
          >
            <Typography variant="buttom">Get Started</Typography>
          </CustomButton>
        </section>
      </Banner>
    </>
  );
};

export default BannerSection;
