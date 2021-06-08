import React from "react";
import { useStyles } from "./solutionStyles";
import { Typography, Grid, Card } from "@material-ui/core";
import { Colors } from "../../../Theme/color.constants";
import CustomButton from "../../../Components/CustomButton";
import CustomTitle from "../../../Pages/Section/CustomTitle";
import CustomImage from "../../../Components/CustomImage";

const Solutions = ({ titles, content }) => {
  const classes = useStyles();
  const { card } = classes;

  const { whiteColor } = Colors;
  return (
    <>
      <Grid container>
        <Grid style={{ color: whiteColor }} item lg={12} md={12} xs={12}>
          <CustomTitle
            style={{ marginBottom: "20px" }}
            underlined={false}
            subTitle={titles.subHeading}
            color={whiteColor}
            text={titles.heading}
            subTitleColor={whiteColor}
          />
        </Grid>
        <Grid style={{ marginBottom: "20px" }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {content &&
                content.map((data, index) => (
                  <Grid key={index+"solutionscontent"} item xs={12} sm={6} md={3}>
                    <Card className={card}>
                      <CustomImage width="60px" alt="" src={data.image} />

                      <div>
                        <Typography color="textSecondary" variant="h5">
                          {data.title}
                        </Typography>
                      </div>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <CustomButton color="secondary">See More</CustomButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Solutions;
