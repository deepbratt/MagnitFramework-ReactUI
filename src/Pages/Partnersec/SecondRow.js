import React from "react";
import { useStyles, THEME } from "./rowStyles";
import { Typography, Card, CardContent } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import * as icons from "../../Components/icons/icon.constants";

const SecondRow = () => {
  const classes = useStyles();
  const {
    cardSec,
    card,
    devSec,
    quality,
    devSub,
    content,
    support,
    supportSub,
    innovativeSub,
    geeky,
    time,
    timeSub,
    data,
    dataSub,
    iso,
  } = classes;
  const {
    qualityIcon,
    supportIcon,
    geekyIcon,
    timeIcon,
    dataIcon,
    isoIcon,
  } = icons;
  return (
    <>
      <section className={cardSec}>
        <Card className={card}>
          <CardContent>
            <section className={devSec}>
              <section className={devSub}>
                <img alt="icon" className={quality} src={qualityIcon} />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                  Quality
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                  100% Quality standards and Client satisfaction are what we assure 
                  and ensure when we deliver. We strive to
                   improve our people and processes continuously.
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
              <section className={supportSub}>
                <img alt="icon" className={support} src={supportIcon} />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                  Life-Time Support
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                  We offer Free Life-Time Support post project delivery. 
                  This includes fixing bugs,
                   resolving issues and training on the system.
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
                <img alt="icon" className={geeky} src={geekyIcon} />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                  Geeky
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                  Our talent pool is full of geeks.
                   We can assure that your project is not with just highly skilled resources, 
                   but tech lovers who love to innovate.
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
              <section className={timeSub}>
                <img alt="icon" className={time} src={timeIcon} />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                  Always On Time
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                  On-Time Delivery is one of our key focus areas. 
                  We always follow a proactive approach to identify 
                  and mitigate issues which can impede the process.
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
              <section className={dataSub}>
                <img
                  alt="icon"
                  className={data}
                  src={dataIcon}
                />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                  Data Security
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                  Protecting confidential information of our clients is our top priority. 
                  We keep updated with latest data security 
                  best practices, compliance, and regulations.
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
              <section className={dataSub}>
                <img alt="icon" className={iso} src={isoIcon} />
              </section>
              <MuiThemeProvider theme={THEME}>
                <section className={content}>
                  <Typography variant="h5" color="inherit">
                  ISO Certified
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                  We are an ISO 9001:2015 certified company.
                   We have a sturdy Quality Management System and
                    we follow a process oriented approach to deliver.
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

export default SecondRow;
