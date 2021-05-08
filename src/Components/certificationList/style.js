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
    "& > h3": {
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
    "& > p": {
      color: darkSilver,
      [theme.breakpoints.down("md")]: {
        fontSize: "1.5rem",
        lineHeight: "32px"
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
        lineHeight: "24px"
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
