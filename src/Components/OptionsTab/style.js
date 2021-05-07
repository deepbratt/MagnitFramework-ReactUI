import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});
const { skyBlue } = Colors;

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
      "& .MuiTabs-flexContainerVertical":{
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          justifyContent: "space-around",
          flexDirection:" row",},
    
    },
    "& > .PrivateTabIndicator-colorSecondary-79, .PrivateTabIndicator-colorSecondary-81": {
      width: "0px",
    },
  },
  tab: {
    margin: "10px",
    border: "1px solid rgba(44, 212, 0, 1)",
    color: "rgba(44, 212, 0, 1)",
    fontSize: "14px",
    borderRadius: "5px",
    "& > .MuiTab-textColorInherit .Mui-selected": {
      backgroundColor: "#2cd400",
      color: "white",
    },
  },
  tabPanel: {
    backgroundColor: skyBlue,
    height: "100%",
    width: "100%",
    borderRadius: "5px",
    textAlign: "left",
  },
  detail:{
    fontWeight: 400,
      fontSize: ".8rem",
      color: "#E1E1E1",
      lineHeight: "1.5",
      margin:".5rem 0rem 1rem 0rem",
      letterSpacing:".4"
  },
  bulletText:{
    fontWeight: 400,
    fontSize: ".7rem",
    color: "#FFFFFF",
    lineHeight: "17.34px"
  },
  textDiv:{
    display:"flex",
  flexDirection:"row"
},

}));

export default OptionTabStyles;
