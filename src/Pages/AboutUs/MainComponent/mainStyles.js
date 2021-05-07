import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../Theme/color.constants";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const { Luigi, Harlequin } = Colors;
const breakpoints = createBreakpoints({});
export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "76px",
    width: "100%",
    padding: "0px",
    overflow: "hidden",
  },
  card: {
    backgroundImage: "linear-gradient(rgb(44,212,0,0.4),white)",
  },
  cardSec: {
    padding: "0px",
    marginBottom: "30px",
    margin: "0px",
    display: "flex",
    flexDirection: "column",
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
    width: "80%",
    marginBottom: "50px",
    marginTop: "20px",
    color: "#717171",
    [breakpoints.only("md")]: {
      width: "500px",
    },
    [breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  Img: {
    borderRadius: "70%",
    marginTop: "60px",
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
      width: "560px",
      height: "5rem",
      display: "block",
      backgroundColor: Luigi,
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
      width: "550px",
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
  vector: {
    position: "absolute",
    zIndex: -1,
    width: "400px",
    right: "15%",
    bottom: "0px",
    [breakpoints.down("md")]: {
      width: "350px",
    },
    [breakpoints.down("sm")]: {
      width: "300px",
    },
    [breakpoints.down("xs")]: {
      width: "250px",
    },
  },
  underlined: {
    position: "relative",
    zIndex: 1,
    marginLeft: "10px",
    "&:after ": {
      position: "absolute",
      height: "17px",
      content: '""',
      zIndex: -1,
      width: "49px",
      right: 0,
      backgroundColor: Harlequin,
      bottom: "5px",
      [breakpoints.down("sm")]: {
        height: "11px",
        width: "30px",
      },
    },
  },
}));
