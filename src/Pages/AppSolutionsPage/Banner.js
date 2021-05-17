import React from "react";
import { Typography } from "@material-ui/core";
import Breakpoints from "../../Theme/theme.breakpoints";
import Banner from "../../Components/Banner/index";
import { Colors } from "../../Theme/color.constants";
import {
  bannerHeading,
  bannerParagraph,
  bannerImage,
  bannerButtonText,
} from "../../Utils/Constants/Language/en/AppSolutionsData";
import Button from "../../Components/CustomButton/index";
import Paragraph from "../../ContainerStructure/Headings/Paragraphs/Paragraph";
import { SolutionsStyles } from "./SolutionsStyles";
import BreadCrumb from "../../Components/BreadCrumb";
const BannerSection = () => {
  const { linearBackground } = Colors;
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
            <Button
              variant="contained"
              size={Breakpoints()}
              text={bannerButtonText}
            />
          </section>
        </section>
      </Banner>
    </>
  );
};

export default BannerSection;
