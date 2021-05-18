import React from "react";
import { useStyles, THEME } from "./solutionStyles";
import { Typography, Card, CardContent, Grid } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
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
            <MuiThemeProvider theme={THEME}>
              <Typography variant="h5" style={{ color: Tundora }}>
                {foodTitle}
              </Typography>
            </MuiThemeProvider>
          </Grid>
        </Grid>
        <Card className={card}>
          <CardContent>
            <Grid item className={devSec}>
              <CustomImage
                alt="icon"
                className={profileIcon}
                src={portalIcon}
              />
            </Grid>
            <Grid item>
              <MuiThemeProvider theme={THEME}>
                <Typography variant="h5" style={{ color: Tundora }}>
                  {portalTitle}
                </Typography>
              </MuiThemeProvider>
            </Grid>
          </CardContent>
        </Card>

        <Card className={card}>
          <CardContent>
            <Grid item className={devSec}>
              <CustomImage
                alt="icon"
                className={profileIcon}
                src={datingIcon}
              />
            </Grid>
            <Grid item>
              <MuiThemeProvider theme={THEME}>
                <Typography variant="h5" style={{ color: Tundora }}>
                  {datingTitle}
                </Typography>
              </MuiThemeProvider>
            </Grid>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent>
            <Grid item className={devSec}>
              <CustomImage
                alt="icon"
                className={profileIcon}
                src={fitnessIcon}
              />
            </Grid>
            <Grid item>
              <MuiThemeProvider theme={THEME}>
                <Typography variant="h5" style={{ color: Tundora }}>
                  {fitnessTitle}
                </Typography>
              </MuiThemeProvider>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default SolutionsSecondarySection;
