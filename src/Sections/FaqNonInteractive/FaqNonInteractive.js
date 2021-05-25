import { Grid, Typography } from "@material-ui/core";
import useStyles from './useStyles'
import React from "react";

const FaqNonInteractive = (props) => {
    const classes = useStyles()
  return (
    <Grid container className={props.toRight ? classes.rightAlignment :classes.leftAlignment}>
      <Typography variant="h3" color="textPrimary" style={{marginBottom:"20px"}}>
        {props.question}
      </Typography>
      <Typography variant="body1">
       {props.answer}
      </Typography>
    </Grid>
  );
};

export default FaqNonInteractive;
