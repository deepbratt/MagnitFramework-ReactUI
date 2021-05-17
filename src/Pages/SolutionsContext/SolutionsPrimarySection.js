import React from "react";
import { useStyles, THEME } from "./solutionStyles";
import { Typography, Card, CardContent } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import * as icons from "../../assets/icons/icon.constants";
import {Data} from "../../Utils/Constants/Language/en/SolutionsText"
import CustomImage from "../../Components/CustomImage"
const SolutionsPrimarySection = () => {
  const classes = useStyles();
  const {chatTitle,classifiedTitle,fundingTitle,designTitle} = Data
  const { cardSec, card, devSec, profileIcon } = classes;
  const { chatIcon, classifiedIcon, fundIcon, designIcon } = icons;
  return (
    <>
      <section className={cardSec}>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <CustomImage alt="icon" className={profileIcon} src={chatIcon} />
            </section>
            <section>
              <MuiThemeProvider theme={THEME}>
                <Typography variant="h5" color="inherit">
                  {chatTitle}
                </Typography>
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <CustomImage alt="icon" className={profileIcon} src={classifiedIcon} />
            </section>
            <section>
              <MuiThemeProvider theme={THEME}>
                <Typography variant="h5" color="inherit">
                  {classifiedTitle}
                </Typography>
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <CustomImage alt="icon" className={profileIcon} src={fundIcon} />
            </section>
            <section>
              <MuiThemeProvider theme={THEME}>
                <Typography variant="h5" color="inherit">
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
                <Typography variant="h5" color="inherit">
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
