import { makeStyles } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../Theme/color.constants";
import {fontSizes} from "../../Utils/Constants/Font/index"
const {p} = fontSizes
const breakpoints = createBreakpoints({});
const {Mirage}=Colors;
const ReviewSliderStyles = makeStyles((theme) => ({
  grid: {
    margin: "80px 0",
    [theme.breakpoints.down("md")]: {
      margin: "60px 0",
    },
  },
  root: {
    borderRadius: "10px",
    padding: "20px 30px",
    margin: "20px ",
    [theme.breakpoints.down("md")]: {
      padding: "10px",
      margin: "5px",
    },
  },
  avatar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  },
  content: {
    "& > p": {
      color:Mirage,
      [theme.breakpoints.down("md")]: {
        fontSize: p.lg,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: p.sm,
      },
    },
  },

  nextBtn:{
    position: "absolute",
    top:"60%",
    right:"50%",
    transform: "translate(27rem, 0rem)",
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
      display:"none"
       },
       [breakpoints.only("md")]: {
        display:"none"
      
         },
  },
  prevBtn:{
    position: "absolute",
    top:"60%",
    left:"50%",
    transform: "translate(-27rem, 0rem)",
    padding: ".4em",
    zIndex: 1,
    color:"white",
    border:"none",
    width:"50px",
    height:"50px",
    borderRadius:"50%",
    backgroundColor: "#151B27",
    [breakpoints.down("sm")]: {
      display:"none"
       },
       [breakpoints.only("md")]: {
        display:"none"
     
         },
         
  },
 
  

}));

export default ReviewSliderStyles;
