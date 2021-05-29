import React from "react";
import { useStyles } from "./solutionStyles";
import { Typography, Grid } from "@material-ui/core";
import PrimarySection from "./SolutionsPrimarySection";
import MidSection from "./SolutionsMidSection";
import Breakpoints from "../../../Theme/theme.breakpoints";
import { Colors } from "../../../Theme/color.constants";
import { Data } from "../../../Utils/Constants/Language/en/SolutionsText";
import CustomButton from "../../../Components/CustomButton";
import CustomTitle from "../../../Pages/Section/CustomTitle";
const Solutions = () => {
  const classes = useStyles();
  const { root } = classes;
  const { heading, subHeading } = Data;
  const { whiteColor, blackColor } = Colors;
  return (
    <>
      <Grid container className={root} elevation={0}>
        <Grid item lg={12} md={12} xs={12}>
          <CustomTitle
            underlined={false}
            subTitle={subHeading}
            color={whiteColor}
            text={heading}
          />
        </Grid>
        <PrimarySection />
        <MidSection />
        <Grid item lg={12} md={12} xs={12}>
          <CustomButton
            style={{
              backgroundColor: whiteColor,
              padding: ".3rem 1.9rem",
              color: blackColor,
              borderRadius: "5px",
              marginTop: "20px",
            }}
            variant="contained"
            size={Breakpoints()}
          >
            See More
          </CustomButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Solutions;
