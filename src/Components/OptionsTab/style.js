import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
const { skyBlue, Harlequin, chineseWhite } = Colors;

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
    "& .MuiTabs-flexContainerVertical": {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        justifyContent: "space-around",
        flexDirection: " row",
      },
    },
    "& > .PrivateTabIndicator-colorSecondary-79, .PrivateTabIndicator-colorSecondary-81":
      {
        width: "0px",
      },
  },
  tab: {
    margin: "10px",
    border: "1px solid rgba(44, 212, 0, 1)",
    color: "black",
    fontSize: "14px",
    borderRadius: "2px",
    "& > .MuiTab-textColorInherit .Mui-selected": {
      backgroundColor: Harlequin,
      color: "white",
    },
  },
  tabPanel: {
    backgroundColor: skyBlue,
    height: "100%",
    width: "100%",
    borderRadius: "5px",
    "& > *": {
      color: "white",
    },
  },
  detail: {
    fontWeight: 400,
    fontSize: ".8rem",
    color: chineseWhite,
    lineHeight: "1.5",
    margin: ".5rem 0rem 1rem 0rem",
    letterSpacing: ".4",
  },
  bulletText: {
    fontWeight: 400,
    fontSize: ".7rem",
    color: "white",
    lineHeight: "17.34px",
  },
  textDiv: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default OptionTabStyles;
