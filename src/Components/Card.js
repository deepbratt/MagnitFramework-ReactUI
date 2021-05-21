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
  const { card, devSec, devSub ,contentRight} = classes;
//   Use this Card for Services Section pass data from its Parent Contanier to here
  return (
    <>
    
      {data.map((text, index) => {
        return (
          <Grid xs={12} sm={6} md={4} lg={3}  key={index} className={card}>
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
              <Grid className={contentRight}>
        <Typography variant="subtitle1" component="subtitle1" gutterBottom>
        {text.title}
        </Typography>
        <Typography variant="subtitle2" component="subtitle2" paragraph={true}>
        {text.desc}
        </Typography>
      </Grid>
            </CardContent>
          </Grid>
        );
      })}
     
    </>
  );
};

export default CardData;
