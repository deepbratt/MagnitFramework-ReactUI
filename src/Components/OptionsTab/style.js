import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});
const { skyBlue } = Colors;

const OptionTabStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    [breakpoints.down("sm")]: {
      flexDirection:"column"
       },
  },
  tabs: {
    margin: "10px",
    border: "none",
    width: "40%",
    [breakpoints.down("sm")]: {
      width: "100%",
       },
  
  },
  tab: {
    margin: "10px",
    border: "1px solid #2CD400",
    fontSize:"1rem",
    textAlign:"left",
    alignItems:"left",
    borderRadius: "5px",
    "&.Mui-selected": { backgroundColor:"#2CD400",color:"white"},
  },
 

  tabPanel: {
    backgroundColor: skyBlue,
    height: "100%",
    width: "100%",
    borderRadius: "5px",
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
