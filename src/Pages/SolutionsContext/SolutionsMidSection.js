import React from "react";
import { useStyles, THEME } from "./solutionStyles";
import { Typography, Card, CardContent } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import * as icons from "../../assets/icons/icon.constants";
import {Data} from "../../Utils/Constants/Language/en/SolutionsText"
import CustomImage from "../../Components/CustomImage";

const SolutionsSecondarySection = () => {
  const classes = useStyles();
  const {foodTitle,portalTitle,datingTitle,fitnessTitle} = Data
  const { cardSec, card, devSec, profileIcon } = classes;
  const { deliveryIcon, portalIcon, fitnessIcon, datingIcon } = icons;
  return (
    <>
      <section className={cardSec}>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <CustomImage alt="icon" className={profileIcon} src={deliveryIcon} />
            </section>
            <section>
              <MuiThemeProvider theme={THEME}>
                <Typography variant="h5" color="inherit">
                  {foodTitle}
                </Typography>
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <CustomImage alt="icon" className={profileIcon} src={portalIcon} />
            </section>
            <section>
              <MuiThemeProvider theme={THEME}>
                <Typography variant="h5" color="inherit">
                  {portalTitle}
                </Typography>
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>

        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <CustomImage alt="icon" className={profileIcon} src={datingIcon} />
            </section>
            <section>
              <MuiThemeProvider theme={THEME}>
                <Typography variant="h5" color="inherit">
                  {datingTitle}
                </Typography>
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <CustomImage alt="icon" className={profileIcon} src={fitnessIcon} />
            </section>
            <section>
              <MuiThemeProvider theme={THEME}>
                <Typography variant="h5" color="inherit">
                  {fitnessTitle}
                </Typography>
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default SolutionsSecondarySection;
