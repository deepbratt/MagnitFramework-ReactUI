import React from "react";
import { useStyles } from "./weOfferStyles";
import { Grid, Typography } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
import CustomButton from "../../Components/CustomButton/index";
import CustomImage from "../../Components/CustomImage";

const WeOfferContext = ({ data }) => {
  const classes = useStyles();
  const { root, cardSec, card, devSec } = classes;
  const { DoveGray } = Colors;
  return (
    <>
      <Grid container className={root}>
        <Grid item lg={12} md={12} xs={12}>
          <Typography color="textPrimary" variant="h2">
            {data.title}
          </Typography>
          <Typography variant="h6">{data.subtitle}</Typography>
        </Grid>
        <Grid item className={cardSec}>
          {data.values &&
            data.values.map((data, index) => {
              return (
                <Grid item key={index+"whatweoffercontext"} lg={3} md={5} sm={12} className={card}>
                  <Grid item>
                    <Grid item className={devSec}>
                      <Grid item>
                        <CustomImage
                          alt="imageIcon"
                          width="50px"
                          src={data.Icon}
                        />
                        <Typography variant="h5">{data.title}</Typography>

                        <Grid
                          item
                          style={{ color: DoveGray, paddingTop: "10px" }}
                        >
                          <Typography variant="body1">
                            {data.paragraph}
                          </Typography>
                        </Grid>
                        <CustomButton>Learn More</CustomButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </>
  );
};

export default WeOfferContext;
