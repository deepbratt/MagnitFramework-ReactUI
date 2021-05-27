import { makeStyles } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../../Theme/color.constants";
const breakpoints = createBreakpoints({});
const {darkSilver}=Colors;
const ActivityStyles = makeStyles((theme) => ({
  cardRoot:{
    // width:460,
    padding:"1.3rem",
    borderRadius:".5rem",
    boxShadow:"0px 4px 60px rgba(0, 0, 0, 0.1)",
    margin:"1rem .5rem",
    textAlign:"left",
    height:"90%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-evenly",
    "& .MuiCardContent-root": {
         padding: "1rem 0rem" 
    },
    [breakpoints.down("sm")]: {
        margin:".5rem .2rem",
      },
  },
  cardImage:{
      height:"auto",
    //   width:460,
      [breakpoints.down("sm")]: {
        height:"auto",
        
      },
  },
  cardTitle:{
    color:"black",
    textAlign:"left",
    fontSize:"20px",
    fontWeight:600,
},
  cardpara:{
    color:darkSilver,
    textAlign:"left",
    fontSize:"18px",
    fontWeight:300,
    lineHeight:"29.34px",
    letterSpacing:".2"
},

}));
  export default ActivityStyles;