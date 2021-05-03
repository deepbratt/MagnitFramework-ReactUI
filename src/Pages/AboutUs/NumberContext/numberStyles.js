import { makeStyles } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import {Colors} from "../../../Theme/color.constants"

const {mustardColor,skyBlueColor,rosePinkColor,darkBlueColor} = Colors
const breakpoints = createBreakpoints({});

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0px",
  },
  cardSec: {
    display: "flex",
    width: "100%",
    flexFlow: "wrap",
    justifyContent: "center",
  
  },
  card: {
    backgroundColor: skyBlueColor,
    width: "20%",
    height: "150px",
    display: "flex",
    flexDirection: "column",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .25s linear",
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    "&:hover": { boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)" },
    margin: "20px",
    cursor: "pointer",
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
  card2: {
    backgroundColor: rosePinkColor,
    width: "20%",
    height: "150px",
    display: "flex",
    flexDirection: "column",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .25s linear",
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    "&:hover": { boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)" },
    margin: "20px",
    cursor: "pointer",
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
  card3: {
    backgroundColor: darkBlueColor,
    width: "20%",
    height: "150px",
    display: "flex",
    flexDirection: "column",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .25s linear",
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    "&:hover": { boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)" },
    margin: "20px",
    cursor: "pointer",
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
  card4: {
    backgroundColor: mustardColor,
    width: "20%",
    height: "150px",
    display: "flex",
    flexDirection: "column",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .25s linear",
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    "&:hover": { boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)" },
    margin: "20px",
    cursor: "pointer",
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
  
  
  
}));
