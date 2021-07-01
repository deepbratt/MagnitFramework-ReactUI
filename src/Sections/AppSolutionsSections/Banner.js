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
const BannerSection = ({data,alt}) => {
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
     {data.map((data)=>{
       return(
         <>
          <Banner
        image={data.image}
        alt={alt}
        backColor={linearBackground}
        breadCrumb={<BreadCrumb links={breadcrumbData} />}
      >
        <Typography color="textPrimary" variant="h1" gutterBottom>
          {data.heading}
        </Typography>
        <Typography color="textPrimary" variant="h5" gutterBottom>
          {data.subHeading}
        </Typography>
        <section style={{ marginTop: "15px" }}>
          <CustomButton>{data.buttonLabel}</CustomButton>
        </section>
      </Banner>
         </>
       )
     })}
    </>
  );
};

export default BannerSection;
