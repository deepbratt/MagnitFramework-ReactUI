import { makeStyles } from "@material-ui/core/styles";
import {fontSizes} from "../../Utils/Constants/Font/index"
const {h2,p,h5} = fontSizes
const FactCardStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "5px",
  },
  header: {
    fontSize: h2.lg,
    fontWeight: "500",
    [theme.breakpoints.down("lg")]: {
      fontSize: h5.lg,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: p.lg,
    },
  },
  subText: {
    fontSize: p.lg,
    fontWeight: "400",
    [theme.breakpoints.down("xs")]: {
      fontSize: p.sm,
    },
  },
}));

export default FactCardStyles;
