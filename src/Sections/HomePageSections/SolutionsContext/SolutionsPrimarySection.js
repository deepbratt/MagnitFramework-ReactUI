import React from "react";
import { useStyles } from "./solutionStyles";
import { Typography, Grid } from "@material-ui/core";
import * as icons from "../../../assets/icons/icon.constants";
import { Data } from "../../../Utils/Constants/Language/en/SolutionsText";
import { Colors } from "../../../Theme/color.constants";
import CustomImage from "../../../Components/CustomImage";
const SolutionsPrimarySection = () => {
  const classes = useStyles();
  const { chatTitle, classifiedTitle, fundingTitle, designTitle } = Data;
  const { card, devSec, profileIcon } = classes;
  const { chatIcon, classifiedIcon, fundIcon, designIcon } = icons;
  const { Tundora } = Colors;
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Grid item xs={12} className={card}>
            <Grid item className={devSec}>
              <CustomImage alt="icon" className={profileIcon} src={chatIcon} />
            </Grid>
            <Grid item>
              <Typography variant="h5" style={{ color: Tundora }}>
                {chatTitle}
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
                src={classifiedIcon}
              />
            </Grid>
            <Grid item>
              <Typography variant="h5" style={{ color: Tundora }}>
                {classifiedTitle}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Grid item xs={12} className={card}>
            <Grid item className={devSec}>
              <CustomImage alt="icon" className={profileIcon} src={fundIcon} />
            </Grid>
            <Grid item>
              <Typography variant="h5" style={{ color: Tundora }}>
                {fundingTitle}
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
                src={designIcon}
              />
            </Grid>
            <Grid item>
              <Typography variant="h5" style={{ color: Tundora }}>
                {designTitle}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SolutionsPrimarySection;
