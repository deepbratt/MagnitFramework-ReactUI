import React from "react";
import { Typography, Button } from "@material-ui/core";
import Breakpoints from "../../Theme/theme.breakpoints";
import Banner from "../../Components/Banner/index";
import Heading4 from "../../ContainerStructure/Headings/Heading4";
import { Colors } from "../../Theme/color.constants";
import { BannerImage } from "../../Utils/Constants/Language/en/SolutionsPageData";
import Paragraph from "../../ContainerStructure/Headings/Paragraphs/Paragraph";
import {
  BannerHeading,
  Bannersubheading,
  paragraph,
} from "../../Utils/Constants/Language/en/SolutionsPageData";

const BannerSection = () => {
  const { linearBackground } = Colors;
  return (
    <>
      <Banner image={BannerImage} backColor={linearBackground}>
        <Heading4 title={BannerHeading} />
        <Heading4 title={Bannersubheading} />
        <Paragraph para={paragraph} />
        <section style={{ marginTop: "15px" }}>
          <Button
            style={{ borderRadius: "none" }}
            variant="contained"
            size={Breakpoints()}
            color="secondary"
          >
            <Typography variant="buttom">Get Started</Typography>
          </Button>
        </section>
      </Banner>
    </>
  );
};

export default BannerSection;
