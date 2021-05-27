import { makeStyles } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

import { Colors } from "../../Theme/color.constants";
const {  Harlequin,DoveGray } = Colors;

const breakpoints = createBreakpoints({});
const EventStyles = makeStyles((theme) => ({
  root: {
    paddingBottom:'3rem',

  },
  cardSec: {
    padding: "0px",
    marginTop: "6rem",
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
    marginTop: "10px",
    color: DoveGray,
    [breakpoints.only("md")]: {
      width: "500px",
    },
    [breakpoints.down("xs")]: {
      width: "300px",
      marginTop: "5px",
    },
  },

  underlined: {
    position: "relative",
    color:"rgba(21, 27, 39, 1)",
    zIndex: 1,
    marginLeft: "10px",
    "&:after ": {
      position: "absolute",
      height: "17px",
      content: '""',
      zIndex: -1,
      width: "97px",
      right: 0,
      backgroundColor: Harlequin,
      bottom: "5px",
      [breakpoints.down("sm")]: {
        height: "11px",
        maxWidth: "3.4rem",
      },
    },
  },
  cardRoot:{
  display:"flex",
  flex: "wrap",
  marginBottom:"1rem",
  },
 seeMore:{
        padding: ".3rem 1rem",
 }
}));
  export default EventStyles;