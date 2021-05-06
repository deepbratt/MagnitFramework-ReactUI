import { makeStyles } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});
const ServicesSectionStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    "& > img": {
      position: "absolute",
    },
  },
  bannerBtn: {
    maxWidth: "133px",
    margin: "20px 0",
    padding: "10px",
  },
  reviewSlider: {
    position: "relative",
    "& > img": {
      position: "absolute",
    },
  },
  avatar1: {
    position: "absolute",
    width: "120px",
    height: "120px",
    left: "3%",
    bottom: "1%",
    
  },
  avatar2: {
    position: "absolute",
    width: "110px",
    height: "110px",
    left: "0",
    top: "15%",
    [breakpoints.down("sm")]: {
    
    top: "10%",
     },
  },
  avatar3: {
    position: "absolute",
    width: "80px",
    height: "80px",
    left: "20%",
    top: "1%",
    [breakpoints.down("sm")]: {
    
      top: "-1%",
       },
    
  },
  avatar4: {
    position: "absolute",
    width: "100px",
    height: "100px",
    right: "14%",
    top: "3%",
    [breakpoints.down("sm")]: {
      width: "100px",
    height: "100px",
    right: "1%",
     },
  },
  avatar5: {
    position: "absolute",
    width: "108px",
    height: "108px",
    right: "-2%",
    top: "27%",
    [breakpoints.down("sm")]: {
    
      top: "24%",
       },
  },
  avatar6: {
    position: "absolute",
    width: "115px",
    height: "115px",
    right: "5%",
    bottom: "8%",
  
    
  },
  starFishPink: {
    right: "-16%",
    top: "1%",
    height: "500px",
    zIndex: -1,
  },
  leftStarFishPattern: {
    left: "-8%",
    top: "1%",
    height: "665px",
    [breakpoints.down("sm")]: {
     display:"none"
    },
    [breakpoints.down("md")]: {
      height: "665px",
     },
  },
  commaPattern: {
    top:" 78%",
    height: "70px",
    right: "267px",
    [breakpoints.down("sm")]: {
      right: "-5px",
      top:" 82%",
      height: "50px",
     },
     [breakpoints.down("md")]: {
      top:" 75%",
      right: "-10px",
     },
  },
  yellowCommaPattern:{
      top: "33%",
      left: "20%",
      height: "70px",
      [breakpoints.down("sm")]: {
        top: "29%",
        left: "-5%",
        height: "50px",
       },
       [breakpoints.down("md")]: {
        top: "34%",
        left: "-6%",
       },
    },
    pinkDotPattern:{
      top: "-4%",
    left: "-3%",
    height: "40px",
    [breakpoints.down("sm")]: {
      height: "30px"
       },
    },
    yellowDotPattern:{
      top: "97%",
      right: "-4%",
      height: "40px",
      [breakpoints.down("sm")]: {
        height: "30px"
         },
    },
    miniYellowPattern: {
      top: "62%",
      left: "4%",
      height: "18px"
     },
     smallDotPattern:{
      top: "-4%",
      right: "27%",
      height: "13px"
     },
  leftDottedPattern: {
    left: "-12%",
    top: "60%",
    height: "100px",
  },
  rightStarFishPattern: {
    right: "-13%",
    top: "1%",
    height: "650px",
    [breakpoints.down("sm")]: {
      height: "540px",
      right: "-10%",
     },
     [breakpoints.down("md")]: {
    
      right: "-11%",
     },
  },
  rightDottedPattern: {
    right: "-10%",
    top: "-9%",
    height: "100px",
    [breakpoints.down("sm")]: {
 
      right: "-9%",
     },
  },
  squareDotsPattern: {
    right: "30%",
    top: "5%",
    width: "80px",
  },
}));

export default ServicesSectionStyles;
