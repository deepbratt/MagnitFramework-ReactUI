import React from "react";
import { useStyles, THEME } from "../PartnerWithUsContext/sectionStyles";
import { SolutionsStyles } from "./SolutionsStyles";
import { Typography, Card, CardContent } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";

const FeaturesRow = (props) => {
  const data = props.data;

  const { cardSec, devSec, content, para } = useStyles();
  const { card, supportSub } = SolutionsStyles();

  return (
    <>
      {data.map((text, index) => {
        return (
          <section className={cardSec}>
            <Card className={card}>
              <CardContent key={index} className={content}>
                <section className={devSec}>
                  <section
                    style={{ backgroundColor: text.color }}
                    className={supportSub}
                  >
                    <img alt="icon" src={text.icon} />
                  </section>
                </section>
                <MuiThemeProvider theme={THEME}>
                  <section className={para}>
                    <Typography variant="h5" color="inherit">
                      {text.title}
                    </Typography>
                    <Typography paragraph={true} color="inherit">
                      {text.desc}
                    </Typography>
                  </section>
                </MuiThemeProvider>
              </CardContent>
            </Card>
          </section>
        );
      })}
    </>
  );
};

export default FeaturesRow;
