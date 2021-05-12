import React from "react";
import { Grid, Typography } from "@material-ui/core";
import vector from "../../assets/services/vector.png";
import CustomButton from "../CustomButton";
import OptionTabStyles from "./style";
import dataText from "./data";
export const TabText = () => {
  const { detail, bulletText, textDiv, buttonStyle } = OptionTabStyles();
  return (
    <Grid style={{ textAlign: "left" }}>
      <Typography variant="h6" color="initial">
        Full Time Hiring
      </Typography>
      <Typography className={detail} color="initial">
        Under this hiring option, the Web Developer will become a part of your
        team on a full-time basis. He/She will be working as a virtual employee
        for you from the development center in India. The developer will be
        exclusively working for you. Here is how it works:
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
              <Typography className={bulletText}>{a.text}</Typography>
            </Grid>
          </Grid>
        );
      })}
      <CustomButton
        styles={buttonStyle}
        variant="contained"
        size="small"
        text=" Get a Risk Free Trial (Start your trial in 24 hours!)"
      />
    </Grid>
  );
};
