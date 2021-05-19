import React from "react";
import { Typography , Button} from "@material-ui/core";
import Breakpoints from "../../Theme/theme.breakpoints";
import Banner from "../../Components/Banner/index";
import { Colors } from "../../Theme/color.constants";
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
      <Banner image={bannerImage} backColor={linearBackground}>
        <div className={breadCrumbStyles}>
          <BreadCrumb links={breadcrumbData} />
        </div>
        <section style={{ marginTop: "30px" }}>
          <Typography variant="h2" gutterBottom>
            {bannerHeading}
          </Typography>
          <Paragraph para={bannerParagraph} />
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
    </>
  );
};

export default BannerSection;
