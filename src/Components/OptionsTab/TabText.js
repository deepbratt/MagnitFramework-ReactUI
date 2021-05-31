import React from "react";
import { Grid, Typography } from "@material-ui/core";
import vector from "../../assets/services/vector.png";
import OptionTabStyles from "./style";
import CustomButton from "../CustomButton";
import { Link } from "react-router-dom";

// import dataText, { FullTimeHiring, HiringOption } from './constant';
export const TabText = ({ data }) => {
  const { title, desc, dataText } = data;
  const { detail, bulletText, textDiv } = OptionTabStyles();
  return (
    <Grid style={{ textAlign: "left" }}>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="button" className={detail} color="initial">
        {desc}
      </Typography>

      {dataText.map((a) => {
        return (
          <Grid xs={12} className={textDiv} key={a.id}>
            <Grid>
              <img
                src={vector}
                alt={vector}
                style={{ marginRight: ".4rem", width: "19px", height: "19px" }}
              />
            </Grid>
            <Grid xs={11}>
              <Typography variant="button" className={bulletText}>
                {a.text}
              </Typography>
            </Grid>
          </Grid>
        );
      })}
      <span style={{ textTransform: "initial" }}>
        <CustomButton component={Link} to="/request-a-quote">
          Get a Risk Free Trial (Start your trial in 24 hours!)
        </CustomButton>
      </span>
    </Grid>
  );
};
