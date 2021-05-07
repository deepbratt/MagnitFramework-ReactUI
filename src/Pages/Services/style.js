import { makeStyles } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});
const ServicesSectionStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginTop: "0px",
    [theme.breakpoints.only("md")]: {
      marginTop: "-7px"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "-19px"
    },
  
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
  leftPattern: {
    left: "-5%",
    top: "8%",
    opacity: 0.3,
    width: "700px",
    [theme.breakpoints.down("md")]: {
      width: "500px",
      left: "2%",
      top: "8%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      left: "0%",
      top: "10%",
    },
  },
  rightPattern: {
    right: "0%",
    top: "25%",
    opacity: 0.3,
    width: "700px",
    [theme.breakpoints.down("md")]: {
      width: "500px",
      right: "0%",
    top: "25%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      right: "0%",
      top: "25%",
    },
  },
  avatar1: {
    position: "absolute",
    width: "120px",
    height: "120px",
    left: "3%",
    bottom: "1%",
    [theme.breakpoints.down("md")]: {
      width: "100px",
      height: "100px",
      bottom: "-3%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70px",
      height: "70px",
      bottom: "-9%",
    },
  },
  avatar2: {
    position: "absolute",
    width: "110px",
    height: "110px",
    left: "0",
    top: "15%",
    [theme.breakpoints.down("md")]: {
      width: "90px",
      height: "90px",
    },
    [theme.breakpoints.down("sm")]: {
      top: "8%",
      width: "60px",
      height: "60px",
    },
  },
  avatar3: {
    position: "absolute",
    width: "80px",
    height: "80px",
    left: "20%",
    top: "1%",
    [theme.breakpoints.down("md")]: {
      width: "60px",
      height: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30px",
      height: "30px",
      top: "-5%",
    },
  },
  avatar4: {
    position: "absolute",
    width: "100px",
    height: "100px",
    right: "14%",
    top: "3%",
    [theme.breakpoints.down("md")]: {
      width: "80px",
      height: "80px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50px",
      height: "50px",
      top: "-3%",
    },
  },
  avatar5: {
    position: "absolute",
    width: "111px",
    height: "111px",
    right: "4%",
    top: "25%",
    [theme.breakpoints.down("md")]: {
      width: "91px",
      height: "91px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "61px",
      height: "61px",
      top: "12%",
      right: "3%",
    },
  },
  avatar6: {
    position: "absolute",
    width: "115px",
    height: "115px",
    right: "5%",
    bottom: "8%",
    [theme.breakpoints.down("md")]: {
      width: "103px",
      height: "103px",
      bottom: "3%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "67px",
      height: "67px",
      bottom: "-3%",
    },
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
    height: "500px",
    [theme.breakpoints.down("md")]: {
      height: "400px",
      left: "-25%",
      top: "5%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "300px",
      left: "-35%",
      top: "5%",
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
      top: "38%",
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
    [theme.breakpoints.down("md")]: {
      top: "60%",
      left: "-15%",
    },
    [theme.breakpoints.down("sm")]: {
      top: "60%",
      left: "-15%",
      height: "70px",
    },
  },
  rightStarFishPattern: {
    right: "-13%",
    top: "1%",
    height: "500px",
    [theme.breakpoints.down("md")]: {
      height: "400px",
      right: "-0%",
      top: "2%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "300px",
      right: "0%",
      top: "-10%",
    },
  },
  rightDottedPattern: {
    right: "-12%",
    top: "-15%",
    height: "100px",
    [theme.breakpoints.down("md")]: {
      top: "-15%",
    },
    [theme.breakpoints.down("sm")]: {
      top: "-20%",
      height: "70px",
    },
  },
  squareDotsPattern: {
    right: "30%",
    top: "5%",
    width: "80px",
    [theme.breakpoints.down("md")]: {
      width: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30px",
      right: "40%",
      top: "0%",
    },
  },
}));

export default ServicesSectionStyles;
