import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../Theme/color.constants";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const { darkSilver, Harlequin, mainSlide,Mirage } = Colors;
const breakpoints = createBreakpoints({});
export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    width: "100vw",
  },
  card: {
    backgroundImage: `linear-gradient(${mainSlide},white)`,
    position: "relative",
  },
  breadCrumbStyles: {
    position: "absolute",
    top: "20px",
    left: "50px",
  },
  cardSec: {
    padding: "0px",
    marginBottom: "30px",
    margin: "0",
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
    // marginBottom: "50px",
    marginTop: "20px",
    color: darkSilver,
    [breakpoints.only("md")]: {
      width: "500px",
    },
    [breakpoints.down("xs")]: {
      width: "300px",
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
      color:Mirage,
      backgroundColor: Harlequin,
      bottom: "5px",
      [breakpoints.down("sm")]: {
        height: "11px",
        width: "30px",
      },
    },
  },
  textUnderlined: {
    position: "relative",
    zIndex: 1,
    marginLeft: "10px",
    "&:after ": {
      position: "absolute",
      height: "17px",
      content: '""',
      zIndex: -1,
      width: "100px",
      right: 0,
      backgroundColor: Harlequin,
      bottom: "5px",
      [breakpoints.down("sm")]: {
        height: "11px",
        width: "70px",
      },
    },
  },
}));
