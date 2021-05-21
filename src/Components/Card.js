import React from "react";
import {
  useStyles,
} from "../Sections/HomePageSections/ServicesContext/servicesStyles";
import { Typography, Card, CardContent, Grid } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CustomImage from "./CustomImage";
import {THEME} from "../ContainerStructure/Headings/headingStyles"
const CardData = ({ data }) => {
  const classes = useStyles();
  const { card, devSec, devSub } = classes;
//   Use this Card for Services Section pass data from its Parent Contanier to here
  return (
    <Grid container justify={"space-between"}>
      {data.map((text, index) => {
        return (
          <Grid item xs={12} sm={12} md={6} lg={3} key={index} className={card}>
            <CardContent>
              <section className={devSec}>
                <section
                  style={{ backgroundColor: text.color }}
                  className={devSub} >
                  <CustomImage
                    alt="icon"
                    src={text.icon}
                    style={{ filter: text.fill }}
                    />
                </section>
              </section>
              <section>
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5" >
                    {text.title}
                  </Typography>
                  <Typography paragraph={true} >
                    {text.desc}
                  </Typography>
                </MuiThemeProvider>
              </section>
            </CardContent>
          </Grid>
        );
      })}
     
    </Grid>
  );
};

export default CardData;
