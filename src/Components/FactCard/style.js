import { makeStyles } from "@material-ui/core/styles";
import { fontSizes } from "../../Utils/Constants/Font/index";
const { h2, p } = fontSizes;
const FactCardStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "5px",
    margin: "10px",
    padding: "25px",
  },
  header: {
    fontSize: "3rem",
    fontWeight: "700",
    color: "white",
    [theme.breakpoints.down("lg")]: {
      fontSize: h2.lg,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: p.lg,
    },
  },
  subText: {
    fontSize: "1.25rem",
    lineHeight: "20px",
    fontWeight: "400",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: p.sm,
    },
  },
}));

export default FactCardStyles;
