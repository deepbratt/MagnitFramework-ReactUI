import { makeStyles } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../../Theme/color.constants";

const { whiteColor, Harlequin, blackColor, Solitude } = Colors;

const breakpoints = createBreakpoints({});

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0px",
    marginBottom: "50px",
    backgroundColor: Solitude,
    padding: "50px 0px 50px 0px",
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
    height: "280px",
    display: "flex",
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
    backgroundColor: whiteColor,
    transition: "all .3s linear",
    color: blackColor,
    border: `solid 1px ${Harlequin}`,
    "&:hover": {
      backgroundColor: Harlequin,
      color: whiteColor,
      transition: "all .3s linear",
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
      right: 0,
      width: "240px",
      backgroundColor: Harlequin,
      bottom: "5px",
      [breakpoints.down("sm")]: {
        width: "120px",
        height: "10px",
      },
      [breakpoints.down("md")]: {
        height: "10px",
      },
    },
  },
}));
