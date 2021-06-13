import { Card, Grid, CardContent, Typography } from "@material-ui/core";
import React from "react";
import EventHead from "./EventHead/index";
import people from "../../assets/Event/people.png";

import EventStyles from "./eventStyles";
import Heading from "../../ContainerStructure/Headings/Heading4";
import Paragraph from "../../ContainerStructure/Headings/Paragraphs/Paragraph";
import Activity from "./EventCard/Index";
import activities from "../../Utils/Constants/Language/en/EventActivites";

import Section from "../Section";
import CustomButton from "../../Components/CustomButton";
const Event = () => {
  const { root, cardSec, underlined, paragraph, cardRoot, seeMore } =
    EventStyles();
  return (
    <div>
      <Grid item xs={12}>
        <EventHead image={people} />
      </Grid>
      <Grid item xs={12} className={root}>
        <Card>
          <CardContent className={cardSec}>
            <section className={underlined}>
              <Heading title="Event" />
            </section>
            <section className={paragraph}>
              <Paragraph para="Activities, Celebrations, and more." />
            </section>
          </CardContent>
        </Card>
        <Section>
          <Grid item xs={12} container justify="center" className={cardRoot}>
            {activities.map((a,index) => {
              return (
                <Grid item xs={12} md={4} key={a.id+"-"+index}>
                  <Activity Img={a.Img} title={a.name} detail={a.para} />
                </Grid>
              );
            })}
          </Grid>
        </Section>
        <Grid container alignItems="center" justify="center">
          <CustomButton type="submit">
            <Typography className={seeMore} variant="button">
              See More
            </Typography>
          </CustomButton>
        </Grid>
      </Grid>
    </div>
  );
};
export default Event;
