import { Typography } from "@material-ui/core";
import React from "react";
import { ReactComponent as CircleImage } from "../../assets/CaseStudies/circleImg.svg";
import CircleImageComponent from "./CircleImage";
import useStyles from "./useStyles";

const CircleImageText = ({ text, textRight=false, innerImg, clickHandler,props }) => {
  const classes = useStyles();
  return (
    <span className={classes.wrapper} onClick={clickHandler}>
      {textRight && <CircleImageComponent innerImg={innerImg} {...props} />}
      <Typography
        variant="subtitle1"
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
