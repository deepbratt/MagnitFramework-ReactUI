import React from "react";
import { useStyles } from "./solutionStyles";
import { Typography, Grid } from "@material-ui/core";
import * as icons from "../../../assets/icons/icon.constants";
import { Data } from "../../../Utils/Constants/Language/en/SolutionsText";
import { Colors } from "../../../Theme/color.constants";
import CustomImage from "../../../Components/CustomImage";

const SolutionsSecondarySection = () => {
  const classes = useStyles();
  const { foodTitle, portalTitle, datingTitle, fitnessTitle } = Data;
  const { card, devSec, profileIcon } = classes;
  const { deliveryIcon, portalIcon, fitnessIcon, datingIcon } = icons;
  const { Tundora } = Colors;
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Grid item xs={12} className={card}>
            <Grid item className={devSec}>
              <CustomImage
                alt="icon"
                className={profileIcon}
                src={deliveryIcon}
              />
            </Grid>
            <Grid item>
              <Typography variant="h5" style={{ color: Tundora }}>
                {foodTitle}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Grid item xs={12} className={card}>
            <Grid item className={devSec}>
              <CustomImage
                alt="icon"
                className={profileIcon}
                src={portalIcon}
              />
            </Grid>
            <Grid item>
              <Typography variant="h5" style={{ color: Tundora }}>
                {portalTitle}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Grid item xs={12} className={card}>
            <Grid item className={devSec}>
              <CustomImage
                alt="icon"
                className={profileIcon}
                src={datingIcon}
              />
            </Grid>
            <Grid item>
              <Typography variant="h5" style={{ color: Tundora }}>
                {datingTitle}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Grid item xs={12} className={card}>
            <Grid item className={devSec}>
              <CustomImage
                alt="icon"
                className={profileIcon}
                src={fitnessIcon}
              />
            </Grid>
            <Grid item>
              <Typography variant="h5" style={{ color: Tundora }}>
                {fitnessTitle}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SolutionsSecondarySection;
