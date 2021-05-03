import { makeStyles } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../../Theme/color.constants";

const { mustardColor, skyBlueColor, whiteColor } = Colors;
const breakpoints = createBreakpoints({});

export const missionStyles = makeStyles((theme) => ({
  grid:{
   overflow: "hidden"
  },
  card: {
    backgroundColor: skyBlueColor,
    width: "30%",
    height: "180px",
    display: "flex",
    flexDirection: "column",
    color: whiteColor,
    alignItems: "center",
    justifyContent: "center",
    transition: "all .25s linear",
    boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
    margin: "20px",
    cursor: "pointer",
    [breakpoints.only("md")]: {
      width: "30%",
    },
    [breakpoints.up("md")]: {
      textAlign: "left",
    },
    [breakpoints.only("sm")]: {
      width: "40%",
    },
    [breakpoints.down("xs")]: {
      width: "70%",
    },
    [breakpoints.down("sm")]: {
      height: "200px",
    },
  },
  card2: {
    backgroundColor: mustardColor,
    width: "30%",
    height: "180px",
    display: "flex",
    flexDirection: "column",
    color: whiteColor,
    alignItems: "center",
    justifyContent: "center",
    transition: "all .25s linear",
    boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
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
    [breakpoints.up("md")]: {
      textAlign: "left",
    },
    [breakpoints.down("sm")]: {
      height: "200px",
    },
  },
}));
