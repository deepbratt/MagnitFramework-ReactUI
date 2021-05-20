import { makeStyles } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../Theme/color.constants";
const {Mirage}=Colors;
const ServicesSectionStyles = makeStyles((theme) => ({
  textColor: {
    color:Mirage,
  },
  bannerBtn: {
    maxWidth: "133px",
    margin: "20px 0",
    padding: "10px",
  },
  leftPattern: {
    position:"absolute",
    left: "-4%",
    top: "0%",
    width: "700px",
    zIndex: 0,
    
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
    position:"absolute",
    right: "-1%",
    top: "65%",
    opacity: 0.3,
    width: "700px",
    zIndex: 0,
    [theme.breakpoints.down("md")]: {
      width: "500px",
      right: "-10%",
    top: "65%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      right: "-10%",
      top: "88%",
    },
  },
 
}));

export default ServicesSectionStyles;
