import { Grid, Typography } from "@material-ui/core";
import useStyles from './useStyles'
import React from "react";

const FaqNonInteractive = (props) => {
    const classes = useStyles()
  return (
    <Grid container className={props.toRight ? classes.rightAlignment :classes.leftAlignment}>
      <Typography variant="h4" component="h4">
        {props.question}
      </Typography>
      <Typography component="p" variant="body2">
       {props.answer}
      </Typography>
    </Grid>
  );
};

export default FaqNonInteractive;
