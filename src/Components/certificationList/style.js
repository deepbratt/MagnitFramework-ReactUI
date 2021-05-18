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
    "& > h3": {
      color:Mirage,
      [theme.breakpoints.down("sm")]: {
        fontSize: lg,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: sm,
      },
    },
    "& > p": {
      color: darkSilver,
      [theme.breakpoints.down("md")]: {
        fontSize: p.lg,
        lineHeight: "32px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: p.sm,
        lineHeight: "24px",
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
