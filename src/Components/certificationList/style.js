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
    "& > p": {
      color: darkSilver,
      [theme.breakpoints.down("md")]: {
        fontSize: "1rem",
      },
    },
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
