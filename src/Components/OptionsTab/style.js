import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";

const { pictonBlue } = Colors;

const OptionTabStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  tabs: {
    margin: "10px",
    border: "none",
    width: "40%",
  },
  tab: {
    margin: "10px",
    border: "1px solid #1DBF73",
    borderRadius: "5px",
    "& > .Mui-selected": {},
  },

  tabPanel: {
    backgroundColor: pictonBlue,
    height: "100%",
    width: "100%",
    borderRadius: "5px",
  },
}));

export default OptionTabStyles;
