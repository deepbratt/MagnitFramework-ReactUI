import React from "react";
import { useStyles } from "../useStyles";
import { missionStyles } from "./useStyles";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import Paragraph from "../../../ContainerStructure/Headings/Paragraphs/Paragraph";
import CustomImage from "../../../Components/CustomImage";
import CustomTitle from "../../../Pages/Section/CustomTitle";
import useLoop from "./useLoop";

const HowItWorksContext = ({ data, text, alt }) => {
  const { cardSec } = useStyles();
  const { margin, color } = useLoop();
  const { card2, root, devSec, image } = missionStyles();

  var colorObj = { color: color },
    marginObj = { margin: margin },
    result = data.map((payload) =>
      Object.assign({}, payload, colorObj, marginObj)
    );

  return (
    <>
      <Grid container className={root}>
        <Grid item lg={12} md={12} xs={12}>
          <CustomTitle underlined={true} text={text} />
        </Grid>
        <Grid item style={{ paddingBottom: "20px" }} className={cardSec}>
          {result.map((data, index) => {
            return (
              <>
                <Card
                  style={{ marginTop: data.margin[index] }}
                  className={card2}
                  key={`stairCase ${index}`}
                >
                  <CardContent style={{ padding: "0px" }}>
                    <Grid item className={image}>
                      <CustomImage src={data.image} alt={alt}/>
                    </Grid>
                    <CardContent
                      style={{
                        border: `solid ${data.color[index]}`,
                        borderWidth: "30px 0px 0px 30px",
                      }}
                      className={devSec}
                    >
                      <Typography variant="h5">{data.title}</Typography>
                      <Paragraph para={data.text} />
                    </CardContent>
                  </CardContent>
                </Card>
              </>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default HowItWorksContext;
