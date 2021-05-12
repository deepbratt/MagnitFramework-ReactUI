import React from "react";
import { useStyles, THEME } from "./solutionStyles";
import { Typography, Card, CardContent } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import * as icons from "../../assets/icons/icon.constants";
import {Data} from "../../Utils/Constants/Language/en/SolutionsText"
import { Colors } from "../../Theme/color.constants";

const SolutionsSecondarySection = () => {
  const classes = useStyles();
  const {foodTitle,portalTitle,datingTitle,fitnessTitle} = Data
  const { cardSec, card, devSec, profileIcon } = classes;
  const { deliveryIcon, portalIcon, fitnessIcon, datingIcon } = icons;
  const {Tundora}=Colors;
  return (
    <>
      <section className={cardSec}>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <img alt="icon" className={profileIcon} src={deliveryIcon} />
            </section>
            <section>
              <MuiThemeProvider theme={THEME}>
                <Typography variant="h5"  style={{color:Tundora}} >
                  {foodTitle}
                </Typography>
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <img alt="icon" className={profileIcon} src={portalIcon} />
            </section>
            <section>
              <MuiThemeProvider theme={THEME}>
                <Typography variant="h5" style={{color:Tundora}}>
                  {portalTitle}
                </Typography>
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>

        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <img alt="icon" className={profileIcon} src={datingIcon} />
            </section>
            <section>
              <MuiThemeProvider theme={THEME}>
                <Typography variant="h5"  style={{color:Tundora}}>
                  {datingTitle}
                </Typography>
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <img alt="icon" className={profileIcon} src={fitnessIcon} />
            </section>
            <section>
              <MuiThemeProvider theme={THEME}>
                <Typography variant="h5"  style={{color:Tundora}}>
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
