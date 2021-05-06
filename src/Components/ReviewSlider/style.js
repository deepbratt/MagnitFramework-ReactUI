import { makeStyles } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});
const ReviewSliderStyles = makeStyles((theme) => ({
  root: { borderRadius: "10px", padding: "20px", margin: "20px" },
  avatar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },

  nextBtn:{
    position: "absolute",
    top: "27.7em",
    right:"16.3em",
    bottom: "auto",
    padding: ".4em",
    zIndex: 1,
    color:"white",
    border:"none",
    width:"50px",
    height:"50px",
    borderRadius:"50%",
    backgroundColor: "#151B27",
    [breakpoints.down("sm")]: {
      top: "32.7em",
      right:"0.3em",
      width:"40px",
    height:"40px",
       },
       [breakpoints.down("md")]: {
        top: "26.7em",
        right:"0.3em",
      
         },
  },
  prevBtn:{
    position: "absolute",
    inset:"27.7em 16.3em auto 13.5rem",
    padding: ".4em",
    zIndex: 1,
    color:"white",
    border:"none",
    width:"50px",
    height:"50px",
    borderRadius:"50%",
    backgroundColor: "#151B27",
    [breakpoints.down("sm")]: {
      inset:"32.7em 16.3em auto 0.5rem",
      width:"40px",
    height:"40px",
       },
       [breakpoints.down("md")]: {
        inset:"26.7em 16.3em auto 0.5rem",
     
         },
         
  },
 
  

}));

export default ReviewSliderStyles;
