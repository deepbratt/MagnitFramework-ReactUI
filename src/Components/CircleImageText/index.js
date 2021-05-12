import { Typography } from "@material-ui/core";
import React from "react";
import { ReactComponent as CircleImage } from "../../assets/CaseStudies/circleImg.svg";
import CircleImageComponent from "./CircleImage";
import useStyles from "./useStyles";

const CircleImageText = ({ text, textRight=false, innerImg, props }) => {
  const classes = useStyles();
  return (
    <span className={classes.wrapper}>
      {textRight && <CircleImageComponent innerImg={innerImg} {...props} />}
      <Typography
        variant="h5"
        component="p"
        className={textRight ? classes.textStylesRight : classes.textStylesLeft}
        paragraph
      >
        {text}
      </Typography>
      {!textRight && <CircleImageComponent innerImg={innerImg} {...props} />}
    </span>
  );
};

export default CircleImageText;
