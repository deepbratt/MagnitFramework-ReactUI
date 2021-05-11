import { makeStyles } from "@material-ui/core/styles";
import {fontSizes} from "../../Utils/Constants/Font/index"
const {h5} = fontSizes
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
    fontSize: h5.lg
  },
  details: {
    [theme.breakpoints.down("md")]: {
      fontSize: "0.75rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.60rem",
    },
  },
}));

export default LayoutStyle;
