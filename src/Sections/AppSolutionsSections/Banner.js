import React from "react";
import { Typography } from "@material-ui/core";
import Breakpoints from "../../Theme/theme.breakpoints";
import Banner from "../../Components/Banner/index";
import { Colors } from "../../Theme/color.constants";
import theme from "../../Theme/GlobalFontSizes";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  bannerHeading,
  bannerParagraph,
  bannerImage,
  bannerButtonText,
} from "../../Utils/Constants/Language/en/AppSolutionsData";
import BreadCrumb from "../../Components/BreadCrumb";
import CustomButton from "../../Components/CustomButton";
const BannerSection = () => {
  const { linearBackground, Harlequin, whiteColor } = Colors;
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
      <MuiThemeProvider theme={theme}>
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
            <CustomButton
              variant="contained"
              size={Breakpoints()}
              style={{ backgroundColor: Harlequin, color: whiteColor }}
            >
              {bannerButtonText}
            </CustomButton>
          </section>
        </Banner>
      </MuiThemeProvider>
    </>
  );
};

export default BannerSection;
