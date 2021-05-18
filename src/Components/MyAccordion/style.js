import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../Theme/color.constants";
import {fontSizes} from "../../Utils/Constants/Font/index"
const {h5,p} = fontSizes
const {Mirage,darkSilver}= Colors
const LayoutStyle = makeStyles((theme) => ({
  root: {
    margin: "0px",
    "& > h6": {
      [theme.breakpoints.down("md")]: {
        fontSize: "0.625rem"
      },
    },
  },
  title: {
    margin: "5px",
    textAlign: "left",
    color:Mirage,
    fontSize: h5.lg
  },
  details: {
    color:darkSilver,
    fontSize: p.lg,
    [theme.breakpoints.down("md")]: {
      fontSize: "0.75rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.60rem",
    },
  },
  customBtn:{
    marginTop:"4rem"
  }
}));

export default LayoutStyle;
