import { Typography } from "@material-ui/core";
import React from "react";
import { ReactComponent as CircleImage } from "../../assets/CaseStudies/circleImg.svg";
import useStyles from "./useStyles";

const CircleImageComponent = ({ innerImg, props }) => {
  const classes = useStyles();
  return (
    <span className={classes.svgElementWrapper}>
      <CircleImage {...props} className={classes.svgElementBg} />
      <span className={classes.svgElement}>{innerImg}</span>
    </span>
  );
};

export default CircleImageComponent;
