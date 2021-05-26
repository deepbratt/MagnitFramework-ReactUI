import React from "react";
import { useStyles } from "../Sections/HomePageSections/ServicesContext/servicesStyles";
import { Typography, Card, CardContent, Grid, Box } from "@material-ui/core";
import CustomImage from "./CustomImage";
import ReadMore from "./ReadMore"
import { NavLink } from "react-router-dom";

const CardData = ({ data }) => {
  const classes = useStyles();
  const { card, devSec, devSub, contentRight } = classes;
  //   Use this Card for Services Section pass data from its Parent Contanier to here
  return (
    <>
      <Grid container justify={"space-between"}>
        {data.map((text, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={3}
              key={index}
              className={card}
            >
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
                <Grid className={contentRight}>
                  <Typography
                    color="textPrimary"
                    variant="subtitle1"
                    gutterBottom
                  >
                    {text.title}
                  </Typography>

                  <Typography variant="subtitle2" paragraph={true}>
                  <ReadMore text={text.desc} maxLines={3} />
                    <NavLink to={text.redirect} style={{ marginLeft: "10px", textDecoration: "none" }}>
                      Learn More 
                    </NavLink>
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
