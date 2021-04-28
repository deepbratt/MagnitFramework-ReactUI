import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../Theme/color.constants";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const { mustardColor } = Colors;
const breakpoints = createBreakpoints({});
export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "100px",
    width: "100%",
    padding: "0px",
    overflow: "hidden",
  },
  cardSec: {
    padding: "0px",
    margin: "0px",
    display: "flex",
    [breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
    textAlign: "left",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  paragraph: {
    width: "600px",
    [breakpoints.only("md")]: {
      width: "500px",
    },
    [breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  Img: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 4,
      zIndex: -1,
      left: 0,
      borderRadius: "10px",
      width: "620px",
      height: "5rem",
      display: "block",
      backgroundColor: mustardColor,
      [breakpoints.only("md")]: {
        width: "480px",
      },
      [breakpoints.only("sm")]: {
        width: "450px",
        height: "3rem",
      },
      [breakpoints.down("xs")]: {
        width: "340px",
        height: "3rem",
      },
    },
  },
  Ellipse: {
    position: "absolute",
    top: "50%",
    left: "0px",
    [breakpoints.only("md")]: {
      width: "60px",
    },
    [breakpoints.only("xs")]: {
      width: "40px",
    },
    [breakpoints.only("sm")]: {
      width: "50px",
    },
  },
  Ellipse2: {
    position: "absolute",
    right: "0px",
    bottom: "0%",
    [breakpoints.down("sm")]: {
      width: "80px",
    },
  },
  hero: {
    [breakpoints.up("lg")]: {
      width: "600px",
    },
    [breakpoints.only("md")]: {
      width: "480px",
    },
    [breakpoints.only("sm")]: {
      width: "450px",
    },
    [breakpoints.down("xs")]: {
      width: "350px",
    },
  },
}));
