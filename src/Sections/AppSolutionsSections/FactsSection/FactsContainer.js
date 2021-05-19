import React from "react";
import { Grid, Paper, Card, CardContent } from "@material-ui/core";
import Paragraph from "../../../ContainerStructure/Headings/Paragraphs/Paragraph";
import Heading4 from "../../../ContainerStructure/Headings/Heading4";
import { useStyles } from "./factsStyle";
import {
  FactsData,
  factsHeading,
} from "../../../Utils/Constants/Language/en/AppSolutionsData";
import CustomImage from "../../../Components/CustomImage"
const FactsContainer = () => {
  const { card, root, para, cardContent, Avatar } = useStyles();
  return (
    <>
      <Grid container className={root} elevation={0}>
        <Grid justify="center" direction="row" container>
          <Grid className={card} item lg={12} xs={12}>
            <Heading4 title={factsHeading} />
          </Grid>
          {FactsData.map((data, index) => {
            return (
              <Grid
                key={index}
                style={{ margin: "0 2.1%" }}
                item
                lg={4}
                xs={12}
              >
                <Card>
                  <CardContent className={cardContent}>
                    <CustomImage
                      className={Avatar}
                      height="45px"
                      src={data.avatar}
                      alt="Icon"
                    />
                    <Grid item className={para}>
                      <Paragraph para={data.desc} />
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default FactsContainer;
