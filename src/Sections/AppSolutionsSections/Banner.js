import React from "react";
import { Typography , Button} from "@material-ui/core";
import Breakpoints from "../../Theme/theme.breakpoints";
import Banner from "../../Components/Banner/index";
import { Colors } from "../../Theme/color.constants";
import theme from "../../Theme/GlobalFontSizes"
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  bannerHeading,
  bannerParagraph,
  bannerImage,
  bannerButtonText,
} from "../../Utils/Constants/Language/en/AppSolutionsData";
import Paragraph from "../../ContainerStructure/Headings/Paragraphs/Paragraph";
import { SolutionsStyles } from "../../Pages/AppSolutionsPage/SolutionsStyles";
import BreadCrumb from "../../Components/BreadCrumb";
import CustomButton from "../../Components/CustomButton";
const BannerSection = () => {
  const { linearBackground , Harlequin, whiteColor} = Colors;
  const { breadCrumbStyles } = SolutionsStyles();
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
      <Banner image={bannerImage} backColor={linearBackground}>
        <div className={breadCrumbStyles}>
          <BreadCrumb links={breadcrumbData} />
        </div>
        <section style={{ marginTop: "30px" }}>
          <Typography variant="h1" gutterBottom>
            {bannerHeading}
          </Typography>
          <Typography variant="h5" gutterBottom>
          {bannerParagraph}
          </Typography>
          <section style={{ marginTop: "15px" }}>
          <CustomButton
              variant="contained"
              size={Breakpoints()}
              style={{backgroundColor: Harlequin, color: whiteColor}}
              >
                {bannerButtonText}
              </CustomButton>
          </section>
        </section>
      </Banner>
      </MuiThemeProvider>
    </>
  );
};

export default BannerSection;
