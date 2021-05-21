import React from "react";
import { useStyles } from "../useStyles";
import { missionStyles } from "./useStyles";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import Paragraph from "../../../ContainerStructure/Headings/Paragraphs/Paragraph";
import Heading5 from "../../../ContainerStructure/Headings/Heading5";
import {
  StairCaseData,
  stairCaseHeading,
} from "../../../Utils/Constants/Language/en/AppSolutionsData";
import CustomImage from "../../../Components/CustomImage";
const HowItWorksContext = () => {
  const { cardSec , underlined} = useStyles();
  const { card2, root, devSec, image,  } = missionStyles();
  return (
    <>

      <Grid container className={root}>
    <Grid lg={12} md={12} xs={12}>
      <Typography variant="h2">
       <span className={underlined} >{stairCaseHeading}</span> 
      </Typography>
    </Grid>
        <Grid item style={{ paddingBottom: "20px" }} className={cardSec}>
          {StairCaseData.map((data, index) => {
            return (
              <Card style={{ marginTop: data.margin ,}} className={card2}>
                <CardContent style={{ padding: "0px" }}>
                  <Grid item className={image}>
                    <CustomImage src={data.img} alt="image" />
                  </Grid>
                  <CardContent
                    style={{
                      border: `solid ${data.color}`,
                      borderWidth: "30px 0px 0px 30px",
                    }}
                    className={devSec}
                  >
                    <Typography variant="h5">
                    {data.title}
                    </Typography>
                    <Paragraph para={data.desc} />
                  </CardContent>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default HowItWorksContext;
