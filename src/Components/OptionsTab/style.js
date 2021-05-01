import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";

const { pictonBlue } = Colors;

const OptionTabStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  tabs: {
    margin: "10px",
    border: "none",
    width: "35%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    "& > .PrivateTabIndicator-colorSecondary-79, .PrivateTabIndicator-colorSecondary-81": {
      width: "0px",
    },
  },
  tab: {
    margin: "10px",
    border: "1px solid #1DBF73",
    color: "#1DBF73",
    fontSize: "14px",
    borderRadius: "5px",
    "& > .MuiTab-textColorInherit .Mui-selected": {
      backgroundColor: "#1DBF73",
      color: "white",
    },
  },
  tabPanel: {
    backgroundColor: pictonBlue,
    height: "100%",
    width: "100%",
    borderRadius: "5px",
    textAlign: "left",
  },
}));

export default OptionTabStyles;
