import React from "react";
import { useStyles } from "../NumberContext/numberStyles";
import { FoundersyStyles } from "./foundersyStyles";
import Heading5 from "../../../ContainerStructure/Headings/Heading5";
import Heading6 from "../../../ContainerStructure/Headings/Heading6";
import {
  Card,
  CardContent,
  Paper,
  Typography,
  Hidden,
} from "@material-ui/core";
import Paragraph from "../../../ContainerStructure/Headings/Paragraphs/Paragraph";
import { MainData } from "../../../Utils/Constants/Language/AboutUsData";
import { THEME } from "../../../ContainerStructure/Headings/headingStyles";
import { MuiThemeProvider } from "@material-ui/core/styles";

const FoundersySection = () => {
  const { cardSec, devSec } = useStyles();
  const { card, root, Icon, underlined, dev } = FoundersyStyles();
  const { Img, subTitle, span, paragraph, heading } = MainData;

  return (
    <>
      <Paper className={root} elevation={0}>
        <MuiThemeProvider theme={THEME}>
          <Typography variant="h4" color="inherit">
            <span className={underlined}>{heading}</span>
          </Typography>
        </MuiThemeProvider>
        <section style={{ paddingBottom: "20px" }} className={cardSec}>
          <Hidden lgUp>
            <Card className={card}>
              <CardContent>
                <section className={devSec}>
                  <img className={Icon} src={Img} alt="Icon" />
                  <section className={dev}>
                    <Heading6 title={subTitle} />
                    <Heading5 subTitle={span} />
                  </section>
                  <Paragraph para={paragraph} />
                </section>
              </CardContent>
            </Card>
          </Hidden>
          <Hidden mdDown>
            <Card className={card}>
              <CardContent>
                <section className={devSec}>
                  <img className={Icon} src={Img} alt="Icon" />
                  <section className={dev}>
                    <Heading6 title={subTitle} />
                    <Heading5 subTitle={span} />
                  </section>
                  <Paragraph para={paragraph} />
                </section>
              </CardContent>
            </Card>
            <Card className={card}>
              <CardContent>
                <section className={devSec}>
                  <img className={Icon} src={Img} alt="Icon" />
                  <section className={dev}>
                    <Heading6 title={subTitle} />
                    <Heading5 subTitle={span} />
                  </section>
                  <Paragraph para={paragraph} />
                </section>
              </CardContent>
            </Card>
            <Card className={card}>
              <CardContent>
                <section className={devSec}>
                  <img className={Icon} src={Img} alt="Icon" />
                  <section className={dev}>
                    <Heading6 title={subTitle} />
                    <Heading5 subTitle={span} />
                  </section>
                  <Paragraph para={paragraph} />
                </section>
              </CardContent>
            </Card>
          </Hidden>
        </section>
      </Paper>
    </>
  );
};

export default FoundersySection;
