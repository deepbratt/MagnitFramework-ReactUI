import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
const { darkSilver, coldBlue } = Colors;
const CertificationListStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // justifyContent: "space-between",
    // alignContent: "center",
    // alignItems: "stretch",
  },
  text: {
    textAlign: "left",
  },
  "& > p": {
    color: darkSilver,
  },
  imageWrapper: {
    "& > img": {
      maxwidth: "458px",
      maxHeight: "258px",
      [theme.breakpoints.down("sm")]: {
        maxwidth: "300px",
        maxHeight: "300px",
      },
    },
    "& > svg": {
      // maxwidth: "200px",
      maxHeight: "258px",
      [theme.breakpoints.down("sm")]: {
        maxwidth: "300px",
        maxHeight: "300px",
      },
    },
  },
  leftAlignment: {
    height:"100%",
    textAlign: "left",
    padding: "0",
    background: `linear-gradient(#FFF, #FFF), 
        linear-gradient(to right, ${coldBlue} 0%, #FFF 50%)`,
    backgroundOrigin: "padding-box, border-box",
    backgroundRepeat: "no-repeat" /* this is important */,
    border: "5px solid transparent",
    borderRight:0
  },
  rightAlignment: {
    height:"100%",
    textAlign: "right",
    padding: "0",
    background: `linear-gradient(#FFF, #FFF), 
        linear-gradient(to left, ${coldBlue} 0%, #FFF 50%)`,
    backgroundOrigin: "padding-box, border-box",
    backgroundRepeat: "no-repeat" /* this is important */,
    border: "5px solid transparent",
    borderLeft:0
  },
}));

export default CertificationListStyles;
