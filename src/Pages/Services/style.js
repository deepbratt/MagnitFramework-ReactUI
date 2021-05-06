import { makeStyles } from "@material-ui/core";

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
  },
  avatar3: {
    position: "absolute",
    width: "80px",
    height: "80px",
    left: "20%",
    top: "1%",
  },
  avatar4: {
    position: "absolute",
    width: "100px",
    height: "100px",
    right: "14%",
    top: "3%",
  },
  avatar5: {
    position: "absolute",
    width: "108px",
    height: "108px",
    right: "-2%",
    top: "27%",
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
  },
  commaPattern: {
    top:" 78%",
    height: "70px",
    right: "267px",
  },
  yellowCommaPattern:{
      top: "33%",
      left: "20%",
      height: "70px"
    },
    pinkDotPattern:{
      top: "-4%",
    left: "-3%",
    height: "40px"
    },
    yellowDotPattern:{
      top: "97%",
      right: "-4%",
      height: "40px"
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
  },
  rightDottedPattern: {
    right: "-10%",
    top: "-9%",
    height: "100px",
  },
  squareDotsPattern: {
    right: "30%",
    top: "5%",
    width: "80px",
  },
}));

export default ServicesSectionStyles;
