import React from "react";
import {
  useStyles,
} from "../Sections/HomePageSections/ServicesContext/servicesStyles";
import { Typography, Card, CardContent, Grid } from "@material-ui/core";
import CustomImage from "./CustomImage";

const CardData = ({ data }) => {
  const classes = useStyles();
  const { card, devSec, devSub ,contentRight} = classes;
//   Use this Card for Services Section pass data from its Parent Contanier to here
  return (
    <>
      <Grid container justify={"space-between"}>
      {data.map((text, index) => {
        return (
          <Grid item xs={12} sm={12} md={6} lg={3}  key={index} className={card}>
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
      </Grid>
    </>
  );
};

export default CardData;
