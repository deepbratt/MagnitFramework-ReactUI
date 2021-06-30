import React from "react";
import { Grid, Typography } from "@material-ui/core";
import vector from "../../assets/services/vector.png";
import OptionTabStyles from "./style";
import CustomButton from "../CustomButton";
import { Link } from "react-router-dom";

// import dataText, { FullTimeHiring, HiringOption } from './constant';
export const TabText = ({
  payload,
  heading,
  text,
  buttonLink,
  buttonLabel,
}) => {
  const { detail, bulletText, textDiv } = OptionTabStyles();
  return (
    <Grid style={{ textAlign: "left" }}>
      <Typography variant="h2">{heading}</Typography>
      <Typography variant="button" className={detail} color="initial">
        {text}
      </Typography>

      {payload.map((a, index) => {
        return (
          <Grid key={index} item xs={12} className={textDiv} key={a.id}>
            <Grid>
              <img
                src={vector}
                alt={vector}
                style={{ marginRight: ".4rem", width: "19px", height: "19px" }}
              />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="button" className={bulletText}>
                {a}
              </Typography>
            </Grid>
          </Grid>
        );
      })}
      <span style={{ textTransform: "initial" }}>
        <CustomButton component={Link} to={buttonLink}>
          {buttonLabel}
        </CustomButton>
      </span>
    </Grid>
  );
};
