import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
import { fontSizes } from "../../Utils/Constants/Font/index";
const { h3, p } = fontSizes;
const { lg, sm } = h3;
const { darkSilver,Mirage } = Colors;
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
}));

export default CertificationListStyles;
