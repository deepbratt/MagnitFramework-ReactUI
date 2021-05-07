import React from "react";
import { useStyles, THEME } from "./sectionStyles";
import { Typography, Card, CardContent } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import * as icons from "../../assets/icons/icon.constants";
import { PrimaryData } from "../../Utils/Constants/Language/en/PartnerWithUsData";

const PrimarySection = ({
  appColor,
  reliableColor,
  innovativeColor,
  agileColor,
  transparencyColor,
  moneyColor,
  IconFill,

}) => {
  const classes = useStyles();
  const {
    cardSec,
    card,
    devSec,
    Icons,
    devSub,
    content,
    reliableSub,
    innovativeSub,
    agileSub,
    transparencySub,
    moneySub,
  } = classes;
  const {
    appIcon,
    reliableIcon,
    innovativeIcon,
    agileIcon,
    transparencyIcon,
    moneyIcon,
  } = icons;
  const {
    appTitle,
    appParagraph,
    reliableTitle,
    reliableParagraph,
    innovativeTitle,
    innovativeParagraph,
    agileTitle,
    agileParagraph,
    transparencyTitle,
    transparencyParagraph,
    moneyTitle,
    moneyParagraph,
  } = PrimaryData;
  return (
    <>
      <section className={cardSec}>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <section style={{ backgroundColor: appColor }} className={devSub}>
                <img
                  style={{ filter: IconFill }}
                  alt="icon"
                  className={Icons}
                  src={appIcon}
                />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                    {appTitle}
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    {appParagraph}
                  </Typography>
                </section>
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
      </section>
      <section className={cardSec}>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <section
                style={{ backgroundColor: reliableColor }}
                className={reliableSub}
              >
                <img
                  alt="icon"
                  style={{ filter: IconFill }}
                  className={Icons}
                  src={reliableIcon}
                />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                    {reliableTitle}
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    {reliableParagraph}
                  </Typography>
                </section>
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
      </section>
      <section className={cardSec}>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <section
                style={{ backgroundColor: innovativeColor }}
                className={innovativeSub}
              >
                <img
                  alt="icon"
                  style={{ filter: IconFill }}
                  className={Icons}
                  src={innovativeIcon}
                />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                    {innovativeTitle}
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    {innovativeParagraph}
                  </Typography>
                </section>
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
      </section>
      <section className={cardSec}>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <section
                style={{ backgroundColor: agileColor }}
                className={agileSub}
              >
                <img
                  alt="icon"
                  style={{ filter: IconFill }}
                  className={Icons}
                  src={agileIcon}
                />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                    {agileTitle}
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    {agileParagraph}
                  </Typography>
                </section>
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
      </section>
      <section className={cardSec}>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <section
                style={{ backgroundColor: transparencyColor }}
                className={transparencySub}
              >
                <img
                  alt="icon"
                  style={{ filter: IconFill }}
                  className={Icons}
                  src={transparencyIcon}
                />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                    {transparencyTitle}
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    {transparencyParagraph}
                  </Typography>
                </section>
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
      </section>
      <section className={cardSec}>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <section
                style={{ backgroundColor: moneyColor }}
                className={moneySub}
              >
                <img
                  alt="icon"
                  style={{ filter: IconFill }}
                  className={Icons}
                  src={moneyIcon}
                />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                    {moneyTitle}
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    {moneyParagraph}
                  </Typography>
                </section>
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default PrimarySection;
