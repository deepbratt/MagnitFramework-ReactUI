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
    width: "130px",
    height: "130px",
    left: "5%",
    bottom: "1%",
  },
  avatar2: {
    position: "absolute",
    width: "120px",
    height: "120px",
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
    width: "110px",
    height: "110px",
    right: "15%",
    top: "3%",
  },
  avatar5: {
    position: "absolute",
    width: "111px",
    height: "111px",
    right: "4%",
    top: "25%",
  },
  avatar6: {
    position: "absolute",
    width: "123px",
    height: "123px",
    right: "10%",
    bottom: "8%",
  },
  starFishPink: {
    right: "-16%",
    top: "1%",
    height: "500px",
    zIndex: -1,
  },
  leftStarFishPattern: {
    left: "-16%",
    top: "1%",
    height: "500px",
  },
  leftDottedPattern: {
    left: "-12%",
    top: "60%",
    height: "100px",
  },
  rightStarFishPattern: {
    right: "-16%",
    top: "1%",
    height: "500px",
  },
  rightDottedPattern: {
    right: "-12%",
    top: "-18%",
    height: "100px",
  },
  squareDotsPattern: {
    right: "30%",
    top: "5%",
    width: "80px",
  },
}));

export default ServicesSectionStyles;
