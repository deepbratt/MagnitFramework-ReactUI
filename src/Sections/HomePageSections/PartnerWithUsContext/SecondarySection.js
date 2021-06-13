import React from "react";
import { useStyles } from "./useStyles";
import { Typography, Grid } from "@material-ui/core";
import { Colors } from "../../../Theme/color.constants";
import CustomImage from "../../../Components/CustomImage";
const { Mirage } = Colors;
const SecondarySection = (props) => {
  const data = props.data;

  const classes = useStyles();
  const { cardSec, supportSub, para ,grid} = classes;

  return (
    <>
      {data.map((text, index) => {
        return (
          <Grid item className={cardSec}>
            <Grid key={index+"secondarysection"} container>
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                className={grid}
                item
                xs={12}
                lg={3}
                sm={12}
              >
                <Grid
                  item
                  style={{ backgroundColor: text.color }}
                  className={supportSub}
                >
                  <CustomImage alt="icon" src={text.icon} />
                </Grid>
              </Grid>
                <Grid className={para} item xs={12} lg={9} >
                  <Typography variant="h5">{text.title}</Typography>
                  <Typography paragraph={true} style={{ color: Mirage }}>
                    {text.desc}
                  </Typography>
                </Grid>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default SecondarySection;
