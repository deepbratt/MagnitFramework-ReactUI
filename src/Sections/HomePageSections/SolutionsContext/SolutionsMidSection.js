import React from "react";
import { useStyles } from "./solutionStyles";
import { Typography, Card, Grid } from "@material-ui/core";
import * as icons from "../../../assets/icons/icon.constants";
import { Data } from "../../../Utils/Constants/Language/en/SolutionsText";
import { Colors } from "../../../Theme/color.constants";
import CustomImage from "../../../Components/CustomImage";

const SolutionsSecondarySection = () => {
  const classes = useStyles();
  const { foodTitle, portalTitle, datingTitle, fitnessTitle } = Data;
  const { cardSec, card, devSec, profileIcon } = classes;
  const { deliveryIcon, portalIcon, fitnessIcon, datingIcon } = icons;
  const { Tundora } = Colors;
  return (
    <>
      <Grid container className={cardSec}>
        <Grid item className={card}>
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
        <Card className={card}>

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
        </Card>

        <Card className={card}>

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
        </Card>
        <Card className={card}>
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
        </Card>
      </Grid>
    </>
  );
};

export default SolutionsSecondarySection;
