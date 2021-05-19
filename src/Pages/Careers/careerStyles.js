import { makeStyles } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../Theme/color.constants";

const { whiteColor, Harlequin, blackColor, paletteBlue,skyBlue } = Colors;

const breakpoints = createBreakpoints({});

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0px",
    backgroundColor: skyBlue,
    padding: "50px 0px 50px 0px",
    position: "relative"
  },
  cardSec: {
    display: "flex",
    width: "100%",
    flexFlow: "wrap",
    justifyContent: "center",
  },
  devSec: {
    color: blackColor,
    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
  },
  card: {
    width: "27%",
    height: "auto",
    display: "flex",
    zIndex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .25s linear",
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    margin: "20px",
    [breakpoints.only("md")]: {
      width: "30%",
    },
    [breakpoints.only("sm")]: {
      width: "40%",
    },
    [breakpoints.down("xs")]: {
      width: "70%",
    },
  },
  button: {
    borderRadius: "none",
    fontFamily: "Poppins",
    backgroundColor: paletteBlue,
    transition: "all .3s linear",
    color: Harlequin,
    "&:hover": {
      backgroundColor: Harlequin,
      color: whiteColor,
      transition: "all .3s linear",
    },
  },
  RightPattern:{
    position: "absolute",
    right: "0px",
    top: "0px",
    zIndex: 0,
    width: "500px"
  },
  LeftPattern:{
    position: "absolute",
    left: "0px",
    bottom: "0px",
    zIndex: 0,
    width: "300px"
  },
  

}));
