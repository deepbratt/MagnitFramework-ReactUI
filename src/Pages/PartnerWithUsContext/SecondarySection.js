import React from "react";
import { useStyles, THEME } from "./sectionStyles";
import { Typography, Card, CardContent } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import * as icons from "../../assets/icons/icon.constants";
import {SecondaryData } from "../../Utils/Constants/Language/en/PartnerWithUsData";

const SecondarySection = ({
  qualityColor,
  dataColor,
  timeColor,
  supportColor,
  geekyColor,
  IconFill
}) => {
  const classes = useStyles();
  const {
    cardSec,
    card,
    devSec,
    Icons,
    devSub,
    content,
    supportSub,
    innovativeSub,
    timeSub,
    dataSub,
  } = classes;
  const {
    qualityIcon,
    supportIcon,
    geekyIcon,
    timeIcon,
    dataIcon,
    isoIcon,
  } = icons;
  const {
    qualityTitle,
    qualityParagraph,
    geekyTitle,
    geekyParagraph,
    timeTitle,
    timeParagraph,
    dataTitle,
    dataParagraph,
    isoTitle,
    isoParagraph,
    supportTitle,
    supportParagraph,
  } = SecondaryData;
  return (
    <>
      <section className={cardSec}>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <section
                style={{ backgroundColor: qualityColor }}
                className={devSub}
              >
                <img
                  style={{ filter: IconFill }}
                  alt="icon"
                  className={Icons}
                  src={qualityIcon}
                />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                    {qualityTitle}
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    {qualityParagraph}
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
                style={{ backgroundColor: supportColor }}
                className={supportSub}
              >
                <img
                  style={{ filter: IconFill }}
                  alt="icon"
                  className={Icons}
                  src={supportIcon}
                />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                    {supportTitle}
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    {supportParagraph}
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
                style={{ backgroundColor: geekyColor }}
                className={innovativeSub}
              >
                <img
                  style={{ filter: IconFill }}
                  alt="icon"
                  className={Icons}
                  src={geekyIcon}
                />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                    {geekyTitle}
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    {geekyParagraph}
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
                style={{ backgroundColor: timeColor }}
                className={timeSub}
              >
                <img
                  style={{ filter: IconFill }}
                  alt="icon"
                  className={Icons}
                  src={timeIcon}
                />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                    {timeTitle}
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    {timeParagraph}
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
                style={{ backgroundColor: dataColor }}
                className={dataSub}
              >
                <img
                  style={{ filter: IconFill }}
                  alt="icon"
                  className={Icons}
                  src={dataIcon}
                />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                    {dataTitle}
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    {dataParagraph}
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
                style={{ backgroundColor: supportColor }}
                className={dataSub}
              >
                <img
                  style={{ filter: IconFill }}
                  alt="icon"
                  className={Icons}
                  src={isoIcon}
                />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                    {isoTitle}
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    {isoParagraph}
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

export default SecondarySection;
