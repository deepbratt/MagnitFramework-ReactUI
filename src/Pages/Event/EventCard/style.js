import { makeStyles } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});
const ActivityStyles = makeStyles((theme) => ({
  cardRoot:{
    // width:460,
    padding:"1.3rem",
    borderRadius:".5rem",
    boxShadow:"0px 4px 60px rgba(0, 0, 0, 0.1)",
    margin:"1rem",
    textAlign:"left",
    "& .MuiCardContent-root": {
         padding: "1rem 0rem" 
    },
    [breakpoints.down("sm")]: {
        margin:".5rem .2rem",
      },
  },
  cardImage:{
      height:264,
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
    color:"rgba(113, 113, 113, 1)",
    textAlign:"left",
    fontSize:"18px",
    fontWeight:400,
    lineHeight:"29.34px",
    letterSpacing:".2"
},

}));
  export default ActivityStyles;