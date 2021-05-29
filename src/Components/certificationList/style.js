import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
const { darkSilver } = Colors;
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
}));

export default CertificationListStyles;
