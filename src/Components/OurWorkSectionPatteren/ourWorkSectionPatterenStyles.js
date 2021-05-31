import { makeStyles } from "@material-ui/core";

export const OurWorkPatternStyles = makeStyles(() => ({
  leftPattern: {
    position: "absolute",
    left: "-5%",
    bottom: "-10%",
    zIndex: 0,
  },
  rightPattern: {
    position: "absolute",
    right: "-10%",
    top: "-10%",
  },
}));