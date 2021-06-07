import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../Theme/color.constants";
const {Mirage,darkSilver}= Colors
const LayoutStyle = makeStyles((theme) => ({
  root: {
    paddingTop: "35px",
    // "& > h6": {
    //   [theme.breakpoints.down("md")]: {
    //     fontSize: "0.625rem"
    //   },
    // },
  },
  title: {
    margin: "5px",
    textAlign: "left",
    color:Mirage,
  },
  details: {
    color:darkSilver,
  },
  customBtn:{
    marginTop:"4rem"
  }
}));

export default LayoutStyle;
