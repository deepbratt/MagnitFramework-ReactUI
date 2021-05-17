import React from "react";
import { Grid, Paper, Card, CardContent } from "@material-ui/core";
import Paragraph from "../../../ContainerStructure/Headings/Paragraphs/Paragraph";
import Heading4 from "../../../ContainerStructure/Headings/Heading4";
import { useStyles } from "./factsStyle";
import {
  FactsData,
  factsHeading,
} from "../../../Utils/Constants/Language/en/AppSolutionsData";
const FactsContainer = () => {
  const { card, root, para, cardContent, Avatar } = useStyles();
  return (
    <>
      <Paper className={root} elevation={0}>
        <Grid direction="row" container>
          <Grid className={card} item lg={12} xs={12}>
            <Heading4 title={factsHeading} />
          </Grid>
          {FactsData.map((data, index) => {
            return (
              <Grid
                key={index}
                style={{ margin: "0 4.1%" }}
                item
                lg={5}
                xs={10}
              >
                <Card>
                  <CardContent className={cardContent}>
                    <img
                      className={Avatar}
                      height="50px"
                      src={data.avatar}
                      alt="Icon"
                    />
                    <section className={para}>
                      <Paragraph para={data.desc} />
                    </section>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </>
  );
};

export default FactsContainer;
