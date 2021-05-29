import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
const { darkSilver, coldBlue } = Colors;
const CertificationListStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
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
      maxHeight: "458px",
      [theme.breakpoints.down("sm")]: {
        maxwidth: "300px",
        maxHeight: "300px",
      },
    },
  },
  leftAlignment: {
    textAlign: "left",
    padding: "20px",
    background: `linear-gradient(#FFF, #FFF), 
        linear-gradient(to right, ${coldBlue}, #FFF)`,
    backgroundOrigin: "padding-box, border-box",
    backgroundRepeat: "no-repeat" /* this is important */,
    border: "5px solid transparent",
  },
  rightAlignment: {
    textAlign: "right",
    padding: "20px",
    background: `linear-gradient(#FFF, #FFF), 
        linear-gradient(to left, ${coldBlue}, #FFF)`,
    backgroundOrigin: "padding-box, border-box",
    backgroundRepeat: "no-repeat" /* this is important */,
    border: "5px solid transparent",
  },
}));

export default CertificationListStyles;
