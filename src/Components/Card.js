import React from "react";
import {
  useStyles,
  THEME,
} from "../Pages/Section/Header/ServicesContext/servicesStyles";
import { Typography, Card, CardContent } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CustomImage from "./CustomImage";
const CardData = ({ data }) => {
  const classes = useStyles();
  const { card, devSec, devSub } = classes;
//   Use this Card for Services Section pass data from its Parent Contanier to here
  return (
    <>
      {data.map((text, index) => {
        return (
          <Card key={index} className={card}>
            <CardContent>
              <section className={devSec}>
                <section
                  style={{ backgroundColor: text.color }}
                  className={devSub}
                >
                  <CustomImage
                    alt="icon"
                    src={text.icon}
                    style={{ filter: text.fill }}
                  />
                </section>
              </section>
              <section>
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5" color="inherit">
                    {text.title}
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    {text.desc}
                  </Typography>
                </MuiThemeProvider>
              </section>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default CardData;
