import React from "react";
import { useStyles, THEME } from "./solutionStyles";
import { Typography, Card, CardContent } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import * as icons from "../../assets/icons/icon.constants";
import {Data} from "../../Utils/Constants/Language/en/SolutionsText"
import { Colors } from "../../Theme/color.constants";
const SolutionsPrimarySection = () => {
  const classes = useStyles();
  const {chatTitle,classifiedTitle,fundingTitle,designTitle} = Data
  const { cardSec, card, devSec, profileIcon } = classes;
  const { chatIcon, classifiedIcon, fundIcon, designIcon } = icons;
  const {Tundora}=Colors
  return (
    <>
      <section className={cardSec}>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <img alt="icon" className={profileIcon} src={chatIcon} />
            </section>
            <section>
              <MuiThemeProvider theme={THEME}>
                <Typography variant="h5" >
                  {chatTitle}
                </Typography>
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <img alt="icon" className={profileIcon} src={classifiedIcon} />
            </section>
            <section>
              <MuiThemeProvider theme={THEME}>
                <Typography variant="h5" style={{color:Tundora}}>
                  {classifiedTitle}
                </Typography>
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <img alt="icon" className={profileIcon} src={fundIcon} />
            </section>
            <section>
              <MuiThemeProvider theme={THEME}>
                <Typography variant="h5" style={{color:Tundora}}>
                  {fundingTitle}
                </Typography>
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <img alt="icon" className={profileIcon} src={designIcon} />
            </section>
            <section>
              <MuiThemeProvider theme={THEME}>
                <Typography variant="h5" style={{color:Tundora}}>
                  {designTitle}
                </Typography>
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default SolutionsPrimarySection;
