import React from "react";
import { useStyles } from "./weOfferStyles";
import { Grid, Typography } from "@material-ui/core";
import Breakpoints from "../../Theme/theme.breakpoints";
import { Colors } from "../../Theme/color.constants";
import {
  heading,
  subheading,
} from "../../Utils/Constants/Language/en/SolutionsPageData";
import CustomButton from "../../Components/CustomButton/index";
import CustomImage from "../../Components/CustomImage";

const WeOfferContext = ({data}) => {
  const classes = useStyles();
  const { root, cardSec, card, devSec, button } = classes;
  const { DoveGray } = Colors;
  return (
    <>
      <Grid container className={root}>
        <Grid item lg={12} md={12} xs={12}>
          <Typography variant="h2">{heading}</Typography>
          <Typography variant="h6">{subheading}</Typography>
        </Grid>
        <Grid item className={cardSec}>
          {data.map((data, index) => {
            return (
              <Grid item lg={3} md={5} sm={12} className={card}>
                <Grid item key={index}>
                  <Grid item className={devSec}>
                    <Grid item>
                      <CustomImage alt="image" width="50px" src={data.Icon} />
                      <Typography variant="h5">{data.title}</Typography>

                      <Grid
                        item
                        style={{ color: DoveGray, paddingTop: "10px" }}
                      >
                        <Typography variant="body1">
                          {data.paragraph}
                        </Typography>
                      </Grid>
                      <CustomButton
                        variant="contained"
                        className={button}
                        size={Breakpoints()}
                      >
                        Learn More
                      </CustomButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default WeOfferContext;
