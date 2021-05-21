import { makeStyles } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../Theme/color.constants";

const { MoonWhite ,Harlequin} = Colors;
const breakpoints = createBreakpoints({});

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: MoonWhite,
    paddingTop: "30px"
  },
  cardSec:{
    display: "flex",
    width: "100%",
    flexDirection: "wrap"
  },
  content:{
    marginTop: "40px",
    textAlign: "left",
    [breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: "0px",
    },
  },
  
  image:{
    [breakpoints.down("sm")]: {
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
      right: 0,
      width: "160px",
      backgroundColor: Harlequin,
      bottom: "5px",
      [breakpoints.down("md")]: {
        height: "10px",
        width: "110px",
      },
    },
  },
  cardSec: {
    display: "flex",
    width: "100%",
    flexFlow: "wrap",
    justifyContent: "center",
  },
}));
