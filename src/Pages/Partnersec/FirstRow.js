import React from "react";
import { useStyles, THEME } from "./rowStyles";
import { Typography, Card, CardContent } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import * as icons from "../../Components/icons/icon.constants";

const FirstRow = () => {
  const classes = useStyles();
  const {
    cardSec,
    card,
    devSec,
    app,
    devSub,
    content,
    reliable,
    reliableSub,
    innovativeSub,
    innovative,
    agile,
    agileSub,
    transparency,
    transparencySub,
    money,
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
  return (
    <>
      <section className={cardSec}>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <section className={devSub}>
                <img alt="icon" className={app} src={appIcon} />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                    App Development
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    Our Web Technology, Mobile Technology, and Digital Marketing
                    resources work under the same roof, so you don’t need to
                    depend on multiple companies.
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
              <section className={reliableSub}>
                <img alt="icon" className={reliable} src={reliableIcon} />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                    Reliable
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    We have the trust of more than 2,000 businesses globally.
                    You can rely on us to get your work done the right way at
                    the right time.
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
              <section className={innovativeSub}>
                <img alt="icon" className={innovative} src={innovativeIcon} />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                    Innovative
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    Our focus is not just to deliver, but to innovate, implement
                    new ideas and technologies and help you succeed in growing
                    your business.
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
              <section className={agileSub}>
                <img alt="icon" className={agile} src={agileIcon} />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                    Agile
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    We believe in the agile approach to delivering your project.
                    We advocate adaptive planning, evolutionary development, and
                    continuous improvement.
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
              <section className={transparencySub}>
                <img
                  alt="icon"
                  className={transparency}
                  src={transparencyIcon}
                />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                    Transparency
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    We maintain complete transparency in rendering services and
                    solutions with regular communication, user testing option
                    for clients, and review meetings.
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
              <section className={moneySub}>
                <img alt="icon" className={money} src={moneyIcon} />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                    Value For Money
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    With an effective cost and benefit analysis, we ensure the
                    best value for money in terms of the services and solutions
                    we offer our clients.
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

export default FirstRow;
